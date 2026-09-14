import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseSituationFaq } from "@/lib/situation-article";
import { FaqSection } from "@/components/ui/faq-section";
import { renderSituationInline } from "./situation-inline";

export async function SituationFaq({ slug }: { slug: string }) {
  if (slug !== "inherited-property") return null;
  const source = await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/situations/inherited-property.md"), "utf8");
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
