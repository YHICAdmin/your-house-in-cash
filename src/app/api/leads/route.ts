import { after, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyLead, notifySellerLeadConfirmation } from "@/lib/notifications";
import { sendSellerSmsConfirmation } from "@/lib/quo";
import { parseLeadBasics } from "@/lib/submissions";

const EMAIL_MARKETING_CONSENT_VERSION = "email-marketing-v1";
const sellerSmsEnabled = process.env.ENABLE_SELLER_SMS === "true" || (process.env.ENABLE_SELLER_SMS === undefined && process.env.NODE_ENV === "production");

type SavedLead = {
  id: string;
  property_address: string;
  seller_name: string;
  phone_digits: string;
  email_address: string;
  notes: string | null;
  created: boolean;
};

async function sendLeadNotifications(saved: SavedLead) {
  const lead = { address: saved.property_address, name: saved.seller_name, phone: saved.phone_digits, email: saved.email_address, notes: saved.notes };
  await Promise.all([
    notifyLead(lead, `cash-offer-lead/${saved.id}`).then(delivery => {
      if (!delivery.delivered) console.error("Lead notification was not delivered.", delivery.error);
    }).catch(error => console.error("Lead notification failed unexpectedly.", error)),
    notifySellerLeadConfirmation(lead, `cash-offer-lead-confirmation/${saved.id}`).then(delivery => {
      if (!delivery.delivered) console.error("Seller confirmation email was not delivered.", delivery.error);
    }).catch(error => console.error("Seller confirmation email failed unexpectedly.", error)),
    ...(sellerSmsEnabled ? [sendSellerSmsOnce(saved)] : []),
  ]);
}

async function sendSellerSmsOnce(saved: SavedLead) {
  try {
    const smsClaim = await sql`
      update leads
      set sms_confirmation_attempted_at = now()
      where id = ${saved.id} and sms_confirmation_attempted_at is null
      returning id
    ` as { id: string }[];
    if (smsClaim.length) await sendSellerSmsConfirmation(saved.seller_name, saved.phone_digits);
  } catch (error) { console.error("Seller SMS confirmation failed unexpectedly.", error); }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const lead = parseLeadBasics(body);
  if (!lead) return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  const submissionKey = request.headers.get("Idempotency-Key");
  if (!submissionKey || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionKey)) return NextResponse.json({ error: "Invalid submission key." }, { status: 400 });
  try {
    const rows = await sql`
      with saved_lead as (
        insert into leads (property_address, seller_name, phone_digits, email_address, notes, email_marketing_opt_in, email_marketing_consented_at, email_marketing_consent_version, submission_key)
        values (${lead.address}, ${lead.name}, ${lead.phone}, ${lead.email}, ${lead.notes}, ${lead.emailMarketingOptIn}, ${lead.emailMarketingOptIn ? sql`now()` : null}, ${lead.emailMarketingOptIn ? EMAIL_MARKETING_CONSENT_VERSION : null}, ${submissionKey})
        on conflict (submission_key) do nothing
        returning id, property_address, seller_name, phone_digits, email_address, notes, true as created
      ), existing_lead as (
        select id, property_address, seller_name, phone_digits, email_address, notes, false as created
        from leads
        where submission_key = ${submissionKey} and not exists (select 1 from saved_lead)
      )
      select id, property_address, seller_name, phone_digits, email_address, notes, created from saved_lead
      union all
      select id, property_address, seller_name, phone_digits, email_address, notes, created from existing_lead
    ` as SavedLead[];
    const saved = rows[0];
    if (!saved) throw new Error("Lead was not returned after saving.");
    if (saved.created) after(() => sendLeadNotifications(saved));
    return NextResponse.json({ leadId: saved.id, created: saved.created }, { status: saved.created ? 201 : 200 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
