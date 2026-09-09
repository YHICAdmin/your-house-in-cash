import { CalendarCheck, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
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

          <Button href="/get-cash-offer" variant="conversion">
            Get My Cash Offer
          </Button>
          <p className={`${styles.reassurance} text-body-small`}>
            100% free. No obligation.
          </p>
        </div>

        <ul className={styles.benefits}>
          <li className={styles.benefit}>
            <IconContainer icon={House} aria-hidden="true" />
            <h3 className={`${styles.benefitHeading} text-heading-4`}>
              Sell As-Is
            </h3>
            <p className={`${styles.benefitCopy} text-body`}>
              Skip repairs, cleaning, and staging. We buy your house in its
              current condition.
            </p>
          </li>
          <li className={styles.benefit}>
            <IconContainer icon={CalendarCheck} aria-hidden="true" />
            <h3 className={`${styles.benefitHeading} text-heading-4`}>
              Close on Your Timeline
            </h3>
            <p className={`${styles.benefitCopy} text-body`}>
              Choose the closing date that works for you, whether you need to
              move quickly or need more time.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
