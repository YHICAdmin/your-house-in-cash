import { FaqSection } from "@/components/ui/faq-section";
import type { AccordionItem } from "@/components/ui/accordion";

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
    question: "Is a POS inspection the same as a private home inspection?",
    answer:
      "No. A Point-of-Sale inspection is a city process that checks compliance with local rules. A private home inspection is arranged by the buyer for their own information and does not replace a required city inspection.",
  },
  {
    question: "How do you determine your offer?",
    answer:
      "We consider the property’s condition, location, layout, and any updates or repairs it may need. We also review recent sales, local buyer demand, and how similar properties are performing in the surrounding market before preparing the cash offer.",
  },
];

export function AreaFaq() {
  return <FaqSection label="FAQ" headline={"Questions? We’ve got answers."} supportingCopy={"Get clear answers about how our process works, how we determine your offer, and what to expect when selling your house as-is."} items={faqItems} background="soft" />;
}
