import { Button } from "@/components/ui/button";
import styles from "./portfolio-final-cta.module.css";

export function PortfolioFinalCta() {
  return (
    <section className={`${styles.section} section-spacing system-lines-bg`} aria-labelledby="portfolio-final-cta-heading">
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.composition}>
          <h2 id="portfolio-final-cta-heading" className={`${styles.heading} text-heading-2`}>
            See what a portfolio sale could look like.
          </h2>
          <p className={`${styles.copy} text-body-large`}>
            Tell us about the properties, tenants, and timing you are considering. We’ll review the portfolio as a whole and let you know whether a direct sale makes sense.
          </p>
          <Button href="/get-cash-offer" variant="conversion">Tell Us About Your Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
