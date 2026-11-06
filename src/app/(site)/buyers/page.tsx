import type { Metadata } from "next";
import { BuyersHero } from "@/components/buyers/buyers-hero";
import { BuyersFaq } from "@/components/buyers/buyers-faq";
import { BuyersListBenefits } from "@/components/buyers/buyers-list-benefits";
import { BuyersRegistration } from "@/components/buyers/buyers-registration";
import { SiteFooter } from "@/components/layout/site-footer";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Buy Investment Properties in Greater Cleveland | Your House in Cash",
  description:
    "Join the Your House in Cash buyers list to receive off-market investment opportunities in Greater Cleveland.",
  canonical: "/buyers",
  image: { url: "/images/buyers/cleveland-brick-duplex-fixer-upper.png", alt: "Cleveland brick duplex" },
});

export default function BuyersPage() {
  return (
    <>
      <main>
        <BuyersHero />
        <BuyersListBenefits />
        <BuyersRegistration />
        <BuyersFaq />
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
