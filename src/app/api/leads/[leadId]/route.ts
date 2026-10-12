import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { parseLeadBasics, parseLeadDetails } from "@/lib/submissions";

export async function PATCH(request: Request, { params }: { params: Promise<{ leadId: string }> }) {
  const { leadId } = await params;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(leadId)) return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  const body = await request.json().catch(() => null);
  const basics = parseLeadBasics(body);
  const details = basics ? null : parseLeadDetails(body);
  if (!basics && !details) return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  try {
    const rows = basics
      ? await sql`update leads set property_address = ${basics.address}, seller_name = ${basics.name}, phone_digits = ${basics.phone}, email_address = ${basics.email} where id = ${leadId} returning id` as { id: string }[]
      : await sql`update leads set property_condition = ${details!.condition}, occupancy = ${details!.occupancy}, selling_reasons = ${details!.reasons}, selling_timeline = ${details!.timeline}, notes = ${details!.notes}, property_details_saved_at = now() where id = ${leadId} returning id` as { id: string }[];
    return rows.length ? NextResponse.json({ leadId }) : NextResponse.json({ error: "Lead not found." }, { status: 404 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
