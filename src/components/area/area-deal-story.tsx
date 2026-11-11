import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import type { LocalDealStory } from "@/data/areas";
import styles from "./area-deal-story.module.css";

const headingId = "local-deal-story-heading";

export function AreaDealStory({ deal }: { deal: LocalDealStory }) {
  return (
    <section className={`${styles.section} system-lines-bg`} aria-labelledby={headingId}>
      <div className={styles.angle} aria-hidden="true" />
      <div className={styles.decorations} aria-hidden="true">
        <span className={`${styles.rectangle} ${styles.rectanglePrimary}`} />
        <span className={`${styles.rectangle} ${styles.rectangleLight}`} />
        <span className={`${styles.rectangle} ${styles.rectangleDark}`} />
      </div>
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.content}>
          <SectionLabel icon={MapPin}>Local Deal Story</SectionLabel>
          <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
            {deal.title}
          </h2>
          <p className={`${styles.address} text-body-large`}>{deal.address}</p>
          <p className={`${styles.summary} text-body`}>{deal.summary}</p>
          <ul className={styles.terms}>
            {deal.terms.map((term) => (
              <li key={term}>
                <CheckCircle2 aria-hidden="true" />
                <span className="text-body">{term}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className={styles.photo}>
          <Image
            src={deal.image.src}
            alt={deal.image.alt}
            fill
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}
