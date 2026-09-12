import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("1") ? digits.slice(1) : digits;
}

export function formatPhone(value: string) {
  if (/[^\d\s()+-]/.test(value)) return value;
  const digits = normalizePhone(value);
  return [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)].filter(Boolean).join("-");
}

export function validUSPhone(value: string) {
  if (/[^\d\s()+-]/.test(value)) return false;
  const digits = normalizePhone(value);
  if (digits.length !== 10) return false;
  const phone = parsePhoneNumberFromString(digits, "US");
  return phone?.country === "US" && phone.isValid();
}

