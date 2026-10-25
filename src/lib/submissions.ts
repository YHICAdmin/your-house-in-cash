import "server-only";
import { normalizePhone, validUSPhone } from "@/lib/phone";
import { CONTACT_MESSAGE_MAX_LENGTH } from "@/lib/form-limits";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LeadBasics = { address: string; name: string; phone: string; email: string; notes: string | null; emailMarketingOptIn: boolean };
export type ContactMessage = { name: string; email: string; phone: string | null; address: string | null; message: string; emailMarketingOptIn: boolean };
export type BuyerRegistration = {
  name: string; email: string; phone: string | null; purchasingMethod: string | null;
  investmentStrategies: string[]; purchaseBudget: string | null; preferredAreas: string | null;
  emailMarketingConsent: boolean; smsMarketingConsent: boolean;
};

function record(value: unknown): Record<string, unknown> | null { return typeof value === "object" && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : null; }
function string(value: unknown): string | null { return typeof value === "string" ? value.trim() : null; }
function optionalString(value: unknown): string | null | undefined { if (value === undefined) return undefined; const result = string(value); return result || null; }
function email(value: unknown): string | null { const result = string(value); return result && emailPattern.test(result) ? result.toLowerCase() : null; }
function phone(value: unknown, required: boolean): string | null | undefined { const result = string(value); if (!result) return required ? undefined : null; return validUSPhone(result) ? normalizePhone(result) : undefined; }
function optionalBoolean(value: unknown): boolean | undefined { return value === undefined ? false : typeof value === "boolean" ? value : undefined; }
function choices(value: unknown, allowed: readonly string[]): string[] | null {
  if (!Array.isArray(value) || !value.every(item => typeof item === "string" && allowed.includes(item))) return null;
  return [...new Set(value)];
}

export function parseLeadBasics(value: unknown): LeadBasics | null {
  const body = record(value); if (!body) return null;
  const address = string(body.address), name = string(body.name), phoneNumber = phone(body.phone, true), emailAddress = email(body.email), notes = optionalString(body.notes), emailMarketingOptIn = optionalBoolean(body.emailMarketingOptIn);
  return address && name && phoneNumber && emailAddress && notes !== undefined && (notes?.length ?? 0) <= 2000 && emailMarketingOptIn !== undefined ? { address, name, phone: phoneNumber, email: emailAddress, notes, emailMarketingOptIn } : null;
}

export function parseContactMessage(value: unknown): ContactMessage | null {
  const body = record(value); if (!body) return null;
  const name = string(body.name), emailAddress = email(body.email), phoneNumber = phone(body.phone, false), address = optionalString(body.address), message = string(body.message), emailMarketingOptIn = optionalBoolean(body.emailMarketingOptIn);
  return name && emailAddress && phoneNumber !== undefined && address !== undefined && message && message.length <= CONTACT_MESSAGE_MAX_LENGTH && emailMarketingOptIn !== undefined ? { name, email: emailAddress, phone: phoneNumber, address, message, emailMarketingOptIn } : null;
}

export function parseBuyerRegistration(value: unknown): BuyerRegistration | null {
  const body = record(value); if (!body) return null;
  const name = string(body.name), emailAddress = email(body.email), emailMarketingConsent = optionalBoolean(body.emailMarketingConsent), smsMarketingConsent = optionalBoolean(body.smsMarketingConsent);
  const phoneNumber = phone(body.phone, smsMarketingConsent === true);
  const purchasingMethod = optionalString(body.purchasingMethod);
  const purchaseBudget = optionalString(body.purchaseBudget);
  const preferredAreas = optionalString(body.preferredAreas);
  const investmentStrategies = choices(body.investmentStrategies, ["Rental", "Fix & flip", "BRRRR", "Multifamily"]);
  const validMethod = purchasingMethod === null || (purchasingMethod !== undefined && ["Cash", "Hard money / Private lending", "Conventional financing", "Other"].includes(purchasingMethod));
  const validBudget = purchaseBudget === null || (purchaseBudget !== undefined && ["Under $50K", "$50K–$100K", "$100K–$200K", "$200K+"].includes(purchaseBudget));
  return name && emailAddress && phoneNumber !== undefined && purchasingMethod !== undefined && purchaseBudget !== undefined && preferredAreas !== undefined && investmentStrategies && validMethod && validBudget && emailMarketingConsent !== undefined && smsMarketingConsent !== undefined
    ? { name, email: emailAddress, phone: phoneNumber, purchasingMethod, investmentStrategies, purchaseBudget, preferredAreas, emailMarketingConsent, smsMarketingConsent }
    : null;
}
