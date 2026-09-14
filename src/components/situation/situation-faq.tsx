import { situationSection } from "@/lib/situation-content";
import { parseSituationFaq } from "@/lib/situation-article";
import { FaqSection } from "@/components/ui/faq-section";
import { renderSituationInline } from "./situation-inline";

export function SituationFaq({ source }: { source: string }) {
  if (!situationSection(source, "FAQ")) return null;
  const faq = parseSituationFaq(source);
  if (!faq) return null;
  return <FaqSection
    centerColumns
    background="soft"
    label={faq.label}
    headline={faq.headline}
    supportingCopy={faq.supportingCopy}
    items={faq.items.map(item => ({
      question: item.question,
      answer: item.paragraphs.map((paragraph, index) => <p key={index}>{renderSituationInline(paragraph, faq.references)}</p>),
    }))}
  />;
}
