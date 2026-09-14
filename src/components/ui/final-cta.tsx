import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./final-cta.module.css";

export type FinalCtaBenefit = { icon: LucideIcon; heading: string; supportingCopy: string };
export type FinalCtaContent = {
  label: string;
  headline: string;
  supportingCopy: string;
  cta: { label: string; href: string };
  reassurance: string;
  benefits: readonly [FinalCtaBenefit, FinalCtaBenefit];
};

export function FinalCta({ content, background = "default" }: {
  content: FinalCtaContent;
  background?: "default" | "soft" | "neutral";
}) {
  return (
    <section className={`${styles.section} section-spacing system-lines-bg`} data-background={background} aria-labelledby="final-cta-heading">
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.composition}>
          <div className={styles.intro}>
            <SectionLabel>{content.label}</SectionLabel>
            <h2 id="final-cta-heading" className={`${styles.heading} text-heading-2`}>{content.headline}</h2>
            <p className={`${styles.supportingCopy} text-body-large`}>{content.supportingCopy}</p>
          </div>
          <Button href={content.cta.href} variant="conversion">{content.cta.label}</Button>
          <p className={`${styles.reassurance} text-body-small`}>{content.reassurance}</p>
        </div>
        <ul className={styles.benefits}>
          {content.benefits.map((benefit, index) => (
            <li key={index} className={styles.benefit}>
              <IconContainer icon={benefit.icon} aria-hidden="true" />
              <h3 className={`${styles.benefitHeading} text-heading-4`}>{benefit.heading}</h3>
              <p className={`${styles.benefitCopy} text-body`}>{benefit.supportingCopy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
