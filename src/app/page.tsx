import { AreaIntroTransition } from "@/components/area/area-intro-transition";
import { AreaHero } from "@/components/area/area-hero";
import { AreaReviews } from "@/components/area/area-reviews";
import { AreaSituations } from "@/components/area/area-situations";

export default function Home() {
  return (
    <main>
      <AreaIntroTransition hero={<AreaHero city="Cleveland" />}>
        <AreaSituations />
      </AreaIntroTransition>
      <AreaReviews />
    </main>
  );
}
