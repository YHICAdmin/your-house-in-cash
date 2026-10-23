import "server-only";

async function sendSms(phone: string, content: string): Promise<void> {
  const apiKey = process.env.QUO_API_KEY;
  const from = process.env.QUO_FROM_PHONE_NUMBER;
  if (!apiKey || !from) {
    console.error("SMS was not sent because QUO_API_KEY or QUO_FROM_PHONE_NUMBER is not configured.");
    return;
  }
  const response = await fetch("https://api.quo.com/v1/messages", {
    method: "POST",
    headers: { Authorization: apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ content, from, to: [`+1${phone}`] }),
  });
  if (!response.ok) throw new Error(`Quo rejected the SMS (${response.status}).`);
}

function greeting(name: string): string {
  const firstName = name.trim().split(/\s+/)[0];
  return `Hi${firstName ? ` ${firstName}` : ""},`;
}

export function sendSellerSmsConfirmation(name: string, phone: string): Promise<void> {
  return sendSms(phone, `${greeting(name)} thanks for reaching out to Your House in Cash. I received your cash-offer request and will be in touch soon. Reply STOP to opt out.`);
}

export function sendContactSmsConfirmation(name: string, phone: string): Promise<void> {
  return sendSms(phone, `${greeting(name)} thanks for your message to Your House in Cash. I received it and will be in touch soon. Reply STOP to opt out.`);
}
