import { AreaIntroTransition } from "@/components/area/area-intro-transition";
import { AreaHero } from "@/components/area/area-hero";

export default function Home() {
  return (
    <main>
      <AreaIntroTransition hero={<AreaHero city="Cleveland" />} />
    </main>
  );
}
