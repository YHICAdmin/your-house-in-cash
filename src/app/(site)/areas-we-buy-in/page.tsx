import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { LocalAreaMap } from "@/components/area/local-area-map";
import { Button } from "@/components/ui/button";
import { AreasHero } from "@/components/area/areas-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { areas, getAreaPagePath } from "@/data/areas";
import localStyles from "@/components/area/area-local.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Areas We Buy Houses In Greater Cleveland, OH | Your House in Cash",
  description: "We buy houses as-is in Greater Cleveland, Ohio and surrounding communities. Find your city to learn more.",
  alternates: { canonical: "/areas-we-buy-in" },
};

export default function AreasWeBuyInPage() {
  const sortedAreas = [...areas].sort((a, b) => a.city.localeCompare(b.city, "en"));
  const illustrationCities = ["cleveland", "euclid", "cleveland-heights", "parma"].map(slug => {
    const area = areas.find(area => area.slug === slug)!;
    return { name: area.city, slug: area.slug };
  });
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
                Explore the Greater Cleveland, Ohio cities where we buy houses. Select your city to learn more about selling your house as-is.
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
        <section className={`${styles.contactSection} content-grid system-lines-bg`} aria-labelledby="contact-heading">
          <div className={styles.contactStrip}>
            <div className={styles.contactContent}>
            <div>
              <h2 id="contact-heading" className={`${styles.contactHeading} text-heading-3`}>Don’t see your city?</h2>
              <p className={`${styles.contactCopy} text-body`}>
                We also buy houses in nearby communities. Get in touch to ask about your property.
              </p>
            </div>
            <Button href="/contact" variant="conversion" className={styles.contactButton}>Contact Us</Button>
            </div>
            <div className={styles.contactIllustration}>
              <LocalAreaMap cities={illustrationCities} idPrefix="contact-map" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
