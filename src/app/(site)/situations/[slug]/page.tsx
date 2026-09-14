import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
import { SituationHero } from "@/components/situation/situation-hero";
import { SituationContent } from "@/components/situation/situation-content";
import { SituationFaq } from "@/components/situation/situation-faq";
import { SituationFinalCta } from "@/components/situation/situation-final-cta";
import { cache } from "react";
import { readSituationContent, parseSituationHero } from "@/lib/situation-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return situations.map(({ slug }) => ({ slug }));
}

const getSituation = cache(async (slug: string) => {
  const fallback = situations.find(situation => situation.slug === slug) ?? notFound();
  const source = await readSituationContent(slug);
  const hero = parseSituationHero(source);
  return {
    situation: { ...fallback, headline: hero.headline ?? fallback.headline, supportingCopy: hero.supportingCopy ?? fallback.supportingCopy },
    source,
  };
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { situation } = await getSituation((await params).slug);
  return { title: `${situation.headline} | Your House in Cash`, description: situation.supportingCopy };
}

export default async function SituationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { situation, source } = await getSituation((await params).slug);
  return <main><SituationHero situation={situation} /><SituationContent source={source} /><SituationFaq source={source} /><SituationFinalCta source={source} /></main>;
}
