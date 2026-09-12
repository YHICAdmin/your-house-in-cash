"use client";

import type { FormEventHandler } from "react";
import { ChoiceGroup } from "@/components/form/choice-group";
import { Textarea } from "@/components/form/field";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import styles from "./seller-form.module.css";

export type PropertyAnswers = { condition: string[]; occupancy: string[]; reasons: string[]; timeline: string[]; notes: string };
const questions = [
  { key: "condition", label: "Property Condition", options: ["Move-in ready", "Needs minor repairs", "Needs major repairs", "Not sure"] },
  { key: "occupancy", label: "Occupancy", options: ["Owner-occupied", "Tenant-occupied", "Vacant", "Other / Not sure"] },
  { key: "reasons", label: "Reason for Selling", options: ["Inherited property", "Moving / Relocating", "Financial difficulties", "Too many repairs", "Tired of being a landlord", "Downsizing", "Other"] },
  { key: "timeline", label: "Selling Timeline", options: ["As soon as possible", "Within 1–3 months", "Within 3–6 months", "More than 6 months", "Just exploring"] },
] as const;

// Presentation and editing only. Mount after confirmed persistence of Step 1.
export function PropertyDetails({ answers, onChange, onBack, onSubmit, onSkip, pending, failure }: {
  answers: PropertyAnswers; onChange: (answers: PropertyAnswers) => void;
  onBack: () => void; onSubmit: FormEventHandler<HTMLFormElement>; onSkip: () => void;
  pending?: "submit" | "skip"; failure?: string;
}) {
  return <form noValidate onSubmit={event => {
    event.preventDefault();
    if (!pending) onSubmit(event);
  }}>
    <TextLink className={styles.back} disabled={!!pending} onClick={onBack}>Back</TextLink>
    <div className={styles.intro}>
      <h1 className="text-heading-2" tabIndex={-1}>Tell us a little more about the house</h1>
      <p className="text-body">These details help us understand your property. All questions are optional—answer what you can or skip this step.</p>
    </div>
    <div className={styles.fields}>
      {questions.map(question => <ChoiceGroup key={question.key} name={question.key} question={question.label}
        options={question.options} multiple={question.key === "reasons"} value={answers[question.key]}
        guidance={question.key === "reasons" ? "Select all that apply." : undefined}
        disabled={!!pending} onChange={value => onChange({ ...answers, [question.key]: value })} />)}
      <Textarea id="notes" name="notes" label="Anything else you'd like us to know?"
        guidance="Up to 2,000 characters" guidanceBesideLabel maxLength={2000} disabled={!!pending}
        value={answers.notes} onChange={event => onChange({ ...answers, notes: event.target.value })} />
    </div>
    <div className={styles.actions}>
      {failure && <p className={`text-body-small ${styles.error}`}>{failure}</p>}
      <Button type="submit" className={styles.primary} disabled={!!pending}>{pending === "submit" ? "Saving…" : "Submit details"}</Button>
      <TextLink disabled={!!pending} onClick={onSkip}>{pending === "skip" ? "Saving…" : "Skip for now"}</TextLink>
      <span role="status" className="visually-hidden">{pending ? "Saving…" : failure}</span>
    </div>
  </form>;
}

