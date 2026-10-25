import "server-only";
import { formatPhone } from "@/lib/phone";

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

export type BuyerNotification = {
  fullName: string;
  email: string;
  phone: string | null;
  purchasingMethod: string | null;
  investmentStrategies: string[];
  purchaseBudget: string | null;
  preferredAreas: string | null;
  emailMarketingConsent: boolean;
  smsMarketingConsent: boolean;
  registeredAt: string;
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
    ["Phone", escapeHtml(formatPhone(lead.phone))],
    ["Email", escapeHtml(lead.email)],
    ["Additional notes", valueOrNotProvided(lead.notes)],
  ])}</table>`, idempotencyKey);
}

export function notifySellerLeadConfirmation(lead: Pick<LeadNotification, "address" | "name" | "email">, idempotencyKey?: string): Promise<DeliveryResult> {
  const firstName = lead.name.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const title = "We received your cash-offer request";
  return deliver(lead.email, title, `<div style="margin:0;padding:32px 16px;background:#f7f8f7;font-family:Arial,sans-serif;color:#101114"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#ffffff"><tr><td style="padding:40px;font-size:16px;line-height:1.6"><h1 style="margin:0 0 24px;font-size:28px;line-height:1.25">${title}</h1><p style="margin:0 0 18px">${greeting}</p><p style="margin:0 0 18px">Thanks for reaching out about <strong>${escapeHtml(lead.address)}</strong>. I received your request and will take a look shortly.</p><p style="margin:0 0 18px">I&apos;ll be in touch soon to learn more about your situation and talk through your options—no pressure and no obligation.</p><p style="margin:0 0 24px">If you have any questions in the meantime, just reply to this email—I&apos;m happy to help.</p><p style="margin:0">Talk soon,<br><strong>Noah</strong><br>Your House in Cash</p></td></tr></table></td></tr></table></div>`, idempotencyKey);
}

export function notifyContactSenderConfirmation(message: Pick<ContactNotification, "name" | "email">, idempotencyKey?: string): Promise<DeliveryResult> {
  const firstName = message.name.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const title = "Thanks for reaching out";
  return deliver(message.email, title, `<div style="margin:0;padding:32px 16px;background:#f7f8f7;font-family:Arial,sans-serif;color:#101114"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#ffffff"><tr><td style="padding:40px;font-size:16px;line-height:1.6"><h1 style="margin:0 0 24px;font-size:28px;line-height:1.25">${title}</h1><p style="margin:0 0 18px">${greeting}</p><p style="margin:0 0 18px">Thanks for your message. I received it and will be in touch soon.</p><p style="margin:0 0 24px">If you have any questions in the meantime, just reply to this email—I&apos;m happy to help.</p><p style="margin:0">Talk soon,<br><strong>Noah</strong><br>Your House in Cash</p></td></tr></table></td></tr></table></div>`, idempotencyKey);
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

export function notifyBuyerRegistration(buyer: BuyerNotification, idempotencyKey?: string): Promise<DeliveryResult> {
  return deliver(teamRecipient, `New Buyer Registration – ${buyer.fullName}`, `<h1>New Buyer Registration</h1><table>${rows([
    ["Full name", escapeHtml(buyer.fullName)],
    ["Email address", escapeHtml(buyer.email)],
    ["Phone number", valueOrNotProvided(buyer.phone)],
    ["Purchasing method", valueOrNotProvided(buyer.purchasingMethod)],
    ["Investment strategy", buyer.investmentStrategies.length ? escapeHtml(buyer.investmentStrategies.join(", ")) : "Not provided"],
    ["Purchase budget", valueOrNotProvided(buyer.purchaseBudget)],
    ["Preferred areas / ZIP codes", valueOrNotProvided(buyer.preferredAreas)],
    ["Email marketing consent", buyer.emailMarketingConsent ? "Yes" : "No"],
    ["SMS marketing consent", buyer.smsMarketingConsent ? "Yes" : "No"],
    ["Registration timestamp", escapeHtml(buyer.registeredAt)],
  ])}</table>`, idempotencyKey);
}

export function notifyBuyerConfirmation(buyer: Pick<BuyerNotification, "fullName" | "email">, idempotencyKey?: string): Promise<DeliveryResult> {
  const firstName = buyer.fullName.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const title = "Welcome to the Your House in Cash Buyers List";
  return deliver(buyer.email, title, `<div style="margin:0;padding:32px 16px;background:#f7f8f7;font-family:Arial,sans-serif;color:#101114"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#ffffff"><tr><td style="padding:40px;font-size:16px;line-height:1.6"><h1 style="margin:0 0 24px;font-size:28px;line-height:1.25">${title}</h1><p style="margin:0 0 18px">${greeting}</p><p style="margin:0 0 18px">Thanks for joining the Your House in Cash buyers list!</p><p style="margin:0 0 18px">We&apos;ll keep your investment preferences in mind and reach out when we have opportunities in Greater Cleveland that match what you&apos;re looking for.</p><p style="margin:0 0 18px">There&apos;s no cost to join and no obligation to purchase.</p><p style="margin:0 0 24px">We look forward to working with you!</p><p style="margin:0 0 24px"><a href="https://www.yourhouseincash.com" style="color:#2c6b3d">yourhouseincash.com</a></p><p style="margin:0">Your House in Cash Team</p></td></tr></table></td></tr></table></div>`, idempotencyKey);
}
