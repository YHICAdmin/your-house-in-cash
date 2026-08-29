import { House } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { SituationExplorer } from "./situation-explorer";
import styles from "./area-situations.module.css";

const headingId = "situations-heading";
const descriptionId = "situations-description";

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
        <SituationExplorer
          descriptionId={descriptionId}
          headingId={headingId}
        />
      </div>
    </section>
  );
}
