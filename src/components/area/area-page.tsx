import { AreaIntroTransition } from "@/components/area/area-intro-transition";
import { AreaHero } from "@/components/area/area-hero";
import { AreaFaq } from "@/components/area/area-faq";
import { AreaFinalCta } from "@/components/area/area-final-cta";
import {
  AreaHowItWorks,
  type AreaHowItWorksContent,
} from "@/components/area/area-how-it-works";
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
  return (
    <>
      <main>
        <AreaIntroTransition hero={<AreaHero city={area.city} />}>
          <AreaSituations />
        </AreaIntroTransition>
        <AreaHowItWorks content={howItWorksContent} />
        <AreaLocal area={area} />
        <AreaFaq />
        <AreaFinalCta areaName={area.city} />
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
