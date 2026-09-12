"use client";

import { type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes, useId } from "react";
import styles from "./field.module.css";

type FieldProps = {
  id: string;
  label: string;
  guidance?: string;
  error?: string;
  guidanceBesideLabel?: boolean;
};

export function Field({ id, label, guidance, error, guidanceBesideLabel, children }: FieldProps & { children: ReactNode }) {
  const help = guidance ? <span id={id + "-help"} className={`text-body-small ${styles.guidance}`}>{guidance}</span> : null;
  return <div className={styles.field}>
    <div className={styles.labelRow}>
      <label className={`text-label ${styles.label}`} htmlFor={id}>{label}</label>
      {guidanceBesideLabel && help}
    </div>
    {children}
    {!guidanceBesideLabel && help}
    {error && <p id={id + "-error"} className={`text-body-small ${styles.error}`}>{error}</p>}
  </div>;
}

export function fieldDescription(id: string, guidance?: string, error?: string) {
  return [guidance && id + "-help", error && id + "-error"].filter(Boolean).join(" ") || undefined;
}

export function TextField({ label, guidance, error, id: suppliedId, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<FieldProps, "id">) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return <Field {...{ id, label, guidance, error }}>
    <input {...props} id={id} className={`text-body ${styles.control}`} aria-invalid={!!error || undefined} aria-describedby={fieldDescription(id, guidance, error)} />
  </Field>;
}

export function Textarea({ label, guidance, error, guidanceBesideLabel, id: suppliedId, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<FieldProps, "id">) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return <Field {...{ id, label, guidance, error, guidanceBesideLabel }}>
    <textarea rows={3} {...props} id={id} className={`text-body ${styles.control}`} aria-invalid={!!error || undefined} aria-describedby={fieldDescription(id, guidance, error)} />
  </Field>;
}

