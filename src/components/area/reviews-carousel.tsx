"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import styles from "./area-reviews.module.css";

const reviews = [
  {
    name: "Customer Name 01",
    portrait: "/images/reviewers/reviewer-01.png",
    source: "Google",
    sourceMark: "/images/review-platforms/google-g-full-color.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Customer Name 02",
    portrait: "/images/reviewers/reviewer-02.png",
    source: "Facebook",
    sourceMark: "/images/review-platforms/facebook-f-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Customer Name 03",
    portrait: "/images/reviewers/reviewer-03.png",
    source: "BBB",
    sourceMark: "/images/review-platforms/bbb-mark-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    name: "Customer Name 04",
    portrait: "/images/reviewers/reviewer-04.png",
    source: "Google",
    sourceMark: "/images/review-platforms/google-g-full-color.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    name: "Customer Name 05",
    portrait: "/images/reviewers/reviewer-01.png",
    source: "Facebook",
    sourceMark: "/images/review-platforms/facebook-f-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  {
    name: "Customer Name 06",
    portrait: "/images/reviewers/reviewer-02.png",
    source: "BBB",
    sourceMark: "/images/review-platforms/bbb-mark-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum donec ullamcorper nulla non metus.",
  },
  {
    name: "Customer Name 07",
    portrait: "/images/reviewers/reviewer-03.png",
    source: "Google",
    sourceMark: "/images/review-platforms/google-g-full-color.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    name: "Customer Name 08",
    portrait: "/images/reviewers/reviewer-04.png",
    source: "Facebook",
    sourceMark: "/images/review-platforms/facebook-f-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    name: "Customer Name 09",
    portrait: "/images/reviewers/reviewer-01.png",
    source: "BBB",
    sourceMark: "/images/review-platforms/bbb-mark-logo.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Customer Name 10",
    portrait: "/images/reviewers/reviewer-02.png",
    source: "Google",
    sourceMark: "/images/review-platforms/google-g-full-color.png",
    sourceMarkWidth: 32,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.",
  },
] as const;

type ReviewsCarouselProps = {
  headingId: string;
};

function getVisibleCount() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    return 4;
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    return 2;
  }

  return 1;
}

export function ReviewsCarousel({ headingId }: ReviewsCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [offset, setOffset] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const lastPosition = reviews.length - visibleCount;

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const syncLayout = () => {
      const nextVisibleCount = getVisibleCount();
      setVisibleCount(nextVisibleCount);
      setPosition((current) =>
        Math.min(current, reviews.length - nextVisibleCount),
      );

      const activeCard = track.children.item(position) as HTMLElement | null;
      setOffset(activeCard?.offsetLeft ?? 0);
    };

    syncLayout();

    const observer = new ResizeObserver(syncLayout);
    observer.observe(track.parentElement ?? track);

    return () => observer.disconnect();
  }, [position]);

  const moveTo = (nextPosition: number) => {
    setPosition(nextPosition);

    const first = nextPosition + 1;
    const last = nextPosition + visibleCount;
    setAnnouncement(
      visibleCount === 1
        ? `Review ${first} of ${reviews.length}`
        : `Reviews ${first}–${last} of ${reviews.length}`,
    );
  };

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-labelledby={headingId}
    >
      <div className={styles.carouselViewport}>
        <ul
          ref={trackRef}
          className={styles.carouselTrack}
          style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
        >
          {reviews.map((review) => (
            <li
              key={review.name}
              className={styles.reviewCard}
            >
              <figure className={styles.reviewFigure}>
                <div className={styles.cardTopRow}>
                  <span
                    className={styles.cardRating}
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={20}
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      />
                    ))}
                  </span>
                  <Quote
                    className={styles.quoteIcon}
                    size={20}
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <blockquote className={styles.reviewQuote}>
                  <p className={`${styles.reviewText} text-body`}>
                    {review.text}
                  </p>
                </blockquote>
                <figcaption className={styles.cardBottomRow}>
                  <span className={styles.attribution}>
                    <Image
                      className={styles.customerPortrait}
                      src={review.portrait}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <span className={`${styles.customerName} text-body`}>
                      {review.name}
                    </span>
                  </span>
                  <span className={`${styles.reviewSource} text-body-small`}>
                    <Image
                      className={styles.sourceMark}
                      src={review.sourceMark}
                      alt=""
                      width={review.sourceMarkWidth}
                      height={review.sourceMarkWidth}
                    />
                    <span className="visually-hidden">{review.source}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.carouselControls}>
        <button
          className={styles.carouselControl}
          type="button"
          aria-label="Previous reviews"
          disabled={position === 0}
          onClick={() => moveTo(position - 1)}
        >
          <ChevronLeft size={20} aria-hidden="true" focusable="false" />
        </button>
        <button
          className={styles.carouselControl}
          type="button"
          aria-label="Next reviews"
          disabled={position === lastPosition}
          onClick={() => moveTo(position + 1)}
        >
          <ChevronRight size={20} aria-hidden="true" focusable="false" />
        </button>
      </div>

      <span className="visually-hidden" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
