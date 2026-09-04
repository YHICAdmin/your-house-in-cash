import { Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./area-how-it-works.module.css";

const headingId = "how-it-works-heading";

export function AreaHowItWorks() {
  return (
    <section
      className="section-spacing system-lines-bg"
      aria-labelledby={headingId}
    >
      <div className="content-grid">
        <div className={styles.intro}>
          <SectionLabel icon={Cog}>How It Works</SectionLabel>
          <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
            Selling your house can be simple.
          </h2>
          <p className={`${styles.supportingCopy} text-body-large`}>
            See how easy it is to sell your house for cash in just three simple
            steps.
          </p>
        </div>

        <div className={styles.processCards}>
          <div className={styles.processCard} />
          <div className={styles.processCard} />
          <div className={`${styles.processCard} ${styles.processCardWide}`} />
        </div>

        <div className={styles.cta}>
          <Button href="/get-cash-offer">Get My Cash Offer</Button>
        </div>
      </div>
    </section>
  );
}
