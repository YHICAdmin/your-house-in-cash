"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./area-local.module.css";

type LocalMapProps = {
  areaName: string;
  embedUrl: string;
};

export function LocalMap({ areaName, embedUrl }: LocalMapProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || shouldLoad) return;

    const Observer = window.IntersectionObserver as typeof IntersectionObserver | undefined;
    if (!Observer) {
      const frameId = window.requestAnimationFrame(() => setShouldLoad(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new Observer(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px 600px" },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={frameRef}>
      {shouldLoad ? (
        <iframe
          className={styles.mapCanvas}
          src={embedUrl}
          title={`Interactive map of ${areaName}`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : <div className={styles.mapCanvas} aria-hidden="true" />}
      <noscript>
        <iframe
          className={styles.mapCanvas}
          src={embedUrl}
          title={`Interactive map of ${areaName}`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </noscript>
    </div>
  );
}
