import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { notifyContactMessage } from "@/lib/notifications";
import { parseContactMessage } from "@/lib/submissions";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = parseContactMessage(body);
  if (!message) return NextResponse.json({ error: "Invalid message details." }, { status: 400 });
  try {
    const rows = await sql`insert into contact_messages (sender_name, email_address, phone_digits, property_address, message) values (${message.name}, ${message.email}, ${message.phone}, ${message.address}, ${message.message}) returning id` as { id: string }[];
    await notifyContactMessage(message);
    return NextResponse.json({ messageId: rows[0].id }, { status: 201 });
  } catch { return NextResponse.json({ error: "Unable to save message." }, { status: 500 }); }
}
