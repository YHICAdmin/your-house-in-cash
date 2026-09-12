import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><div id="site-content">{children}<SiteFooter /></div></>;
}
