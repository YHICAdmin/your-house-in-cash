"use client";

import Image from "next/image";
import {
  type FocusEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./area-how-it-works.module.css";

const AUTOPLAY_INTERVAL = 6_000;

const steps = [
  {
    description:
      "Share a few basic details about your property and your situation.",
    image: "/images/how-it-works/step-1-temporary.png",
    title: "Tell us about your house",
  },
  {
    description:
      "We’ll review your property details and give you a fair, no-obligation cash offer.",
    image: "/images/how-it-works/step-2-temporary.png",
    title: "Get your cash offer",
  },
  {
    description:
      "Pick the closing date that works best for you, and we’ll handle the rest.",
    image: "/images/how-it-works/step-3-temporary.png",
    title: "Choose your closing date",
  },
] as const;

type InteractiveProcessProps = {
  headingId: string;
};

export function InteractiveProcess({ headingId }: InteractiveProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplayStopped, setAutoplayStopped] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [visualHovered, setVisualHovered] = useState(false);
  const [selectorsHovered, setSelectorsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const paused = focusWithin || visualHovered || selectorsHovered;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (autoplayStopped || paused || reducedMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveStep((currentStep) => (currentStep + 1) % steps.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearTimeout(timeout);
  }, [activeStep, autoplayStopped, paused, reducedMotion]);

  const selectStep = (index: number) => {
    setAutoplayStopped(true);
    setActiveStep(index);
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + steps.length) % steps.length;

    selectStep(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocusWithin(false);
    }
  };

  return (
    <div
      className={styles.process}
      onBlurCapture={handleBlur}
      onFocusCapture={() => setFocusWithin(true)}
    >
      <div
        className={styles.visual}
        onMouseEnter={() => setVisualHovered(true)}
        onMouseLeave={() => setVisualHovered(false)}
      >
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const tabId = `how-it-works-tab-${index + 1}`;
          const panelId = `how-it-works-panel-${index + 1}`;

          return (
            <div
              key={step.title}
              id={panelId}
              className={`${styles.panel}${isActive ? ` ${styles.activePanel}` : ""}`}
              role="tabpanel"
              aria-hidden={!isActive}
              aria-labelledby={tabId}
              tabIndex={isActive ? 0 : -1}
            >
              <Image
                className={styles.stepImage}
                src={step.image}
                alt=""
                fill
                sizes="(min-width: 1200px) 1216px, calc(100vw - 32px)"
              />
              <span className={styles.overlay} aria-hidden="true" />
              <div className={styles.stepContent}>
                <span className={`${styles.stepIdentification} text-label`}>
                  Step {index + 1}
                </span>
                <h3 className={`${styles.stepTitle} text-heading-3`}>
                  {step.title}
                </h3>
                <p className={`${styles.stepDescription} text-body-large`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={styles.selectors}
        role="tablist"
        aria-labelledby={headingId}
        onMouseEnter={() => setSelectorsHovered(true)}
        onMouseLeave={() => setSelectorsHovered(false)}
      >
        {steps.map((step, index) => {
          const isActive = index === activeStep;

          return (
            <button
              key={step.title}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`how-it-works-tab-${index + 1}`}
              className={`${styles.selector}${isActive ? ` ${styles.activeSelector}` : ""} text-body`}
              type="button"
              role="tab"
              aria-controls={`how-it-works-panel-${index + 1}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectStep(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              Step {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
