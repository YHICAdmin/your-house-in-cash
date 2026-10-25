import { Button } from "@/components/ui/button";
import styles from "./buyers-hero.module.css";

export function BuyersHero() {
  return (
    <section
      className={`${styles.hero} section-spacing system-lines-bg`}
      aria-labelledby="buyers-hero-heading"
    >
      <div className={styles.gradient} aria-hidden="true" />
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <h1 id="buyers-hero-heading" className={`${styles.heading} text-display`}>
            Find Your Next Investment Property in Greater Cleveland
          </h1>
          <p className={`${styles.supportingCopy} text-body-large`}>
            Join our buyers list to receive off-market investment opportunities that
            match your buying criteria.
          </p>
          <Button href="#buyer-registration" variant="conversion">
            Join Our Buyers List
          </Button>
        </div>
      </div>
    </section>
  );
}
