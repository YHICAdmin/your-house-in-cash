import { LocalAreaMap } from "./local-area-map";
import { TextLink } from "@/components/ui/text-link";
import type { NearbyCity } from "@/data/areas";
import { getAreaPagePath } from "@/data/areas";
import { CitySearch } from "./city-search";
import styles from "./areas-hero.module.css";

const popularSlugs = ["cleveland", "euclid", "cleveland-heights", "parma"];

export function AreasHero({ cities }: { cities: readonly NearbyCity[] }) {
  const popularCities = popularSlugs.map(slug => cities.find(city => city.slug === slug)!);

  return (
    <section className={`${styles.hero} section-spacing system-lines-bg`} aria-labelledby="areas-heading">
      <div className={styles.gradient} aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" focusable="false">
          <defs>
            <linearGradient id="areas-band-base" x1="0" y1="0" x2="1" y2=".7">
              <stop stopColor="var(--band-deep)" />
              <stop offset=".45" stopColor="var(--band-mid)" />
              <stop offset="1" stopColor="var(--band-deep)" />
            </linearGradient>
            <linearGradient id="areas-band-light" x1="0" y1="0" x2=".25" y2="1">
              <stop stopColor="var(--color-brand-light)" />
              <stop offset=".48" stopColor="var(--band-mid)" />
              <stop offset="1" stopColor="var(--band-deep)" />
            </linearGradient>
            <linearGradient id="areas-band-wave" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="var(--band-deep)" />
              <stop offset=".5" stopColor="var(--band-mid)" />
              <stop offset="1" stopColor="var(--color-brand-light)" />
            </linearGradient>
            <radialGradient id="areas-band-glow">
              <stop stopColor="var(--color-brand-light)" stopOpacity=".85" />
              <stop offset="1" stopColor="var(--color-brand-light)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M0 0H1440V200H0Z" fill="url(#areas-band-base)" />
          <path d="M-80 155C160 175 200-75 510 20S830 220 1060 90 1300-35 1520 55V240H-80Z" fill="url(#areas-band-light)" />
          <path d="M-50 210C150 75 270 20 460 95S755 200 955 65 1270 55 1490-30V-60H-50Z" fill="url(#areas-band-wave)" />
          <ellipse cx="350" cy="155" rx="320" ry="130" fill="url(#areas-band-glow)" />
          <ellipse cx="1240" cy="40" rx="300" ry="135" fill="url(#areas-band-glow)" />
        </svg>
      </div>
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 id="areas-heading" className={`${styles.heading} text-display`}>Areas We Buy Houses In</h1>
            <p className={`${styles.copy} text-body-large`}>
              We buy houses as-is across Cleveland and the surrounding communities. Find your city below to learn more.
            </p>
          </div>
          <div className={styles.search}><CitySearch cities={cities} /></div>
          <div className={`${styles.popular} text-body-small`}>
            <span className={styles.popularLabel}>Popular searches:</span>
            {popularCities.map(city => <TextLink key={city.slug} className={styles.popularLink} href={getAreaPagePath(city.slug)}>{city.name}</TextLink>)}
          </div>
        </div>
        <LocalAreaMap cities={popularCities} />
      </div>
    </section>
  );
}
