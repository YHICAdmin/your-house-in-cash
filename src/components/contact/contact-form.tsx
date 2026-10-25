"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { TextField, Textarea } from "@/components/form/field";
import { PhoneField } from "@/components/form/phone-field";
import { AddressField } from "@/components/form/address-field";
import { CONTACT_MESSAGE_MAX_LENGTH } from "@/lib/form-limits";
import { validUSPhone } from "@/lib/phone";
import { focusInvalidField } from "@/lib/focus-invalid-field";
import { trackAnalyticsEvent } from "@/lib/analytics";
import styles from "./contact-form.module.css";

const keys = ["name", "email", "phone", "address", "message"] as const;
type Key = typeof keys[number];
type FieldValues = Record<Key, string>;
type Values = FieldValues & { emailMarketingOptIn: boolean };
const empty: Values = { name: "", email: "", phone: "", address: "", message: "", emailMarketingOptIn: false };
const ids: Record<Key, string> = { name: "contact-name", email: "contact-email", phone: "contact-phone", address: "contact-address", message: "contact-message" };

function valid(key: Key, value: string) {
  const trimmed = value.trim();
  if (!trimmed) return ({ name: "Please enter your name.", email: "Please enter your email address.", phone: "", address: "", message: "Please enter a message." } as Record<Key, string>)[key];
  if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address.";
  if (key === "phone" && !validUSPhone(trimmed)) return "Please enter a valid US phone number.";
  if (key === "message" && trimmed.length > CONTACT_MESSAGE_MAX_LENGTH) return `Please keep your message to ${CONTACT_MESSAGE_MAX_LENGTH.toLocaleString()} characters or fewer.`;
  return "";
}

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<FieldValues>>({});
  const [failure, setFailure] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const confirmationRef = useRef<HTMLParagraphElement>(null);
  const submissionKey = useRef<string | null>(null);

  useEffect(() => {
    if (success) {
      window.scrollTo(0, 0);
      confirmationRef.current?.focus({ preventScroll: true });
    }
  }, [success]);

  const change = (key: Key, value: string) => {
    setValues(current => ({ ...current, [key]: value }));
    if (errors[key]) setErrors(current => ({ ...current, [key]: valid(key, value) }));
    setFailure("");
  };

  const handleSuccess = () => {
    if (onSuccess) onSuccess();
    else setSuccess(true);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = Object.fromEntries(keys.map(key => [key, valid(key, values[key])])) as FieldValues;
    setErrors(nextErrors);
    const firstInvalid = keys.find(key => nextErrors[key]);
    if (firstInvalid) {
      focusInvalidField(ids[firstInvalid]);
      return;
    }

    setPending(true);
    try {
      const key = getSubmissionKey();
      const response = await fetch("/api/contact-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": key },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw Error();
      const result = await response.json() as { created: boolean };
      if (result.created) trackAnalyticsEvent("contact_message_sent");
      window.sessionStorage.removeItem("contact-message-submission-key");
      handleSuccess();
    } catch {
      setFailure("Your message couldn’t be sent. Please try again.");
    } finally {
      setPending(false);
    }
  };

  function getSubmissionKey() {
    if (submissionKey.current) return submissionKey.current;
    const stored = window.sessionStorage.getItem("contact-message-submission-key");
    const key = stored ?? crypto.randomUUID();
    window.sessionStorage.setItem("contact-message-submission-key", key);
    submissionKey.current = key;
    return key;
  }

  if (success) return <p ref={confirmationRef} tabIndex={-1} role="status" className="text-body">Thanks for reaching out. I’ve received your message and will be in touch.</p>;

  return <form noValidate onSubmit={submit}>
    <h2 className={`${styles.heading} text-heading-3`}>Send me a message</h2>
    <div className={styles.fields}>
      <TextField id={ids.name} name="name" label="Your Name" required disabled={pending} value={values.name} onChange={event => change("name", event.target.value)} onBlur={() => setErrors(current => ({ ...current, name: valid("name", values.name) }))} error={errors.name} />
      <TextField id={ids.email} name="email" label="Email" type="email" required disabled={pending} value={values.email} onChange={event => change("email", event.target.value)} onBlur={() => setErrors(current => ({ ...current, email: valid("email", values.email) }))} error={errors.email} />
      <PhoneField id={ids.phone} name="phone" label="Phone number (optional)" disabled={pending} value={values.phone} onValueChange={value => change("phone", value)} onBlur={() => setErrors(current => ({ ...current, phone: valid("phone", values.phone) }))} error={errors.phone} />
      <AddressField id={ids.address} label="Property address (optional)" disabled={pending} value={values.address} onValueChange={value => change("address", value)} onBlur={() => setErrors(current => ({ ...current, address: valid("address", values.address) }))} error={errors.address} />
      <Textarea id={ids.message} name="message" label="Message" guidance={`${(CONTACT_MESSAGE_MAX_LENGTH - values.message.length).toLocaleString()} characters remaining.`} required disabled={pending} rows={5} maxLength={CONTACT_MESSAGE_MAX_LENGTH} value={values.message} onChange={event => change("message", event.target.value)} onBlur={() => setErrors(current => ({ ...current, message: valid("message", values.message) }))} error={errors.message} />
      <label className={`text-body-small focus-container ${styles.marketingConsent}`}>
        <input name="emailMarketingOptIn" type="checkbox" checked={values.emailMarketingOptIn} disabled={pending}
          onChange={event => setValues(current => ({ ...current, emailMarketingOptIn: event.target.checked }))} />
        <span>Yes, email me occasional updates and offers from Your House in Cash. I can unsubscribe at any time. See the <TextLink href="/privacy-policy">Privacy Policy</TextLink>.</span>
      </label>
    </div>
    <div className={styles.actions}>
      {failure && <p className={`${styles.failure} text-body-small`} role="alert">{failure}</p>}
      <Button type="submit" className={styles.submit} disabled={pending}>{pending ? "Sending…" : "Send Message"}</Button>
      <p className={`${styles.privacy} text-body-small`}>Your information will be handled according to our <TextLink className={styles.privacyLink} href="/privacy-policy">Privacy Policy</TextLink>.</p>
    </div>
  </form>;
}
