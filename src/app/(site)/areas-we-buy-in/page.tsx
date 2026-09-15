import { MapPin } from "lucide-react";
import { AreaFinalCta } from "@/components/area/area-final-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { areas, getAreaPagePath } from "@/data/areas";
import localStyles from "@/components/area/area-local.module.css";
import styles from "./page.module.css";

export default function AreasWeBuyInPage() {
  const sortedAreas = [...areas].sort((a, b) => a.city.localeCompare(b.city, "en"));

  return (
    <>
      <main>
        <section className={`${styles.section} section-spacing system-lines-bg`} aria-labelledby="areas-heading">
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.intro}>
              <h1 id="areas-heading" className={`${styles.heading} text-display`}>Areas We Buy Houses In</h1>
              <p className={`${localStyles.introCopy} text-body-large`}>
                We buy houses as-is across Cleveland and the surrounding communities. Find your city below to learn more.
              </p>
            </div>
            <ul className={styles.cities}>
              {sortedAreas.map((area) => (
                <li key={area.slug}>
                  <a className={`${localStyles.nearbyLink} text-body`} href={getAreaPagePath(area.slug)}>
                    <MapPin aria-hidden="true" size={20} />
                    <span>{area.city}</span>
                  </a>
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
