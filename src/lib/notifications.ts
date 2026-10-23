import "server-only";

type LeadNotification = {
  address: string;
  name: string;
  phone: string;
  email: string;
  notes: string | null;
};

type ContactNotification = {
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  message: string;
};

const teamRecipient = process.env.LEAD_NOTIFICATION_EMAIL;

function escapeHtml(value: string): string {
  return value.replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]!);
}

function valueOrNotProvided(value: string | null): string {
  return value ? escapeHtml(value) : "Not provided";
}

function rows(values: Array<[string, string]>): string {
  return values.map(([label, value]) => `<tr><th align="left" valign="top" style="padding: 4px 12px 4px 0">${label}</th><td style="padding: 4px 0">${value}</td></tr>`).join("");
}

export type DeliveryResult = { delivered: boolean; providerId?: string; error?: string };

async function deliver(to: string | undefined, subject: string, html: string, idempotencyKey?: string): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Email was not sent because RESEND_API_KEY, RESEND_FROM_EMAIL, or its recipient is not configured.");
    return { delivered: false, error: "Email notification configuration is incomplete." };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}) },
      body: JSON.stringify({ from, to: [to], subject, html }),
    });
    if (!response.ok) {
      console.error("Lead notification email was rejected by Resend.", response.status);
      return { delivered: false, error: `Resend rejected the email (${response.status}).` };
    }
    const body = await response.json().catch(() => null) as { id?: string } | null;
    return { delivered: true, providerId: body?.id };
  } catch (error) {
    console.error("Lead notification email could not be sent.", error);
    return { delivered: false, error: error instanceof Error ? error.message : "Email notification request failed." };
  }
}

export function notifyLead(lead: LeadNotification, idempotencyKey?: string): Promise<DeliveryResult> {
  const title = "New cash-offer lead";
  return deliver(teamRecipient, `${title}: ${lead.name}`, `<h1>${title}</h1><table>${rows([
    ["Property address", escapeHtml(lead.address)],
    ["Seller name", escapeHtml(lead.name)],
    ["Phone", escapeHtml(lead.phone)],
    ["Email", escapeHtml(lead.email)],
    ["Additional notes", valueOrNotProvided(lead.notes)],
  ])}</table>`, idempotencyKey);
}

export function notifySellerLeadConfirmation(lead: Pick<LeadNotification, "address" | "name" | "email">, idempotencyKey?: string): Promise<DeliveryResult> {
  const firstName = lead.name.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const title = "We received your cash-offer request";
  return deliver(lead.email, title, `<h1>${title}</h1><p>${greeting}</p><p>We received your request for <strong>${escapeHtml(lead.address)}</strong>. Our team will review it and get in touch to discuss your property.</p>`, idempotencyKey);
}

export function notifyContactMessage(message: ContactNotification): Promise<DeliveryResult> {
  return deliver(teamRecipient, `New contact message: ${message.name}`, `<h1>New contact message</h1><table>${rows([
    ["Name", escapeHtml(message.name)],
    ["Email", escapeHtml(message.email)],
    ["Phone", valueOrNotProvided(message.phone)],
    ["Property address", valueOrNotProvided(message.address)],
    ["Message", escapeHtml(message.message).replace(/\n/g, "<br>")],
  ])}</table>`);
}
