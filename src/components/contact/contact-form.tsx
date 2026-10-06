"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { TextField, Textarea } from "@/components/form/field";
import { PhoneField } from "@/components/form/phone-field";
import { AddressField } from "@/components/form/address-field";
import { validUSPhone } from "@/lib/phone";
import styles from "./contact-form.module.css";

const fieldOrder = ["name", "email", "phone", "address", "message"] as const;
type FieldKey = typeof fieldOrder[number];
type Values = Record<FieldKey, string>;

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

const inputIds: Record<FieldKey, string> = {
  name: "contact-name",
  email: "contact-email",
  phone: "contact-phone",
  address: "contact-address",
  message: "contact-message",
};

function validate(key: FieldKey, value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      phone: "",
      address: "",
      message: "Please enter a message.",
    }[key];
  }
  if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address.";
  if (key === "phone" && !validUSPhone(trimmed)) return "Please enter a valid US phone number.";
  return "";
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [failure, setFailure] = useState("");
  const [success, setSuccess] = useState(false);
  const successRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (success) successRef.current?.focus();
  }, [success]);

  function change(key: FieldKey, value: string) {
    setValues(previous => ({ ...previous, [key]: value }));
    if (errors[key]) setErrors(previous => ({ ...previous, [key]: validate(key, value) }));
    if (failure) setFailure("");
  }

  function blur(key: FieldKey) {
    setErrors(previous => ({ ...previous, [key]: validate(key, values[key]) }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = Object.fromEntries(fieldOrder.map(key => [key, validate(key, values[key])])) as Values;
    setErrors(next);
    const firstInvalid = fieldOrder.find(key => next[key]);
    if (firstInvalid) {
      document.getElementById(inputIds[firstInvalid])?.focus();
      return;
    }
    if (process.env.NODE_ENV === "development") {
      setSuccess(true);
    } else {
      setFailure("Your message couldn’t be sent. Please try again.");
    }
  }

  return success ? (
    <p ref={successRef} tabIndex={-1} role="status" className="text-body">
      Thanks for reaching out. I’ve received your message and will be in touch.
    </p>
  ) : (
    <form noValidate onSubmit={submit}>
      <h2 className={`${styles.heading} text-heading-3`}>Send me a message</h2>
      <div className={styles.fields}>
        <TextField id={inputIds.name} name="name" label="Your Name" required autoComplete="name"
          value={values.name} onChange={event => change("name", event.target.value)}
          onBlur={() => blur("name")} error={errors.name} />
        <TextField id={inputIds.email} name="email" label="Email" type="email" required autoComplete="email"
          value={values.email} onChange={event => change("email", event.target.value)}
          onBlur={() => blur("email")} error={errors.email} />
        <PhoneField id={inputIds.phone} name="phone" label="Phone number (optional)"
          value={values.phone} onValueChange={value => change("phone", value)}
          onBlur={() => blur("phone")} error={errors.phone} />
        <AddressField id={inputIds.address} label="Property address (optional)"
          value={values.address} onValueChange={value => change("address", value)}
          onBlur={() => blur("address")} error={errors.address} />
        <Textarea id={inputIds.message} name="message" label="Message" required rows={5}
          value={values.message} onChange={event => change("message", event.target.value)}
          onBlur={() => blur("message")} error={errors.message} />
      </div>
      <div className={styles.actions}>
        {failure && <p className={`${styles.failure} text-body-small`} role="alert">{failure}</p>}
        <Button type="submit" className={styles.submit}>Send Message</Button>
        <p className={`${styles.privacy} text-body-small`}>
          Your information will be handled according to our <TextLink className={styles.privacyLink} href="/privacy-policy">Privacy Policy</TextLink>.
        </p>
      </div>
    </form>
  );
}
