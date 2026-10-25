import { after, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyBuyerConfirmation, notifyBuyerRegistration } from "@/lib/notifications";
import { parseBuyerRegistration } from "@/lib/submissions";

const EMAIL_CONSENT_VERSION = "buyer-email-marketing-v1";
const SMS_CONSENT_VERSION = "buyer-sms-marketing-v1";

type SavedBuyer = { id: string; created: boolean; full_name: string; email_address: string; phone_digits: string | null; purchasing_method: string | null; investment_strategies: string[]; purchase_budget: string | null; preferred_areas: string | null; email_marketing_opt_in: boolean; sms_marketing_opt_in: boolean; created_at: string };
async function sendBuyerNotifications(buyer: SavedBuyer) {
  const notification = { fullName: buyer.full_name, email: buyer.email_address, phone: buyer.phone_digits, purchasingMethod: buyer.purchasing_method, investmentStrategies: buyer.investment_strategies, purchaseBudget: buyer.purchase_budget, preferredAreas: buyer.preferred_areas, emailMarketingConsent: buyer.email_marketing_opt_in, smsMarketingConsent: buyer.sms_marketing_opt_in, registeredAt: buyer.created_at };
  await Promise.all([
    notifyBuyerConfirmation(notification, `buyer-confirmation/${buyer.id}`),
    notifyBuyerRegistration(notification, `buyer-team-notification/${buyer.id}`),
  ].map(promise => promise.then(result => { if (!result.delivered) console.error("Buyer notification was not delivered.", result.error); }).catch(error => console.error("Buyer notification failed unexpectedly.", error))));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const buyer = parseBuyerRegistration(body);
  if (!buyer) return NextResponse.json({ error: "Invalid buyer registration." }, { status: 400 });

  const submissionKey = request.headers.get("Idempotency-Key");
  if (!submissionKey || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionKey)) {
    return NextResponse.json({ error: "Invalid submission key." }, { status: 400 });
  }

  try {
    const rows = await sql`
      with saved_buyer as (
        insert into buyer_registrations (
          full_name, email_address, phone_digits, purchasing_method, investment_strategies,
          purchase_budget, preferred_areas, email_marketing_opt_in,
          email_marketing_consented_at, email_marketing_consent_version,
          sms_marketing_opt_in, sms_marketing_consented_at, sms_marketing_consent_version,
          submission_key
        ) values (
          ${buyer.name}, ${buyer.email}, ${buyer.phone}, ${buyer.purchasingMethod}, ${buyer.investmentStrategies},
          ${buyer.purchaseBudget}, ${buyer.preferredAreas}, ${buyer.emailMarketingConsent},
          ${buyer.emailMarketingConsent ? sql`now()` : null}, ${buyer.emailMarketingConsent ? EMAIL_CONSENT_VERSION : null},
          ${buyer.smsMarketingConsent}, ${buyer.smsMarketingConsent ? sql`now()` : null}, ${buyer.smsMarketingConsent ? SMS_CONSENT_VERSION : null},
          ${submissionKey}
        )
        on conflict (lower(email_address)) do update set
          full_name = excluded.full_name,
          phone_digits = excluded.phone_digits,
          purchasing_method = excluded.purchasing_method,
          investment_strategies = excluded.investment_strategies,
          purchase_budget = excluded.purchase_budget,
          preferred_areas = excluded.preferred_areas,
          email_marketing_opt_in = buyer_registrations.email_marketing_opt_in or excluded.email_marketing_opt_in,
          email_marketing_consented_at = case when excluded.email_marketing_opt_in then now() else buyer_registrations.email_marketing_consented_at end,
          email_marketing_consent_version = case when excluded.email_marketing_opt_in then ${EMAIL_CONSENT_VERSION} else buyer_registrations.email_marketing_consent_version end,
          sms_marketing_opt_in = buyer_registrations.sms_marketing_opt_in or excluded.sms_marketing_opt_in,
          sms_marketing_consented_at = case when excluded.sms_marketing_opt_in then now() else buyer_registrations.sms_marketing_consented_at end,
          sms_marketing_consent_version = case when excluded.sms_marketing_opt_in then ${SMS_CONSENT_VERSION} else buyer_registrations.sms_marketing_consent_version end,
          submission_key = excluded.submission_key
        returning
          id,
          full_name,
          email_address,
          phone_digits,
          purchasing_method,
          investment_strategies,
          purchase_budget,
          preferred_areas,
          email_marketing_opt_in,
          sms_marketing_opt_in,
          created_at,
          (xmax = 0) as created
      )
      select id, created, full_name, email_address, phone_digits, purchasing_method, investment_strategies, purchase_budget, preferred_areas, email_marketing_opt_in, sms_marketing_opt_in, created_at::text from saved_buyer
    ` as SavedBuyer[];
    const saved = rows[0];
    if (!saved) throw new Error("Buyer registration was not returned after saving.");
    if (saved.created) after(() => sendBuyerNotifications(saved));
    return NextResponse.json({ buyerId: saved.id, created: saved.created }, { status: saved.created ? 201 : 200 });
  } catch (error) {
    console.error("Unable to save buyer registration.", error);
    return NextResponse.json({ error: "Unable to save buyer registration." }, { status: 500 });
  }
}
