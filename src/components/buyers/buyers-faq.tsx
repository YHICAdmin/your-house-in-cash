import type { AccordionItem } from "@/components/ui/accordion";
import { FaqSection } from "@/components/ui/faq-section";

const faqItems: readonly AccordionItem[] = [
  {
    question: "How will I receive investment opportunities?",
    answer:
      "When an opportunity matches the preferences you share, we will use the contact information and marketing preferences you selected to keep you informed.",
  },
  {
    question: "Is there a cost to join the buyers list?",
    answer:
      "No. Joining the buyers list is free, and there is no obligation to purchase a property.",
  },
  {
    question: "Can I update my buying criteria later?",
    answer:
      "Yes. Contact us when your target areas, budget, purchasing method, or investment strategy changes so we can keep your preferences current.",
  },
  {
    question: "Will every opportunity match my criteria?",
    answer:
      "We use your preferences to help identify relevant opportunities, but availability and property details can vary. Review each opportunity carefully to decide whether it fits your plans.",
  },
  {
    question: "Do I have to buy a property after joining?",
    answer:
      "No. The buyers list is simply a way to hear about potential opportunities. You decide whether to pursue any property that becomes available.",
  },
];

export function BuyersFaq() {
  return (
    <FaqSection
      label="FAQ"
      headline="Questions about the buyers list?"
      supportingCopy="Learn how the buyers list works, what to expect from opportunities, and how to keep your preferences up to date."
      items={faqItems}
    />
  );
}
