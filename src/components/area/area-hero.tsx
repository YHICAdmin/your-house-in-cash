import Image from "next/image";
import {
  BadgeDollarSign,
  CalendarCheck,
  House,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
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
    <section
      className={`${styles.hero} section-spacing`}
      aria-labelledby="area-hero-heading"
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <SectionLabel icon={MapPin}>{`${city}, Ohio`}</SectionLabel>
          <h1 id="area-hero-heading" className={`${styles.heading} text-display`}>
            Sell Your House Fast in{" "}
            <span className={styles.city}>{city}, Ohio</span>
          </h1>
          <p className={`${styles.supportingCopy} text-body-large`}>
            We buy houses in {city}, Ohio and across Greater Cleveland as-is, with
            no repairs, fees, or waiting for a traditional sale.
          </p>
          <div className={styles.ctaGroup}>
            <Button href="/get-cash-offer" variant="conversion">
              Get My Cash Offer
            </Button>
            <p className={`${styles.microcopy} text-body-small`}>
              100% free. No obligation.
            </p>
          </div>
          <ul className={styles.benefits}>
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="text-body-small">
                <IconContainer icon={Icon} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <div className={styles.imageMosaic}>
            <div className={`${styles.imageFrame} ${styles.leftImage}`}>
              <Image
                src="/images/area-hero/local-left.png"
                alt=""
                fill
                sizes="(min-width: 1200px) 29vw, 55vw"
                priority
              />
            </div>
            <div className={styles.rightImages}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/area-hero/local-right.png"
                  alt=""
                  fill
                  sizes="(min-width: 1200px) 17vw, 32vw"
                  priority
                />
              </div>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/area-hero/local-bottom.png"
                  alt=""
                  fill
                  sizes="(min-width: 1200px) 17vw, 32vw"
                  priority
                />
              </div>
            </div>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.identityRow}>
              <Image
                className={styles.portrait}
                src="/images/area-hero/local-trust-portrait.png"
                alt=""
                width={125}
                height={125}
              />
              <div className={styles.identityText}>
                <p className={`${styles.trustHeadline} text-heading-3`}>
                  Noah Lubko
                </p>
                <p className="text-body">
                  Local Cleveland Home Buyer
                </p>
                <p className={`${styles.trustSupporting} text-body`}>
                  Deal directly with a local buyer from offer to closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
