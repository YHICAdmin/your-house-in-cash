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
  { icon: Building2, headline: "Sell the whole package", bullets: ["From a few properties to a larger portfolio", "Review the opportunity as one sale"] },
  { icon: FileCheck, headline: "One buyer, one agreement", bullets: ["One direct point of contact", "One coordinated purchase agreement"] },
  { icon: CalendarCheck, headline: "One planned closing", bullets: ["Work toward a clear closing timeline", "Coordinate the portfolio together"] },
  { icon: MessageCircle, headline: "Less back-and-forth", bullets: ["Avoid separate buyer conversations", "Avoid negotiating every house individually"] },
  { icon: UsersRound, headline: "Occupied rentals considered", bullets: ["Tenanted properties can be included", "Discuss leases and access upfront"] },
  { icon: WalletCards, headline: "Keep collecting rent", bullets: ["Continue operating during the process", "Avoid rushing vacant units to market"] },
  { icon: Combine, headline: "Sell properties as they are", bullets: ["No renovation plan before reaching out", "Condition is reviewed property by property"] },
  { icon: DoorOpen, headline: "No need to clear out first", bullets: ["Do not empty every unit to start", "Discuss contents and access as part of the plan"] },
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
