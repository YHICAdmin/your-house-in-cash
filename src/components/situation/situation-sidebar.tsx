"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./situation-content.module.css";

export function SituationSidebar({ headings }: { headings: { id: string; label: string }[] }) {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>();
  const [fits, setFits] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const article = document.getElementById("situation-article");
    const header = document.querySelector("header");
    if (!nav || !article || !header) return;
    const targets = headings.map(({ id }) => document.getElementById(id)!);
    let frame = 0;
    const update = () => {
      frame = 0;
      const gap = parseFloat(getComputedStyle(nav).getPropertyValue("--spacing-m")) * parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offset = header.getBoundingClientRect().height + gap;
      nav.style.setProperty("--sidebar-top", `${offset}px`);
      setFits(nav.offsetHeight <= window.innerHeight - offset - gap);
      let current: string | undefined;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= offset + 1) current = target.id;
      }
      // Keep the final topic reachable even when its heading cannot reach the top.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) current = headings.at(-1)?.id;
      setActiveId(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    [nav, article, header, document.documentElement].forEach(element => observer.observe(element));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [headings]);

  return (
    <nav ref={navRef} className={`text-body-small ${styles.sidebar}`} data-sticky={fits} aria-label="Article topics">
      <p className={`${styles.sidebarLabel} text-label`}>On this page</p>
      <ul>
        {headings.map(({ id, label }) => (
          <li key={id}><a href={`#${id}`} aria-current={activeId === id ? "location" : undefined}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
