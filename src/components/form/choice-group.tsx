"use client";

import { useId, useRef } from "react";
import { TextLink } from "@/components/ui/text-link";
import { fieldDescription } from "./field";
import styles from "./field.module.css";

export function ChoiceGroup({ name, question, options, multiple = false, value, onChange, guidance, error, disabled, onBlur }: {
  name: string; question: string; options: readonly string[]; multiple?: boolean;
  value: string[]; onChange: (value: string[]) => void; guidance?: string; error?: string;
  disabled?: boolean; onBlur?: () => void;
}) {
  const id = useId();
  const first = useRef<HTMLInputElement>(null);
  return <fieldset className={styles.group} disabled={disabled} aria-invalid={!!error || undefined}
    aria-describedby={fieldDescription(id, guidance, error)} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) onBlur?.();
    }}>
    <legend className="text-label">{question}</legend>
    {guidance && <p id={id + "-help"} className={`text-body-small ${styles.guidance}`}>{guidance}</p>}
    <div className={styles.options}>
      {options.map((option, index) => <label key={option} className={`text-body focus-container ${styles.option}`} htmlFor={id + "-" + index}>
        <input ref={index === 0 ? first : undefined} id={id + "-" + index} name={name}
          type={multiple ? "checkbox" : "radio"} value={option} checked={value.includes(option)}
          onChange={event => onChange(multiple ? event.target.checked ? [...value, option] : value.filter(item => item !== option) : [option])} />
        <span>{option}</span>
      </label>)}
    </div>
    {error && <p id={id + "-error"} className={`text-body-small ${styles.error}`}>{error}</p>}
    {!multiple && value.length > 0 && <TextLink className={styles.clear} disabled={disabled}
      aria-label={`Clear selection for ${question}`} onClick={() => { onChange([]); first.current?.focus(); }}>
      Clear selection
    </TextLink>}
  </fieldset>;
}
