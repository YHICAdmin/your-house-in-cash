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
            Sell Your House Fast in <span className={styles.city}>{city}</span>, Ohio
          </h1>
          <p className={`${styles.supportingCopy} text-body-large`}>
            We buy houses in {city} as-is, with no repairs, fees, or waiting for a
            traditional sale.
          </p>
          <Button href="/get-cash-offer">Get My Cash Offer</Button>
          <p className={`${styles.microcopy} text-body-small`}>
            100% free. No obligation.
          </p>
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
            <Image
              className={styles.portrait}
              src="/images/local-trust-portrait.webp"
              alt=""
              width={48}
              height={48}
            />
            <div className={styles.trustText}>
              <p className={styles.name}>Noah Lubko</p>
              <p className={`${styles.title} text-caption`}>Founder &amp; Home Buyer</p>
              <p className={`${styles.message} text-body-small`}>
                I’ll personally review your property and guide you through the
                process—no pressure, no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
