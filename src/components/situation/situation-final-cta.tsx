import { situationSection } from "@/lib/situation-content";
import { Banknote, Package, type LucideIcon } from "lucide-react";
import { FinalCta, type FinalCtaBenefit } from "@/components/ui/final-cta";
import { parseSituationFinalCta } from "@/lib/situation-article";

const icons: Record<string, LucideIcon> = { Banknote, Package };

export function SituationFinalCta({ source }: { source: string }) {
  if (!situationSection(source, "Final CTA")) return null;
  const content = parseSituationFinalCta(source);
  if (!content) return null;
  const benefit = (value: (typeof content.benefits)[number]): FinalCtaBenefit => {
    const icon = icons[value.icon];
    if (!icon) throw new Error(`Unsupported Final CTA icon: ${value.icon}`);
    return { ...value, icon };
  };
  return <FinalCta content={{ ...content, benefits: [benefit(content.benefits[0]), benefit(content.benefits[1])] }} />;
}
