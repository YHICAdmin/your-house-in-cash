"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Field } from "@/components/form/field";
import fieldStyles from "@/components/form/field.module.css";
import { Autocomplete, type Suggestion } from "@/components/ui/autocomplete";
import { getAreaPagePath, type NearbyCity } from "@/data/areas";

export function CitySearch({ cities }: { cities: readonly NearbyCity[] }) {
  const id = useId();
  const [value, setValue] = useState("");
  const router = useRouter();

  async function search(query: string): Promise<Suggestion[]> {
    return cities
      .filter(city => city.name.toLowerCase().includes(query.toLowerCase()))
      .map(city => ({ id: city.slug, label: city.name, value: city.name }));
  }

  return (
    <Field id={id} label="Find your city">
      <Autocomplete
        id={id}
        className={`${fieldStyles.control} text-body`}
        placeholder="Enter city name"
        autoComplete="off"
        value={value}
        onValueChange={setValue}
        search={search}
        minLength={1}
        delay={0}
        limit={cities.length}
        loadingMessage="Searching cities…"
        emptyMessage="No matching cities found."
        onSuggestionSelect={city => router.push(getAreaPagePath(city.id))}
        onKeyDown={event => {
          if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
          event.preventDefault();
          const city = cities.find(city => city.name.toLowerCase() === value.toLowerCase());
          if (city) router.push(getAreaPagePath(city.slug));
        }}
      />
    </Field>
  );
}
