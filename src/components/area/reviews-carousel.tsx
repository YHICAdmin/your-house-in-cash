"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./area-reviews.module.css";

const reviews = [
  {
    name: "Customer Name 01",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Customer Name 02",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Customer Name 03",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    name: "Customer Name 04",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    name: "Customer Name 05",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  {
    name: "Customer Name 06",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum donec ullamcorper nulla non metus.",
  },
  {
    name: "Customer Name 07",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    name: "Customer Name 08",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    name: "Customer Name 09",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Customer Name 10",
    source: "Review Source",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.",
  },
] as const;

const desktopSlotClasses = [
  styles.desktopSlotFirst,
  styles.desktopSlotSecond,
  styles.desktopSlotThird,
  styles.desktopSlotFourth,
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
          {reviews.map((review, index) => (
            <li
              key={review.name}
              className={`${styles.reviewCard} ${desktopSlotClasses[index - position] ?? ""}`}
            >
              <figure className={styles.reviewFigure}>
                <blockquote className={styles.reviewQuote}>
                  <p className={`${styles.reviewText} text-body-large`}>
                    {review.text}
                  </p>
                </blockquote>
                <figcaption className={styles.attribution}>
                  <span className={`${styles.customerName} text-body`}>
                    {review.name}
                  </span>
                </figcaption>
              </figure>
              <span className={`${styles.reviewSource} text-body-small`}>
                {review.source}
              </span>
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

      <span className={styles.visuallyHidden} role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
