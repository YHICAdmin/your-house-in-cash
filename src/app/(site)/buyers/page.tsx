import type { Metadata } from "next";
import { BuyersHero } from "@/components/buyers/buyers-hero";
import { BuyersListBenefits } from "@/components/buyers/buyers-list-benefits";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Buy Investment Properties in Greater Cleveland | Your House in Cash",
  description:
    "Join the Your House in Cash buyers list to receive off-market investment opportunities in Greater Cleveland.",
  alternates: { canonical: "/buyers" },
};

export default function BuyersPage() {
  return (
    <>
      <main>
        <BuyersHero />
        <BuyersListBenefits />
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
