import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Check,
  Combine,
  DoorOpen,
  FileCheck,
  Layers,
  MessageCircle,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./page.module.css";

const portfolioBenefitCards = [
  { icon: Building2, headline: "One buyer", bullets: ["One conversation for the full portfolio", "No need to field offers property by property"] },
  { icon: FileCheck, headline: "One agreement", bullets: ["One set of terms for the package", "Clearer planning across every property"] },
  { icon: MessageCircle, headline: "One point of contact", bullets: ["A single person to work with", "Less back-and-forth between buyers"] },
  { icon: CalendarCheck, headline: "One planned closing", bullets: ["Plan dates around your timeline", "Coordinate the properties as one sale"] },
  { icon: Combine, headline: "No need to sell house by house", bullets: ["Avoid separate listings and negotiations", "Keep decisions connected across the portfolio"] },
  { icon: UsersRound, headline: "Occupied rentals can be included", bullets: ["Tenants can remain in place", "No need to wait for every lease to end"] },
  { icon: WalletCards, headline: "Keep collecting rent while you sell", bullets: ["Rental income can continue during the process", "Explore a sale without pausing operations"] },
  { icon: DoorOpen, headline: "No need to empty properties first", bullets: ["Avoid clearing out units for showings", "Evaluate properties in their current condition"] },
] as const;

export const metadata: Metadata = {
  title: "Sell a Portfolio | Your House in Cash",
  description: "Sell your Cleveland rental portfolio in one coordinated transaction with Your House in Cash.",
};

export default function SellPropertyPortfolioPage() {
  return (
    <>
      <main>
        <section className={`${styles.hero} section-spacing system-lines-bg`} aria-labelledby="portfolio-hero-heading">
          <div className={styles.background} aria-hidden="true" />
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.content}>
              <SectionLabel icon={Layers}>Sell a Portfolio</SectionLabel>
              <h1 id="portfolio-hero-heading" className={`${styles.heading} text-display`}>
                Sell your Cleveland rental portfolio in one transaction.
              </h1>
              <p className={`${styles.supportingCopy} text-body-large`}>
                Whether you own three properties or twenty, we can evaluate the portfolio as a whole and coordinate a direct, practical path to sell—without managing a separate buyer and process for every house.
              </p>
              <div className={styles.ctaGroup}>
                <Button href="/get-cash-offer" variant="conversion">Tell Us About Your Portfolio</Button>
                <p className={`${styles.microcopy} text-body-small`}>100% free. No obligation.</p>
              </div>
            </div>

            <div className={styles.media} aria-hidden="true">
              <div className={styles.gallery}>
                <div className={`${styles.imageFrame} ${styles.upperLeft}`}>
                  <Image
                    src="/images/portfolio-hero/single-family-rental.png"
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 21vw, (min-width: 768px) 42vw, 100vw"
                    priority
                  />
                </div>
                <div className={`${styles.imageFrame} ${styles.upperRight}`}>
                  <Image
                    src="/images/portfolio-hero/cleveland-duplex.png"
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 19vw, (min-width: 768px) 38vw, 100vw"
                    priority
                  />
                </div>
                <div className={`${styles.imageFrame} ${styles.lower}`}>
                  <Image
                    src="/images/portfolio-hero/portfolio-street.png"
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 26vw, (min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.simplify} section-spacing system-lines-bg`} aria-labelledby="simplify-heading">
          <div className={`${styles.simplifyLayout} content-grid`}>
            <div className={styles.simplifyIntro}>
              <SectionLabel>Portfolio Benefits</SectionLabel>
              <h2 id="simplify-heading" className={`${styles.simplifyHeading} text-heading-2`}>
                Selling a portfolio should mean fewer moving parts.
              </h2>
              <p className={`${styles.simplifyCopy} text-body-large`}>
                A portfolio sale can bring several properties into one organized process, so you can spend less time coordinating separate buyers, agreements, and closing plans.
              </p>
            </div>
            <div className={styles.benefitRail} tabIndex={0} aria-label="Portfolio sale benefits">
              <ul className={styles.benefitCards}>
                {portfolioBenefitCards.map(({ icon, headline, bullets }) => (
                  <li key={headline} className={styles.benefitCard}>
                    <div className={styles.benefitCardHeader}>
                      <IconContainer icon={icon} aria-hidden="true" />
                      <h3 className={`${styles.benefitHeadline} text-heading-4`}>{headline}</h3>
                    </div>
                    <ul className={`${styles.benefitBullets} text-body-small`}>
                      {bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
