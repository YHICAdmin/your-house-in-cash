import "server-only";
import { normalizePhone, validUSPhone } from "@/lib/phone";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const conditions = ["Move-in ready", "Needs minor repairs", "Needs major repairs", "Not sure"] as const;
const occupancies = ["Owner-occupied", "Tenant-occupied", "Vacant", "Other / Not sure"] as const;
const reasons = ["Inherited property", "Moving / Relocating", "Financial difficulties", "Too many repairs", "Tired of being a landlord", "Downsizing", "Other"] as const;
const timelines = ["As soon as possible", "Within 1–3 months", "Within 3–6 months", "More than 6 months", "Just exploring"] as const;

export type LeadBasics = { address: string; name: string; phone: string; email: string };
export type LeadDetails = { condition: string | null; occupancy: string | null; reasons: string[]; timeline: string | null; notes: string | null };
export type ContactMessage = { name: string; email: string; phone: string | null; address: string | null; message: string };

function record(value: unknown): Record<string, unknown> | null { return typeof value === "object" && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : null; }
function string(value: unknown): string | null { return typeof value === "string" ? value.trim() : null; }
function optionalString(value: unknown): string | null | undefined { if (value === undefined) return undefined; const result = string(value); return result || null; }
function choice(value: unknown, allowed: readonly string[]): string | null | undefined { const result = optionalString(value); return result === undefined || result === null || allowed.includes(result) ? result : undefined; }
function email(value: unknown): string | null { const result = string(value); return result && emailPattern.test(result) ? result.toLowerCase() : null; }
function phone(value: unknown, required: boolean): string | null | undefined { const result = string(value); if (!result) return required ? undefined : null; return validUSPhone(result) ? normalizePhone(result) : undefined; }

export function parseLeadBasics(value: unknown): LeadBasics | null {
  const body = record(value); if (!body) return null;
  const address = string(body.address), name = string(body.name), phoneNumber = phone(body.phone, true), emailAddress = email(body.email);
  return address && name && phoneNumber && emailAddress ? { address, name, phone: phoneNumber, email: emailAddress } : null;
}

export function parseLeadDetails(value: unknown): LeadDetails | null {
  const body = record(value); if (!body) return null;
  const condition = choice(body.condition, conditions), occupancy = choice(body.occupancy, occupancies), timeline = choice(body.timeline, timelines), notes = optionalString(body.notes);
  if (condition === undefined || occupancy === undefined || timeline === undefined || notes === undefined || (notes?.length ?? 0) > 2000 || !Array.isArray(body.reasons) || !body.reasons.every(reason => typeof reason === "string" && (reasons as readonly string[]).includes(reason))) return null;
  const selectedReasons = [...new Set(body.reasons)];
  return { condition, occupancy, reasons: selectedReasons, timeline, notes };
}

export function parseContactMessage(value: unknown): ContactMessage | null {
  const body = record(value); if (!body) return null;
  const name = string(body.name), emailAddress = email(body.email), phoneNumber = phone(body.phone, false), address = optionalString(body.address), message = string(body.message);
  return name && emailAddress && phoneNumber !== undefined && address !== undefined && message ? { name, email: emailAddress, phone: phoneNumber, address, message } : null;
}
