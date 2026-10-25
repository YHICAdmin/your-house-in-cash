"use client";

import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { Textarea, TextField } from "@/components/form/field";
import { PhoneField } from "@/components/form/phone-field";
import { AddressField } from "@/components/form/address-field";
import { validUSPhone } from "@/lib/phone";
import { focusInvalidField } from "@/lib/focus-invalid-field";
import styles from "./seller-form.module.css";

const order = ["address", "name", "phone", "email"] as const;
type Key = typeof order[number];
export type SellerValues = Record<Key, string> & { notes: string; emailMarketingOptIn: boolean };
type Values = SellerValues;
function validate(key: Key, value: string) {
  const trimmed = value.trim();
  if (!trimmed) return { address: "Please enter the property address.", name: "Please enter your name.", phone: "Please enter your phone number.", email: "Please enter your email address." }[key];
  if (key === "phone" && !validUSPhone(trimmed)) return "Please enter a valid US phone number.";
  if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address.";
  return "";
}

export function SellerDetails({ initialValues, onSave }: {
  initialValues?: SellerValues;
  onSave?: (values: SellerValues) => Promise<void>;
} = {}) {
  const [values, setValues] = useState<Values>(initialValues ?? { address: "", name: "", phone: "", email: "", notes: "", emailMarketingOptIn: false });
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [failure, setFailure] = useState("");
  const [pending, setPending] = useState(false);
  function change(key: Key, value: string) {
    setValues(previous => ({ ...previous, [key]: value }));
    if (errors[key]) setErrors(previous => ({ ...previous, [key]: validate(key, value) }));
  }
  function blur(key: Key) {
    setErrors(previous => ({ ...previous, [key]: validate(key, values[key]) }));
  }
  return <form noValidate onSubmit={async event => {
    event.preventDefault();
    const next = Object.fromEntries(order.map(key => [key, validate(key, values[key])]));
    setErrors(next);
    const invalid = order.find(key => next[key]);
    if (invalid) { focusInvalidField(invalid); return; }
    if (onSave && !pending) {
      setFailure(""); setPending(true);
      try { await onSave(values); } catch { setFailure("Unable to save your details. Please try again."); } finally { setPending(false); }
      return;
    }
    setFailure("We couldn’t save your details. Please try again.");
  }}>
    <div className={styles.intro}>
      <h1 className="text-heading-2" tabIndex={-1}>Let&apos;s get you started</h1>
      <p className="text-body">Tell us a few basic details about the house you&apos;d like to sell. It only takes about a minute.</p>
    </div>
    <div className={styles.fields}>
      <AddressField id="address" label="Property Address" required disabled={pending} value={values.address}
        onValueChange={value => change("address", value)} onBlur={() => blur("address")}
        error={errors.address} guidance="Enter the street address, city, state, and ZIP code." />
      <TextField id="name" name="name" label="Your Name" required disabled={pending} autoComplete="name"
        value={values.name} onChange={event => change("name", event.target.value)} onBlur={() => blur("name")} error={errors.name} />
      <PhoneField id="phone" name="phone" label="Phone Number" required disabled={pending} placeholder="e.g. 216-555-1234"
        value={values.phone} onValueChange={value => change("phone", value)} onBlur={() => blur("phone")} error={errors.phone} />
      <TextField id="email" name="email" label="Email Address" type="email" required disabled={pending} autoComplete="email"
        value={values.email} onChange={event => change("email", event.target.value)} onBlur={() => blur("email")} error={errors.email} />
      <Textarea id="notes" name="notes" label="Anything else you&apos;d like us to know?"
        guidance="Up to 2,000 characters" guidanceBesideLabel maxLength={2000} disabled={pending}
        value={values.notes} onChange={event => setValues(previous => ({ ...previous, notes: event.target.value }))} />
      <label className={`text-body-small focus-container ${styles.marketingConsent}`}>
        <input name="emailMarketingOptIn" type="checkbox" checked={values.emailMarketingOptIn} disabled={pending}
          onChange={event => setValues(previous => ({ ...previous, emailMarketingOptIn: event.target.checked }))} />
        <span>Yes, email me occasional updates and offers from Your House in Cash. I can unsubscribe at any time. See the <TextLink href="/privacy-policy">Privacy Policy</TextLink>.</span>
      </label>
    </div>
    <div className={styles.actions}>
      {failure && <p className={`text-body-small ${styles.error}`}>{failure}</p>}
      <Button className={styles.continueButton} type="submit" disabled={pending}>{pending ? "Saving…" : "Get My Cash Offer"}</Button>
      <p className={`text-body-small ${styles.reassurance}`}><LockKeyhole size={16} aria-hidden="true" /><span>Your information stays private</span></p>
      <span role="status" className="visually-hidden">{failure}</span>
    </div>
  </form>;
}
