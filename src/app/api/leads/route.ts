import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyLead } from "@/lib/notifications";
import { parseLeadBasics } from "@/lib/submissions";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const lead = parseLeadBasics(body);
  if (!lead) return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  try {
    const rows = await sql`insert into leads (property_address, seller_name, phone_digits, email_address) values (${lead.address}, ${lead.name}, ${lead.phone}, ${lead.email}) returning id, property_address, seller_name, phone_digits, email_address, property_condition, occupancy, selling_reasons, selling_timeline, notes` as { id: string; property_address: string; seller_name: string; phone_digits: string; email_address: string; property_condition: string | null; occupancy: string | null; selling_reasons: string[]; selling_timeline: string | null; notes: string | null }[];
    const saved = rows[0];
    await notifyLead({ address: saved.property_address, name: saved.seller_name, phone: saved.phone_digits, email: saved.email_address, condition: saved.property_condition, occupancy: saved.occupancy, reasons: saved.selling_reasons, timeline: saved.selling_timeline, notes: saved.notes }, "new");
    return NextResponse.json({ leadId: saved.id }, { status: 201 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
