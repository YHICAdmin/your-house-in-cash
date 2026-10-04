import type { AccordionItem } from "@/components/ui/accordion";
import { FaqSection } from "@/components/ui/faq-section";

const faqItems: readonly AccordionItem[] = [
  {
    question: "Can I sell just a few properties as a portfolio?",
    answer:
      "Yes. Whether you own three properties or a larger group, we can review the opportunity together and discuss whether a coordinated sale makes sense.",
  },
  {
    question: "Can occupied rentals be included?",
    answer:
      "Often, yes. Tell us about the tenants, leases, and access so we can understand the portfolio and plan around the details upfront.",
  },
  {
    question: "Do the properties need to be vacant or repaired first?",
    answer:
      "No. Properties can be evaluated in their current condition. You do not need to empty every unit or create a renovation plan before reaching out.",
  },
  {
    question: "Do all properties need to close on the same day?",
    answer:
      "Not necessarily. We will talk through the portfolio, your timing, and the practical details to determine what coordinated closing plan makes sense.",
  },
  {
    question: "How do you review a portfolio offer?",
    answer:
      "We look at the properties together, including their condition, occupancy, lease details, and overall situation, before explaining whether there is a realistic path to a purchase.",
  },
  {
    question: "Am I obligated to accept an offer?",
    answer:
      "No. An offer is simply one option. We explain it clearly so you can decide whether selling the portfolio together is the right fit.",
  },
];

export function PortfolioFaq() {
  return (
    <FaqSection
      label="FAQ"
      headline="Questions about selling a portfolio?"
      supportingCopy="Get clear answers about occupied rentals, property condition, timing, and what it means to sell several properties together."
      items={faqItems}
      background="soft"
    />
  );
}
