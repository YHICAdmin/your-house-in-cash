import Image from "next/image";
import {
  BadgeDollarSign,
  CalendarCheck,
  House,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./area-hero.module.css";

type AreaHeroProps = {
  city: string;
};

const benefits = [
  { icon: House, label: "Sell As-Is" },
  { icon: BadgeDollarSign, label: "No Fees" },
  { icon: CalendarCheck, label: "Choose Your Closing Date" },
];

export function AreaHero({ city }: AreaHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="area-hero-heading">
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <SectionLabel icon={MapPin}>{`${city}, Ohio`}</SectionLabel>
          <h1 id="area-hero-heading" className={`${styles.heading} text-display`}>
            Sell Your House Fast in{" "}
            <span className={styles.location}>
              <span className={styles.city}>{city}</span>, Ohio
            </span>
          </h1>
          <p className={`${styles.supportingCopy} text-body-large`}>
            We buy houses in {city} as-is, with no repairs, fees, or waiting for a
            traditional sale.
          </p>
          <div className={styles.ctaGroup}>
            <Button className={styles.heroCta} href="/get-cash-offer">
              Get My Cash Offer
            </Button>
            <p className={`${styles.microcopy} text-body-small`}>
              100% free. No obligation.
            </p>
          </div>
          <ul className={styles.benefits}>
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="text-body-small">
                <Icon aria-hidden="true" size={20} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <div className={styles.upperImages}>
            <div className={`${styles.imageFrame} ${styles.leftImage}`}>
              <Image
                src="/images/area-hero/local-left.webp"
                alt=""
                fill
                sizes="(min-width: 1200px) 29vw, 55vw"
                priority
              />
            </div>
            <div className={`${styles.imageFrame} ${styles.rightImage}`}>
              <Image
                src="/images/area-hero/local-right.webp"
                alt=""
                fill
                sizes="(min-width: 1200px) 17vw, 32vw"
                priority
              />
            </div>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.identityRow}>
              <Image
                className={styles.portrait}
                src="/images/local-trust-portrait.webp"
                alt=""
                width={48}
                height={48}
              />
              <div className={styles.identityText}>
                <p className={`${styles.trustHeadline} text-heading-3`}>
                  Local. Reliable.
                  <br />
                  Cleveland’s Neighbor.
                </p>
                <p className={`${styles.trustSupporting} text-body-small`}>
                  We’re a local Cleveland company you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
