import Image from "next/image";
import type { Situation } from "@/data/situations";
import styles from "./situation-hero.module.css";

export function SituationHero({ situation }: { situation: Situation }) {
  return <section className={`section-spacing system-lines-bg ${styles.hero}`}>
    <div className={styles.background} aria-hidden="true" />
    <div className={styles.accentBoundary} aria-hidden="true">
      <div className={styles.accents}><span /><span /></div>
    </div>
    <div className={`content-grid ${styles.layout}`}>
      <div className={styles.content}>
        <h1 className={`text-heading-2 ${styles.heading}`}>{situation.headline}</h1>
        <p className={`text-body-large ${styles.copy}`}>{situation.supportingCopy}</p>
      </div>
      <figure className={styles.imageFigure}>
        <Image className={styles.image} src={situation.image} alt={situation.imageAlt}
          sizes="(min-width: 1440px) 500px, (min-width: 1200px) 42vw, (min-width: 768px) 50vw, 100vw" priority />
        {situation.imageCredit && (
          <figcaption className={`${styles.imageCredit} text-body-small`}>
            <a href={situation.imageCredit.href} target="_blank" rel="noreferrer">
              {situation.imageCredit.label}
            </a>
          </figcaption>
        )}
      </figure>
    </div>
  </section>;
}
