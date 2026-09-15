import { MapPin } from "lucide-react";
import { AreaFinalCta } from "@/components/area/area-final-cta";
import { AreasHero } from "@/components/area/areas-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { areas, getAreaPagePath } from "@/data/areas";
import localStyles from "@/components/area/area-local.module.css";
import styles from "./page.module.css";

export default function AreasWeBuyInPage() {
  const sortedAreas = [...areas].sort((a, b) => a.city.localeCompare(b.city, "en"));

  return (
    <>
      <main>
        <AreasHero cities={sortedAreas.map(area => ({ name: area.city, slug: area.slug }))} />
        <section className={`${styles.section} section-spacing system-lines-bg`}>
          <div className={`${styles.layout} content-grid`}>
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
