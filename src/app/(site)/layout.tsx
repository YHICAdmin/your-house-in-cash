import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><div id="site-content">{children}</div></>;
}
