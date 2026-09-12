"use client";

import { Autocomplete, type Suggestion } from "@/components/ui/autocomplete";
import { getExternalLinkProps } from "@/lib/link-target";
import { Field, fieldDescription } from "./field";
import styles from "./field.module.css";

async function searchAddresses(query: string, signal: AbortSignal): Promise<Suggestion[]> {
  const key = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  if (!key) throw new Error("Address autocomplete is unavailable");
  const params = new URLSearchParams({ text: query, filter: "countrycode:us", limit: "5", format: "json", apiKey: key });
  const response = await fetch("https://api.geoapify.com/v1/geocode/autocomplete?" + params, { signal });
  if (!response.ok) throw new Error("Address autocomplete is unavailable");
  const data = await response.json() as { results?: { place_id: string; formatted: string }[] };
  return (data.results ?? []).map(result => ({ id: result.place_id, label: result.formatted, value: result.formatted }));
}

export function AddressField({ id, label, value, onValueChange, onBlur, guidance, error, disabled, required }: {
  id: string; label: string; value: string; onValueChange: (value: string) => void;
  onBlur?: () => void; guidance?: string; error?: string; disabled?: boolean; required?: boolean;
}) {
  return <Field {...{ id, label, guidance, error }}>
    <Autocomplete id={id} name={id} value={value} onValueChange={onValueChange} onBlur={onBlur}
      disabled={disabled} required={required} autoComplete="street-address"
      className={`text-body ${styles.control}`} aria-invalid={!!error || undefined}
      aria-describedby={fieldDescription(id, guidance, error)}
      search={searchAddresses} minLength={3} delay={300} limit={5}
      loadingMessage="Searching addresses…" emptyMessage="No matching addresses. You can enter the address manually."
      attribution={<>Powered by <a href="https://www.geoapify.com/" {...getExternalLinkProps("https://www.geoapify.com/")}>Geoapify</a></>} />
  </Field>;
}
