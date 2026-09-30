"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-journey-tracker.module.css";

export interface ScrollJourneyTrackerProps {
  enabled?: boolean;
}

function getScrollProgress() {
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollRange <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round((window.scrollY / scrollRange) * 100)));
}

export function ScrollJourneyTracker({ enabled = true }: ScrollJourneyTrackerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let animationFrame: number | undefined;
    const updateProgress = () => setProgress(getScrollProgress());
    const scheduleUpdate = () => {
      if (animationFrame !== undefined) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = undefined;
        updateProgress();
      });
    };
    const resizeObserver = new ResizeObserver(scheduleUpdate);

    updateProgress();
    resizeObserver.observe(document.documentElement);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className={`scroll-journey-tracker ${styles.tracker}`}>
      <div
        aria-label="Page scroll progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        className={styles.progress}
        role="progressbar"
      >
        <div className={styles.fill} style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}
