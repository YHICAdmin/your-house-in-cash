"use client";

import {
  type CSSProperties,
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
    image: "/images/how-it-works/step-1.png",
    title: "Tell us about your house",
  },
  {
    description:
      "We’ll review your property details and give you a fair, no-obligation cash offer.",
    image: "/images/how-it-works/step-2.png",
    title: "Get your cash offer",
  },
  {
    description:
      "Pick the closing date that works best for you, and we’ll handle the rest.",
    image: "/images/how-it-works/step-3.png",
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
  const currentStep = steps[activeStep];
  const activeTabId = `how-it-works-tab-${activeStep + 1}`;
  const panelId = "how-it-works-panel";

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
        style={
          {
            "--active-step-image": `url("${currentStep.image}")`,
          } as CSSProperties
        }
        onMouseEnter={() => setVisualHovered(true)}
        onMouseLeave={() => setVisualHovered(false)}
      >
        <div
          id={panelId}
          className={styles.panel}
          role="tabpanel"
          aria-labelledby={activeTabId}
          tabIndex={0}
        >
          <div key={currentStep.title} className={styles.stepContent}>
            <span className={`${styles.stepIdentification} text-label`}>
              Step {activeStep + 1}
            </span>
            <h3 className={`${styles.stepTitle} text-heading-3`}>
              {currentStep.title}
            </h3>
            <p className={`${styles.stepDescription} text-body-large`}>
              {currentStep.description}
            </p>
          </div>
        </div>

        <div className={styles.progressIndicators}>
          {steps.map((step, index) => (
            <button
              key={step.title}
              className={`${styles.progressMark}${index === activeStep ? ` ${styles.activeProgressMark}` : ""}`}
              type="button"
              aria-label={`Show Step ${index + 1}`}
              aria-pressed={index === activeStep}
              onClick={() => selectStep(index)}
            />
          ))}
        </div>
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
              className={`${styles.selector}${isActive ? ` ${styles.activeSelector}` : ""} text-button`}
              type="button"
              role="tab"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectStep(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span>Step {index + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
