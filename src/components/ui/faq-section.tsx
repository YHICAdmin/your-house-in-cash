import { ArrowRight, MessageCircle } from "lucide-react";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import styles from "./faq-section.module.css";

const headingId = "faq-heading";

export function FaqSection({ label, headline, supportingCopy, items }: { label: string; headline: string; supportingCopy: string; items: readonly AccordionItem[] }) {
  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.leftFlow}>
          <div className={styles.intro}>
            <SectionLabel>{label}</SectionLabel>
            <h2 id={headingId} className={`${styles.heading} text-heading-2`}>{headline}</h2>
            <p className={`${styles.supportingCopy} text-body-large`}>{supportingCopy}</p>
          </div>

          <div className={styles.contact}>
            <IconContainer icon={MessageCircle} aria-hidden="true" />
            <div className={styles.contactCopy}>
              <p className={`${styles.contactTitle} text-body`}>
                <strong>Still have a question?</strong>
              </p>
              <p className={`${styles.contactDescription} text-body-small`}>
                Can’t find what you’re looking for?
              </p>
              <TextLink className={styles.contactLink} href="/contact">
                Contact us
                <ArrowRight size={16} aria-hidden="true" focusable="false" />
              </TextLink>
            </div>
          </div>
        </div>

        <div className={styles.accordionColumn}>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
