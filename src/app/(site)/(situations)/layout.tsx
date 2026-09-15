import { SiteFooter } from "@/components/layout/site-footer";

export default function SituationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<SiteFooter background="soft" /></>;
}
