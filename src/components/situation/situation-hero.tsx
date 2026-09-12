import Image from "next/image";
import type { Situation } from "@/data/situations";
import styles from "./situation-hero.module.css";

export function SituationHero({ situation }: { situation: Situation }) {
  return <section className={`section-spacing system-lines-bg ${styles.hero}`}>
    <div className={styles.background} aria-hidden="true" />
    <div className={styles.accents} aria-hidden="true"><span /><span /></div>
    <div className={`content-grid ${styles.layout}`}>
      <div className={styles.content}>
        <h1 className={`text-heading-2 ${styles.heading}`}>{situation.headline}</h1>
        <p className={`text-body-large ${styles.copy}`}>{situation.supportingCopy}</p>
      </div>
      <Image className={styles.image} src={situation.image} alt={situation.imageAlt}
        sizes="(min-width: 1440px) 600px, (min-width: 768px) 50vw, 100vw" priority />
    </div>
  </section>;
}
