import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyContactMessage, notifyContactSenderConfirmation } from "@/lib/notifications";
import { sendContactSmsConfirmation } from "@/lib/quo";
import { parseContactMessage } from "@/lib/submissions";

const EMAIL_MARKETING_CONSENT_VERSION = "email-marketing-v1";

type SavedMessage = { id: string; created: boolean };

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = parseContactMessage(body);
  if (!message) return NextResponse.json({ error: "Invalid message details." }, { status: 400 });
  const submissionKey = request.headers.get("Idempotency-Key");
  if (!submissionKey || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionKey)) return NextResponse.json({ error: "Invalid submission key." }, { status: 400 });
  try {
    const rows = await sql`
      with saved_message as (
        insert into contact_messages (sender_name, email_address, phone_digits, property_address, message, email_marketing_opt_in, email_marketing_consented_at, email_marketing_consent_version, submission_key)
        values (${message.name}, ${message.email}, ${message.phone}, ${message.address}, ${message.message}, ${message.emailMarketingOptIn}, ${message.emailMarketingOptIn ? sql`now()` : null}, ${message.emailMarketingOptIn ? EMAIL_MARKETING_CONSENT_VERSION : null}, ${submissionKey})
        on conflict (submission_key) do nothing
        returning id, true as created
      ), existing_message as (
        select id, false as created
        from contact_messages
        where submission_key = ${submissionKey} and not exists (select 1 from saved_message)
      )
      select id, created from saved_message
      union all
      select id, created from existing_message
    ` as SavedMessage[];
    const saved = rows[0];
    if (!saved) throw new Error("Message was not returned after saving.");
    if (saved.created) {
      try {
        const delivery = await notifyContactMessage(message);
        if (!delivery.delivered) console.error("Contact-message notification was not delivered.", delivery.error);
      } catch (error) { console.error("Contact-message notification failed unexpectedly.", error); }
      try {
        const delivery = await notifyContactSenderConfirmation(message, `contact-message-confirmation/${saved.id}`);
        if (!delivery.delivered) console.error("Contact confirmation email was not delivered.", delivery.error);
      } catch (error) { console.error("Contact confirmation email failed unexpectedly.", error); }
      if (message.phone) {
        const smsClaim = await sql`
          update contact_messages
          set sms_confirmation_attempted_at = now()
          where id = ${saved.id} and sms_confirmation_attempted_at is null
          returning id
        ` as { id: string }[];
        if (smsClaim.length) {
          try { await sendContactSmsConfirmation(message.name, message.phone); }
          catch (error) { console.error("Contact SMS confirmation failed unexpectedly.", error); }
        }
      }
    }
    return NextResponse.json({ messageId: saved.id, created: saved.created }, { status: saved.created ? 201 : 200 });
  } catch { return NextResponse.json({ error: "Unable to save message." }, { status: 500 }); }
}
