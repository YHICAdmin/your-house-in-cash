import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./area-final-cta.module.css";

type AreaFinalCtaProps = {
  areaName: string;
};

const headingId = "final-cta-heading";

export function AreaFinalCta({ areaName }: AreaFinalCtaProps) {
  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.composition}>
          <div className={styles.intro}>
            <SectionLabel>Ready When You Are</SectionLabel>
            <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
              Ready to sell your {areaName} house?
            </h2>
            <p className={`${styles.supportingCopy} text-body-large`}>
              Tell us about your {areaName} house and receive a fair,
              no-obligation cash offer built around your situation and
              timeline.
            </p>
          </div>

          <Button href="/get-cash-offer">Get My Cash Offer</Button>
          <p className={`${styles.reassurance} text-body-small`}>
            100% free. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
