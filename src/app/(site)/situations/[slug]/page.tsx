import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
import { SituationHero } from "@/components/situation/situation-hero";
import { SituationContent } from "@/components/situation/situation-content";
import { SituationFaq } from "@/components/situation/situation-faq";
import { SituationFinalCta } from "@/components/situation/situation-final-cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return situations.map(({ slug }) => ({ slug }));
}

function getSituation(slug: string) {
  return situations.find(situation => situation.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const situation = getSituation((await params).slug);
  return { title: `${situation.headline} | Your House in Cash`, description: situation.supportingCopy };
}

export default async function SituationPage({ params }: { params: Promise<{ slug: string }> }) {
  const situation = getSituation((await params).slug);
  return <main><SituationHero situation={situation} /><SituationContent slug={situation.slug} /><SituationFaq slug={situation.slug} /><SituationFinalCta slug={situation.slug} /></main>;
}
