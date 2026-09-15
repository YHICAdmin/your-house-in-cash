import { MapPin } from "lucide-react";
import { AreaFinalCta } from "@/components/area/area-final-cta";
import { AreasHero } from "@/components/area/areas-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { areas, getAreaPagePath } from "@/data/areas";
import localStyles from "@/components/area/area-local.module.css";
import styles from "./page.module.css";

export default function AreasWeBuyInPage() {
  const sortedAreas = [...areas].sort((a, b) => a.city.localeCompare(b.city, "en"));
  const letterGroups = new Map<string, typeof sortedAreas>();
  for (const area of sortedAreas) {
    const letter = area.city.charAt(0).toUpperCase();
    const group = letterGroups.get(letter) ?? [];
    group.push(area);
    letterGroups.set(letter, group);
  }

  return (
    <>
      <main>
        <AreasHero cities={sortedAreas.map(area => ({ name: area.city, slug: area.slug }))} />
        <section className={`${styles.section} section-spacing system-lines-bg`} aria-labelledby="city-directory-heading">
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.intro}>
              <h2 id="city-directory-heading" className={`${styles.heading} text-heading-2`}>Find your city</h2>
              <p className={`${localStyles.introCopy} text-body-large`}>
                Explore the cities where we buy houses. Select your city to learn more about selling your house as-is.
              </p>
            </div>
            <ul className={styles.groups}>
              {[...letterGroups].map(([letter, cities]) => (
                <li key={letter} className={styles.group}>
                  <h3 className={`${styles.letter} text-heading-3`}>{letter}</h3>
                  <ul className={styles.cities}>
                    {cities.map(area => (
                      <li key={area.slug}>
                        <a className={`${localStyles.nearbyLink} text-body`} href={getAreaPagePath(area.slug)}>
                          <MapPin aria-hidden="true" size={20} />
                          <span>{area.city}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <AreaFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
