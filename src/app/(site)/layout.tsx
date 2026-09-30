import { SiteHeader } from "@/components/layout/site-header";
import { ScrollJourneyTracker } from "@/components/layout/scroll-journey-tracker";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <ScrollJourneyTracker />
      <SiteHeader />
      <div id="site-content">{children}</div>
    </div>
  );
}
