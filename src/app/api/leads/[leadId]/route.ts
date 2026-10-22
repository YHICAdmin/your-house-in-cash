import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyLead } from "@/lib/notifications";
import { parseLeadBasics, parseLeadDetails } from "@/lib/submissions";

const EMAIL_MARKETING_CONSENT_VERSION = "email-marketing-v1";

export async function PATCH(request: Request, { params }: { params: Promise<{ leadId: string }> }) {
  const { leadId } = await params;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(leadId)) return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  const body = await request.json().catch(() => null);
  const basics = parseLeadBasics(body);
  const details = basics ? null : parseLeadDetails(body);
  if (!basics && !details) return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  try {
    const rows = basics
      ? await sql`update leads set property_address = ${basics.address}, seller_name = ${basics.name}, phone_digits = ${basics.phone}, email_address = ${basics.email}, email_marketing_opt_in = ${basics.emailMarketingOptIn}, email_marketing_consented_at = ${basics.emailMarketingOptIn ? sql`now()` : null}, email_marketing_consent_version = ${basics.emailMarketingOptIn ? EMAIL_MARKETING_CONSENT_VERSION : null} where id = ${leadId} returning id, property_address, seller_name, phone_digits, email_address, property_condition, occupancy, selling_reasons, selling_timeline, notes`
      : await sql`update leads set property_condition = ${details!.condition}, occupancy = ${details!.occupancy}, selling_reasons = ${details!.reasons}, selling_timeline = ${details!.timeline}, notes = ${details!.notes}, property_details_saved_at = now() where id = ${leadId} returning id, property_address, seller_name, phone_digits, email_address, property_condition, occupancy, selling_reasons, selling_timeline, notes`;
    const saved = rows[0] as { id: string; property_address: string; seller_name: string; phone_digits: string; email_address: string; property_condition: string | null; occupancy: string | null; selling_reasons: string[]; selling_timeline: string | null; notes: string | null } | undefined;
    if (saved) await notifyLead({ address: saved.property_address, name: saved.seller_name, phone: saved.phone_digits, email: saved.email_address, condition: saved.property_condition, occupancy: saved.occupancy, reasons: saved.selling_reasons, timeline: saved.selling_timeline, notes: saved.notes }, "updated");
    return saved ? NextResponse.json({ leadId }) : NextResponse.json({ error: "Lead not found." }, { status: 404 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
