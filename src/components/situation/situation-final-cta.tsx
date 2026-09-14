import { readFile } from "node:fs/promises";
import path from "node:path";
import { Banknote, Package, type LucideIcon } from "lucide-react";
import { FinalCta, type FinalCtaBenefit } from "@/components/ui/final-cta";
import { parseSituationFinalCta } from "@/lib/situation-article";

const icons: Record<string, LucideIcon> = { Banknote, Package };

export async function SituationFinalCta({ slug }: { slug: string }) {
  if (slug !== "inherited-property") return null;
  const source = await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/situations/inherited-property.md"), "utf8");
  const content = parseSituationFinalCta(source);
  if (!content) return null;
  const benefit = (value: (typeof content.benefits)[number]): FinalCtaBenefit => {
    const icon = icons[value.icon];
    if (!icon) throw new Error(`Unsupported Final CTA icon: ${value.icon}`);
    return { ...value, icon };
  };
  return <FinalCta content={{ ...content, benefits: [benefit(content.benefits[0]), benefit(content.benefits[1])] }} />;
}
