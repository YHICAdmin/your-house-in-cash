"use client";

import type { ComponentProps } from "react";
import { TextField } from "./field";
import { formatPhone } from "@/lib/phone";

export function PhoneField({ value, onValueChange, ...props }: Omit<ComponentProps<typeof TextField>, "value" | "onChange" | "type"> & { value: string; onValueChange: (value: string) => void }) {
  function update(input: HTMLInputElement, raw: string, caret: number) {
    const prefix = raw.slice(0, caret);
    let digitCount = prefix.replace(/\D/g, "").length;
    if (raw.replace(/\D/g, "").startsWith("1") && digitCount) digitCount--;
    const formatted = formatPhone(raw);
    onValueChange(formatted);
    // Restore even when deleting punctuation produces the same controlled value.
    input.value = formatted;
    let position = 0;
    if (formatted === raw) position = caret;
    else for (let seen = 0; position < formatted.length && seen < digitCount; position++) {
      if (/\d/.test(formatted[position])) seen++;
    }
    input.setSelectionRange(position, position);
  }
  return <TextField {...props} type="tel" autoComplete="tel" value={value}
    onChange={event => update(event.currentTarget, event.currentTarget.value, event.currentTarget.selectionStart ?? 0)}
    onKeyDown={event => {
      const input = event.currentTarget;
      const start = input.selectionStart ?? 0;
      if (start !== input.selectionEnd) return;
      if (event.key === "Backspace" && input.value[start - 1] === "-") {
        event.preventDefault();
        update(input, input.value.slice(0, start - 2) + input.value.slice(start), start - 2);
      } else if (event.key === "Delete" && input.value[start] === "-") {
        event.preventDefault();
        update(input, input.value.slice(0, start) + input.value.slice(start + 2), start);
      }
    }} />;
}
