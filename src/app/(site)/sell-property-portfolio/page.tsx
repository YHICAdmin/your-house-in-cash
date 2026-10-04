import type { Metadata } from "next";
import Image from "next/image";
import { Layers } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { PortfolioBenefits } from "@/components/portfolio/portfolio-benefits";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./page.module.css";

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

        <PortfolioBenefits />
      </main>
      <SiteFooter />
    </>
  );
}
