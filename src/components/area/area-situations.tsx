import { FileText, House, ListChecks } from "lucide-react";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import { SituationExplorer } from "./situation-explorer";
import styles from "./area-situations.module.css";

const headingId = "situations-heading";
const descriptionId = "situations-description";
const situationLinks = [
  { label: "Foreclosure", href: "/foreclosure" },
  { label: "Inherited Property", href: "/inherited-property" },
  { label: "Landlords", href: "/landlords" },
  { label: "Major Repairs", href: "/major-repairs" },
  { label: "Vacant Property", href: "/vacant-property" },
  { label: "Relocation", href: "/relocation" },
  { label: "Divorce", href: "/divorce" },
  { label: "Liens", href: "/liens" },
  { label: "Fire Damage", href: "/fire-damage" },
  { label: "Hoarder House", href: "/hoarder-house" },
] as const;

export function AreaSituations() {
  return (
    <section
      className={`${styles.section} section-spacing`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.sectionLabel}>
          <SectionLabel icon={House}>We Help With</SectionLabel>
        </div>
        <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
          What brings you here?
        </h2>
        <p
          id={descriptionId}
          className={`${styles.supportingCopy} text-body-large`}
        >
          Every homeowner&apos;s situation is different. Choose what best
          describes yours to see how we can help.
        </p>

        <ul className={styles.supportingPoints}>
          <li className={styles.supportingPoint}>
            <IconContainer icon={ListChecks} aria-hidden="true" />
            <h3 className={styles.pointHeading}>
              What Can Affect a Home Sale
            </h3>
            <p className={`${styles.pointCopy} text-body`}>
              Property condition, ownership, occupancy, liens, and important
              deadlines can all influence the steps required before a home can
              be sold.
            </p>
          </li>
          <li className={styles.supportingPoint}>
            <IconContainer icon={FileText} aria-hidden="true" />
            <h3 className={styles.pointHeading}>
              Information Worth Gathering
            </h3>
            <p className={`${styles.pointCopy} text-body`}>
              Documents related to ownership, mortgages, property taxes,
              repairs, tenants, and timing can help clarify the available
              options and next steps.
            </p>
          </li>
        </ul>

        <div className={styles.explorerColumn}>
          <SituationExplorer
            descriptionId={descriptionId}
            headingId={headingId}
          />
          <noscript>
            <nav className={styles.noScriptFallback} aria-label="Seller situations">
              <h3 className="text-heading-4">Explore seller situations</h3>
              <ul className="text-body-small">
                {situationLinks.map(({ label, href }) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </nav>
          </noscript>
        </div>
      </div>
    </section>
  );
}
