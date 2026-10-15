import "server-only";

type LeadNotification = {
  address: string;
  name: string;
  phone: string;
  email: string;
  condition: string | null;
  occupancy: string | null;
  reasons: string[];
  timeline: string | null;
  notes: string | null;
};

type ContactNotification = {
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  message: string;
};

const recipient = process.env.LEAD_NOTIFICATION_EMAIL;

function escapeHtml(value: string): string {
  return value.replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]!);
}

function valueOrNotProvided(value: string | null): string {
  return value ? escapeHtml(value) : "Not provided";
}

function rows(values: Array<[string, string]>): string {
  return values.map(([label, value]) => `<tr><th align="left" valign="top" style="padding: 4px 12px 4px 0">${label}</th><td style="padding: 4px 0">${value}</td></tr>`).join("");
}

async function deliver(subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from || !recipient) {
    console.error("Lead notification was not sent because RESEND_API_KEY, RESEND_FROM_EMAIL, or LEAD_NOTIFICATION_EMAIL is not configured.");
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [recipient], subject, html }),
    });
    if (!response.ok) console.error("Lead notification email was rejected by Resend.", response.status);
  } catch (error) {
    console.error("Lead notification email could not be sent.", error);
  }
}

export function notifyLead(lead: LeadNotification, event: "new" | "updated"): Promise<void> {
  const title = event === "new" ? "New cash-offer lead" : "Cash-offer lead updated";
  return deliver(`${title}: ${lead.name}`, `<h1>${title}</h1><table>${rows([
    ["Property address", escapeHtml(lead.address)],
    ["Seller name", escapeHtml(lead.name)],
    ["Phone", escapeHtml(lead.phone)],
    ["Email", escapeHtml(lead.email)],
    ["Property condition", valueOrNotProvided(lead.condition)],
    ["Occupancy", valueOrNotProvided(lead.occupancy)],
    ["Reasons for selling", lead.reasons.length ? lead.reasons.map(escapeHtml).join(", ") : "Not provided"],
    ["Selling timeline", valueOrNotProvided(lead.timeline)],
    ["Additional notes", valueOrNotProvided(lead.notes)],
  ])}</table>`);
}

export function notifyContactMessage(message: ContactNotification): Promise<void> {
  return deliver(`New contact message: ${message.name}`, `<h1>New contact message</h1><table>${rows([
    ["Name", escapeHtml(message.name)],
    ["Email", escapeHtml(message.email)],
    ["Phone", valueOrNotProvided(message.phone)],
    ["Property address", valueOrNotProvided(message.address)],
    ["Message", escapeHtml(message.message).replace(/\n/g, "<br>")],
  ])}</table>`);
}
