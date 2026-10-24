import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
import { areas, getAreaPagePath } from "@/data/areas";
import { AreaPage } from "@/components/area/area-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SituationHero } from "@/components/situation/situation-hero";
import { SituationContent } from "@/components/situation/situation-content";
import { SituationFaq } from "@/components/situation/situation-faq";
import { SituationFinalCta } from "@/components/situation/situation-final-cta";
import { cache } from "react";
import { readSituationContent, parseSituationHero } from "@/lib/situation-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...situations.map(({ slug }) => ({ slug })),
    ...areas.map(area => ({ slug: getAreaPagePath(area.slug).slice(1) })),
  ];
}

function getArea(slug: string) {
  return areas.find(area => getAreaPagePath(area.slug) === `/${slug}`);
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
  const { slug } = await params;
  const area = getArea(slug);
  if (area) {
    return {
      title: `Sell Your House Fast in ${area.city} | Your House in Cash`,
      description: `We buy houses in ${area.city} as-is, with no repairs, fees, or waiting for a traditional sale.`,
      alternates: { canonical: `/${slug}` },
    };
  }
  const { situation } = await getSituation(slug);
  return {
    title: `${situation.headline} | Your House in Cash`,
    description: situation.supportingCopy,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (area) return <AreaPage area={area} />;
  const { situation, source } = await getSituation(slug);
  return <><main><SituationHero situation={situation} /><SituationContent source={source} /><SituationFaq source={source} /><SituationFinalCta source={source} /></main><SiteFooter background="soft" /></>;
}
