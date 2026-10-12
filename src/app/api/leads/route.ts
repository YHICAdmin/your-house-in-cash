import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { parseLeadBasics } from "@/lib/submissions";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const lead = parseLeadBasics(body);
  if (!lead) return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  try {
    const rows = await sql`insert into leads (property_address, seller_name, phone_digits, email_address) values (${lead.address}, ${lead.name}, ${lead.phone}, ${lead.email}) returning id` as { id: string }[];
    return NextResponse.json({ leadId: rows[0].id }, { status: 201 });
  } catch { return NextResponse.json({ error: "Unable to save lead." }, { status: 500 }); }
}
