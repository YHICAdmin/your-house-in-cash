"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { TextField } from "@/components/form/field";
import { PhoneField } from "@/components/form/phone-field";
import { validUSPhone } from "@/lib/phone";
import { focusInvalidField } from "@/lib/focus-invalid-field";
import styles from "./buyers-registration-form.module.css";

const purchasingMethods = ["Cash", "Hard money / Private lending", "Conventional financing", "Other"] as const;
const investmentStrategies = ["Rental", "Fix & flip", "BRRRR", "Multifamily"] as const;
const purchaseBudgets = ["Under $50K", "$50K–$100K", "$100K–$200K", "$200K+"] as const;

type Values = {
  name: string;
  email: string;
  phone: string;
  purchasingMethod: string;
  strategies: string[];
  budget: string;
  areas: string;
  emailMarketingConsent: boolean;
  smsMarketingConsent: boolean;
};

type ValidatedField = "name" | "email" | "phone";

const fieldIds: Record<ValidatedField, string> = {
  name: "buyer-name",
  email: "buyer-email",
  phone: "buyer-phone",
};

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  purchasingMethod: "",
  strategies: [],
  budget: "",
  areas: "",
  emailMarketingConsent: false,
  smsMarketingConsent: false,
};

function validateName(value: string) {
  return value.trim() ? "" : "Please enter your full name.";
}

function validateEmail(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your email address.";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    ? ""
    : "Please enter a valid email address.";
}

function validatePhone(value: string, smsConsent: boolean) {
  const trimmed = value.trim();
  if (!trimmed) {
    return smsConsent ? "Please enter your phone number to receive SMS marketing." : "";
  }

  return validUSPhone(trimmed) ? "" : "Please enter a valid US phone number.";
}

export function BuyersRegistrationForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ValidatedField, string>>>({});

  function validate(field: ValidatedField, nextValues = values) {
    if (field === "name") return validateName(nextValues.name);
    if (field === "email") return validateEmail(nextValues.email);
    return validatePhone(nextValues.phone, nextValues.smsMarketingConsent);
  }

  function updateText(field: "name" | "email", value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (errors[field]) setErrors((current) => ({ ...current, [field]: validate(field, nextValues) }));
  }

  function updatePhone(phone: string) {
    const nextValues = { ...values, phone };
    setValues(nextValues);
    if (errors.phone) setErrors((current) => ({ ...current, phone: validate("phone", nextValues) }));
  }

  function toggleStrategy(strategy: string) {
    setValues((current) => ({
      ...current,
      strategies: current.strategies.includes(strategy)
        ? current.strategies.filter((currentStrategy) => currentStrategy !== strategy)
        : [...current.strategies, strategy],
    }));
  }

  function updateSmsConsent(smsMarketingConsent: boolean) {
    const nextValues = { ...values, smsMarketingConsent };
    setValues(nextValues);
    if (errors.phone) {
      setErrors((current) => ({ ...current, phone: validate("phone", nextValues) }));
    }
  }

  function blur(field: ValidatedField) {
    setErrors((current) => ({ ...current, [field]: validate(field) }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = {
      name: validate("name"),
      email: validate("email"),
      phone: validate("phone"),
    };
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as ValidatedField[]).find(
      (field) => nextErrors[field],
    );
    if (firstInvalid) focusInvalidField(fieldIds[firstInvalid]);
  }

  return (
    <form className={styles.form} noValidate onSubmit={submit}>
      <div className={styles.fields}>
        <TextField
          id="buyer-name"
          label="Full name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(event) => updateText("name", event.target.value)}
          onBlur={() => blur("name")}
        />
        <TextField
          id="buyer-email"
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(event) => updateText("email", event.target.value)}
          onBlur={() => blur("email")}
        />
        <PhoneField
          id="buyer-phone"
          label="Phone number"
          name="phone"
          required={values.smsMarketingConsent}
          value={values.phone}
          error={errors.phone}
          onValueChange={updatePhone}
          onBlur={() => blur("phone")}
        />

        <fieldset className={styles.choiceGroup}>
          <legend className="text-label">Purchasing method</legend>
          <div className={styles.choices}>
            {purchasingMethods.map((method) => (
              <label key={method} className={`${styles.choice} focus-container`}>
                <input
                  type="radio"
                  name="purchasingMethod"
                  value={method}
                  checked={values.purchasingMethod === method}
                  onChange={() => setValues((current) => ({ ...current, purchasingMethod: method }))}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.choiceGroup}>
          <legend className="text-label">Investment strategy</legend>
          <div className={styles.choices}>
            {investmentStrategies.map((strategy) => (
              <label key={strategy} className={`${styles.choice} focus-container`}>
                <input
                  type="checkbox"
                  name="investmentStrategy"
                  value={strategy}
                  checked={values.strategies.includes(strategy)}
                  onChange={() => toggleStrategy(strategy)}
                />
                <span>{strategy}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.choiceGroup}>
          <legend className="text-label">Purchase budget</legend>
          <div className={styles.choices}>
            {purchaseBudgets.map((budget) => (
              <label key={budget} className={`${styles.choice} focus-container`}>
                <input
                  type="radio"
                  name="purchaseBudget"
                  value={budget}
                  checked={values.budget === budget}
                  onChange={() => setValues((current) => ({ ...current, budget }))}
                />
                <span>{budget}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <TextField
          id="buyer-areas"
          label="Preferred areas / ZIP codes"
          name="preferredAreas"
          value={values.areas}
          onChange={(event) => setValues((current) => ({ ...current, areas: event.target.value }))}
        />

        <div className={styles.consents}>
          <label className={`${styles.consent} text-body-small focus-container`}>
            <input
              type="checkbox"
              name="emailMarketingConsent"
              checked={values.emailMarketingConsent}
              onChange={(event) =>
                setValues((current) => ({ ...current, emailMarketingConsent: event.target.checked }))
              }
            />
            <span>
              I agree to receive marketing emails from Your House in Cash. I can unsubscribe at any time. See the{" "}
              <TextLink href="/privacy-policy">Privacy Policy</TextLink>.
            </span>
          </label>
          <label className={`${styles.consent} text-body-small focus-container`}>
            <input
              type="checkbox"
              name="smsMarketingConsent"
              checked={values.smsMarketingConsent}
              onChange={(event) => updateSmsConsent(event.target.checked)}
            />
            <span>
              I agree to receive marketing text messages from Your House in Cash. Message and data rates may apply. Consent is not a condition of purchase. See the{" "}
              <TextLink href="/privacy-policy">Privacy Policy</TextLink>.
            </span>
          </label>
        </div>
      </div>
      <Button className={styles.submit} type="submit">
        Join Our Buyers List
      </Button>
    </form>
  );
}
