import { MapPin } from "lucide-react";
import { TextLink } from "@/components/ui/text-link";
import type { NearbyCity } from "@/data/areas";
import { getAreaPagePath } from "@/data/areas";
import { CitySearch } from "./city-search";
import styles from "./areas-hero.module.css";

const popularSlugs = ["cleveland", "euclid", "lakewood", "parma"];

export function AreasHero({ cities }: { cities: readonly NearbyCity[] }) {
  const popularCities = popularSlugs.map(slug => cities.find(city => city.slug === slug)!);

  return (
    <section className={`${styles.hero} section-spacing system-lines-bg`} aria-labelledby="areas-heading">
      <div className={styles.gradient} aria-hidden="true" />
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 id="areas-heading" className={`${styles.heading} text-display`}>Areas We Buy Houses In</h1>
            <p className={`${styles.copy} text-body-large`}>
              We buy houses as-is across Cleveland and the surrounding communities. Find your city below to learn more.
            </p>
          </div>
          <div className={styles.search}><CitySearch cities={cities} /></div>
          <div className={`${styles.popular} text-body`}>
            <span className={styles.popularLabel}>Popular searches:</span>
            {popularCities.map(city => <TextLink key={city.slug} href={getAreaPagePath(city.slug)}>{city.name}</TextLink>)}
          </div>
        </div>
        <div className={styles.illustration} aria-hidden="true">
          <svg viewBox="0 0 600 500" className={styles.house} focusable="false">
            <defs>
              <linearGradient id="area-land" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="var(--color-brand-light)" />
                <stop offset="1" stopColor="var(--color-background)" />
              </linearGradient>
              <linearGradient id="area-roof" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="var(--color-brand)" />
                <stop offset="1" stopColor="var(--color-brand-dark)" />
              </linearGradient>
            </defs>
            <ellipse cx="305" cy="379" rx="220" ry="65" fill="var(--color-brand-dark)" opacity=".06" />
            <path d="M60 325 292 190 542 329 309 465Z" fill="var(--color-brand-light)" />
            <path d="M60 312 292 177 542 316 309 452Z" fill="url(#area-land)" stroke="var(--color-border)" />
            <path d="m83 329 220-127M177 380l221-127M287 442l232-135" stroke="var(--color-background)" strokeWidth="12" />
            <path d="m119 278 250 142M203 229l248 142" stroke="var(--color-background)" strokeWidth="12" />
            <path d="m258 368 63 36 58-34-62-36Z" fill="var(--color-border)" />
            <path d="m168 277 148 85 123-71-145-84Z" fill="var(--color-brand-dark)" opacity=".09" />
            <path d="m178 228 130 75v88l-130-75Z" fill="var(--color-background)" stroke="var(--color-border)" />
            <path d="m308 303 111-64v88l-111 64Z" fill="var(--color-brand-light)" stroke="var(--color-border)" />
            <path d="m308 303 55-96 56 32Z" fill="var(--color-background)" stroke="var(--color-border)" />
            <path d="M233 120 363 195 431 238 301 163Z" fill="var(--color-brand)" />
            <path d="M155 232 233 120 363 195 308 312Z" fill="url(#area-roof)" />
            <path d="m155 232 153 88v-8l-153-88Z" fill="var(--color-brand-dark)" />
            <path d="m264 166 23 13v-49l-23-13Z" fill="var(--color-brand-light)" />
            <path d="m287 179 19-11v-49l-19 11Z" fill="var(--color-brand)" />
            <path d="m264 117 19-11 23 13-19 11Z" fill="var(--color-background)" />
            <path d="m198 263 32 18v35l-32-18Z" fill="var(--color-brand-light)" stroke="var(--color-brand)" strokeWidth="3" />
            <path d="m249 292 32 18v35l-32-18Z" fill="var(--color-brand-light)" stroke="var(--color-brand)" strokeWidth="3" />
            <path d="m214 272v35m-16-27 32 18m35 3v35m-16-26 32 18" stroke="var(--color-background)" strokeWidth="3" />
            <path d="m338 319 29-17v55l-29 17Z" fill="var(--color-brand-dark)" />
            <path d="m381 284 22-13v32l-22 13Z" fill="var(--color-background)" stroke="var(--color-brand)" strokeWidth="3" />
            <circle cx="359" cy="335" r="2" fill="var(--color-background)" />
            <path d="m330 378 43-25 13 8-43 25Z" fill="var(--color-background)" />
            <g fill="var(--color-brand)">
              <ellipse cx="128" cy="285" rx="19" ry="11" opacity=".15" />
              <path d="M126 284v-62" stroke="var(--color-brand-dark)" strokeWidth="5" />
              <ellipse cx="126" cy="227" rx="26" ry="37" />
              <ellipse cx="455" cy="324" rx="21" ry="12" opacity=".15" />
              <path d="M454 321v-51" stroke="var(--color-brand-dark)" strokeWidth="5" />
              <ellipse cx="454" cy="270" rx="23" ry="32" />
            </g>
            <g fill="var(--color-brand-dark)" opacity=".2">
              <ellipse cx="134" cy="227" rx="14" ry="31" />
              <ellipse cx="461" cy="270" rx="13" ry="27" />
            </g>
          </svg>
          {popularCities.map((city, index) => (
            <div key={city.slug} className={`${styles.pin} ${styles[`pin${index}`]}`}>
              <span className={`${styles.pinLabel} text-body`}>{city.name}</span>
              <MapPin size={24} fill="var(--color-brand-light)" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
