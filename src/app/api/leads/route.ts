import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyLead, notifySellerLeadConfirmation } from "@/lib/notifications";
import { parseLeadBasics } from "@/lib/submissions";

const EMAIL_MARKETING_CONSENT_VERSION = "email-marketing-v1";

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
        on conflict (submission_key) do update set submission_key = excluded.submission_key
        returning id, property_address, seller_name, phone_digits, email_address, notes
      )
      select id, property_address, seller_name, phone_digits, email_address, notes from saved_lead
    ` as { id: string; property_address: string; seller_name: string; phone_digits: string; email_address: string; notes: string | null }[];
    const saved = rows[0];
    try {
      const delivery = await notifyLead({ address: saved.property_address, name: saved.seller_name, phone: saved.phone_digits, email: saved.email_address, notes: saved.notes }, `cash-offer-lead/${saved.id}`);
      if (!delivery.delivered) console.error("Lead notification was not delivered.", delivery.error);
    } catch (error) { console.error("Lead notification failed unexpectedly.", error); }
    try {
      const delivery = await notifySellerLeadConfirmation({ address: saved.property_address, name: saved.seller_name, email: saved.email_address }, `cash-offer-lead-confirmation/${saved.id}`);
      if (!delivery.delivered) console.error("Seller confirmation email was not delivered.", delivery.error);
    } catch (error) { console.error("Seller confirmation email failed unexpectedly.", error); }
    return NextResponse.json({ leadId: saved.id }, { status: 201 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
