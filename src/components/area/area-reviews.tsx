import { ShieldCheck, Star } from "lucide-react";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import { ReviewsCarousel } from "./reviews-carousel";
import styles from "./area-reviews.module.css";

const headingId = "reviews-heading";
const rating = 4.9;
const reviewCount = 127;

function GoogleRating() {
  return (
    <p className={styles.googleRating}>
      <span className="visually-hidden">
        Google rating: {rating} out of 5 based on {reviewCount} reviews.
      </span>
      <span className={styles.ratingVisual} aria-hidden="true">
        <span className={styles.ratingPrimary}>
          <span className="text-body-small">Google</span>
          <span className="text-body-large">{rating}</span>
          <span className={styles.stars}>
            {Array.from({ length: 5 }, (_, index) => {
              const fill = Math.min(Math.max(rating - index, 0), 1) * 100;
              const gradientId = `reviews-rating-star-${index}`;

              return (
                <Star
                  key={gradientId}
                  size={20}
                  stroke="var(--color-border)"
                  fill={`url(#${gradientId})`}
                >
                  <defs>
                    <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
                      <stop offset={`${fill}%`} stopColor="var(--color-brand-dark)" />
                      <stop offset={`${fill}%`} stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </Star>
              );
            })}
          </span>
        </span>
        <span className={`${styles.reviewCount} text-body-small`}>
          ({reviewCount} reviews)
        </span>
      </span>
    </p>
  );
}

export function AreaReviews() {
  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.sectionLabel}>
          <SectionLabel icon={Star}>Customer Reviews</SectionLabel>
        </div>

        <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
          What local homeowners say
        </h2>

        <p className={`${styles.supportingCopy} text-body-large`}>
          Read what local homeowners have shared about their experience working
          with us.
        </p>

        <GoogleRating />
        <ReviewsCarousel headingId={headingId} />

        <div className={styles.footer}>
          <div className={styles.trustGroup}>
            <IconContainer icon={ShieldCheck} aria-hidden="true" />
            <span className={`${styles.trustMessage} text-body-small`}>
              Real people. Real experiences. Real results.
            </span>
          </div>

          <span className={styles.divider} aria-hidden="true" />

          <TextLink href="https://www.google.com/">
            See more reviews on Google
          </TextLink>
        </div>
      </div>
    </section>
  );
}
