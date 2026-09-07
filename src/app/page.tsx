import { AreaIntroTransition } from "@/components/area/area-intro-transition";
import { AreaHero } from "@/components/area/area-hero";
import { AreaHowItWorks } from "@/components/area/area-how-it-works";
import { AreaLocal } from "@/components/area/area-local";
import { AreaReviews } from "@/components/area/area-reviews";
import { AreaSituations } from "@/components/area/area-situations";
import { clevelandArea } from "@/data/areas";

export default function Home() {
  return (
    <main>
      <AreaIntroTransition hero={<AreaHero city="Cleveland" />}>
        <AreaSituations />
      </AreaIntroTransition>
      <AreaReviews />
      <AreaHowItWorks />
      <AreaLocal area={clevelandArea} />
    </main>
  );
}
