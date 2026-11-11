import { AreaIntroTransition } from "@/components/area/area-intro-transition";
import { AreaHero } from "@/components/area/area-hero";
import { AreaFaq } from "@/components/area/area-faq";
import { AreaFinalCta } from "@/components/area/area-final-cta";
import {
  AreaHowItWorks,
  type AreaHowItWorksContent,
} from "@/components/area/area-how-it-works";
import { AreaDealStory } from "@/components/area/area-deal-story";
import { AreaLocal } from "@/components/area/area-local";
import { AreaSituations } from "@/components/area/area-situations";
import { SiteFooter } from "@/components/layout/site-footer";
import type { AreaPageData } from "@/data/areas";

export function AreaPage({
  area,
  howItWorksContent,
}: {
  area: AreaPageData;
  howItWorksContent?: AreaHowItWorksContent;
}) {
  const hasLocalDealStory = Boolean(area.dealStory);

  return (
    <>
      <main>
        <AreaIntroTransition hero={<AreaHero city={area.city} />}>
          <AreaHowItWorks content={howItWorksContent} />
        </AreaIntroTransition>
        {area.dealStory && <AreaDealStory deal={area.dealStory} />}
        <AreaSituations background={hasLocalDealStory ? "default" : "soft"} />
        <AreaLocal area={area} background={hasLocalDealStory ? "soft" : "default"} />
        <AreaFaq background={hasLocalDealStory ? "default" : "soft"} />
        <AreaFinalCta areaName={area.city} background={hasLocalDealStory ? "soft" : "default"} />
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
