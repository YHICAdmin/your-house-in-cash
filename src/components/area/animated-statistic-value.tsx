"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./area-local.module.css";

const statisticsAnimationContext = createContext({
  hasEntered: false,
  isPrepared: false,
});

type StatisticsAnimationProps = {
  children: ReactNode;
};

type AnimatedStatisticValueProps = {
  value: string;
};

const numberFormatter = new Intl.NumberFormat("en-US");
const valuePartsPattern = /^(.*?)(\d[\d,]*)(.*)$/;
const animationDuration = 2500;

function splitValue(value: string) {
  const match = value.match(valuePartsPattern);

  if (!match) {
    return { prefix: "", number: 0, suffix: value };
  }

  return {
    prefix: match[1],
    number: Number(match[2].replaceAll(",", "")),
    suffix: match[3],
  };
}

export function StatisticsAnimation({ children }: StatisticsAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasEntered) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    const prepareObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsPrepared(true);
        prepareObserver.disconnect();
      },
      { rootMargin: "0px 0px 200px" },
    );
    const entryObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEntered(true);
        entryObserver.disconnect();
      },
      { threshold: 0 },
    );

    prepareObserver.observe(section);
    entryObserver.observe(section);
    return () => {
      prepareObserver.disconnect();
      entryObserver.disconnect();
    };
  }, [hasEntered]);

  return (
    <statisticsAnimationContext.Provider value={{ hasEntered, isPrepared }}>
      <div ref={sectionRef} className={styles.statisticColumns}>
        {children}
      </div>
    </statisticsAnimationContext.Provider>
  );
}

export function AnimatedStatisticValue({ value }: AnimatedStatisticValueProps) {
  const { hasEntered, isPrepared } = useContext(statisticsAnimationContext);
  const { prefix, number, suffix } = splitValue(value);
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    if (!hasEntered) return;

    let animationFrame: number | undefined;
    let startTime: number | undefined;

    const animate = (time: number) => {
      startTime ??= time;
      const progress = Math.min((time - startTime) / animationDuration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplayedNumber(Math.round(number * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasEntered, number]);

  return (
    <span aria-label={value}>
      <span aria-hidden="true">
        {prefix}
        {numberFormatter.format(isPrepared ? displayedNumber : number)}
        {suffix}
      </span>
    </span>
  );
}
