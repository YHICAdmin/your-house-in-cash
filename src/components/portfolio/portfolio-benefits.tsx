"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Building2,
  CalendarCheck,
  Check,
  Combine,
  DoorOpen,
  FileCheck,
  ListChecks,
  MessageCircle,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./portfolio-benefits.module.css";

const portfolioBenefitCards = [
  { icon: Building2, headline: "One buyer", bullets: ["One conversation for the full portfolio", "No need to field offers property by property"] },
  { icon: FileCheck, headline: "One agreement", bullets: ["One set of terms for the package", "Clearer planning across every property"] },
  { icon: MessageCircle, headline: "One point of contact", bullets: ["A single person to work with", "Less back-and-forth between buyers"] },
  { icon: CalendarCheck, headline: "One planned closing", bullets: ["Plan dates around your timeline", "Coordinate the properties as one sale"] },
  { icon: Combine, headline: "No need to sell house by house", bullets: ["Avoid separate listings and negotiations", "Keep decisions connected across the portfolio"] },
  { icon: UsersRound, headline: "Occupied rentals can be included", bullets: ["Tenants can remain in place", "No need to wait for every lease to end"] },
  { icon: WalletCards, headline: "Keep collecting rent while you sell", bullets: ["Rental income can continue during the process", "Explore a sale without pausing operations"] },
  { icon: DoorOpen, headline: "No need to empty properties first", bullets: ["Avoid clearing out units for showings", "Evaluate properties in their current condition"] },
] as const;

const desktopMedia = "(min-width: 768px)";

export function PortfolioBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const nextMaxOffset = Math.max(0, track.scrollHeight - viewport.clientHeight);
      setMaxOffset(nextMaxOffset);
      setOffset((currentOffset) => Math.min(currentOffset, nextMaxOffset));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!window.matchMedia(desktopMedia).matches || event.ctrlKey || event.deltaY === 0) return;

      const section = sectionRef.current;
      const header = document.querySelector("header");
      if (!section) return;

      const sectionBounds = section.getBoundingClientRect();
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const sectionIsActive = sectionBounds.top <= headerBottom + 1 && sectionBounds.bottom > headerBottom;
      const movingDown = event.deltaY > 0;
      const canMoveTrack = movingDown ? offset < maxOffset : offset > 0;
      if (!sectionIsActive || !canMoveTrack) return;

      event.preventDefault();
      const movement = Math.min(Math.abs(event.deltaY), 80) * Math.sign(event.deltaY);
      setOffset((currentOffset) => Math.max(0, Math.min(maxOffset, currentOffset + movement)));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [maxOffset, offset]);

  const trackStyle = { "--benefit-track-offset": `${offset}px` } as CSSProperties;

  return (
    <section ref={sectionRef} className={`${styles.section} system-lines-bg`} aria-labelledby="simplify-heading">
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.intro}>
          <SectionLabel icon={ListChecks}>Portfolio Benefits</SectionLabel>
          <h2 id="simplify-heading" className={`${styles.heading} text-heading-2`}>
            Selling a portfolio should mean fewer moving parts.
          </h2>
          <p className={`${styles.copy} text-body-large`}>
            A portfolio sale can bring several properties into one organized process, so you can spend less time coordinating separate buyers, agreements, and closing plans.
          </p>
        </div>
        <div ref={viewportRef} className={styles.viewport} aria-label="Portfolio sale benefits">
          <ul ref={trackRef} className={styles.track} style={trackStyle}>
            {portfolioBenefitCards.map(({ icon, headline, bullets }) => (
              <li key={headline} className={styles.card}>
                <div className={styles.cardHeader}>
                  <IconContainer icon={icon} aria-hidden="true" />
                  <h3 className={`${styles.cardHeadline} text-body`}>{headline}</h3>
                </div>
                <ul className={`${styles.bullets} text-body-small`}>
                  {bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
