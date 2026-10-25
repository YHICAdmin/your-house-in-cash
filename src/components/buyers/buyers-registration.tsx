import { Check } from "lucide-react";
import { BuyersRegistrationForm } from "./buyers-registration-form";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./buyers-registration.module.css";

const trustPoints = ["Free registration", "No obligation to purchase"] as const;

export function BuyersRegistration() {
  return (
    <section
      id="buyer-registration"
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby="buyer-registration-heading"
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.intro}>
          <SectionLabel>Join Our Network</SectionLabel>
          <h2 id="buyer-registration-heading" className={`${styles.heading} text-heading-2`}>
            Let&apos;s Find Your Next Investment.
          </h2>
          <p className={`${styles.description} text-body-large`}>
            Tell us what you&apos;re looking for, and we&apos;ll notify you when
            opportunities matching your criteria become available.
          </p>
          <ul className={styles.trustPoints}>
            {trustPoints.map((point) => (
              <li key={point} className="text-body">
                <Check aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.formCard}>
          <BuyersRegistrationForm />
        </div>
      </div>
    </section>
  );
}
