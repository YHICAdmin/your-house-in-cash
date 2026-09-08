import { Accordion, type AccordionItem } from "@/components/ui/accordion";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import styles from "./area-faq.module.css";

const headingId = "faq-heading";

const faqItems: readonly AccordionItem[] = [
  {
    question: "How does the process work?",
    answer:
      "Start by telling us about your house and your situation. We review the information, take a closer look at the property, and prepare a no-obligation cash offer. If the offer works for you, you choose the closing date and we handle the details needed to complete the sale.",
  },
  {
    question: "Do I need to make any repairs?",
    answer:
      "No. We buy houses as-is, so you do not need to make repairs, complete updates, stage the property, or prepare it for a traditional listing before selling.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "No. We do not charge fees or commissions for selling your house to us. The cash offer is presented clearly so you can understand it before deciding whether to move forward.",
  },
  {
    question: "How quickly can I sell my house?",
    answer:
      "The timeline depends on your situation and the details of the property. If you need to move quickly, we can work toward an earlier closing. If you need more time, you can choose a closing date that better fits your schedule.",
  },
  {
    question: "How do you determine your offer?",
    answer:
      "We consider the property’s condition, location, layout, and any updates or repairs it may need. We also review recent sales, local buyer demand, and how similar properties are performing in the surrounding market before preparing the cash offer.",
  },
  {
    question: "Am I obligated to accept the offer?",
    answer:
      "No. The offer is completely optional, and there is no pressure to accept it. We explain the offer clearly so you can decide whether it is right for your situation.",
  },
];

export function AreaFaq() {
  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.leftFlow}>
          <div className={styles.intro}>
            <SectionLabel>FAQ</SectionLabel>
            <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
              Questions? We’ve got answers.
            </h2>
            <p className={`${styles.supportingCopy} text-body-large`}>
              Get clear answers about how our process works, how we determine
              your offer, and what to expect when selling your house as-is.
            </p>
          </div>

          <TextLink className={styles.contactLink} href="/contact">
            Contact us
          </TextLink>
        </div>

        <div className={styles.accordionColumn}>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
