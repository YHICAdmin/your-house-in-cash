"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Cog } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./area-how-it-works.module.css";

const headingId = "how-it-works-heading";
const stepPanelId = "how-it-works-step-content";

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your House",
    body: "Tell us about your property and situation. No repairs or preparation are needed.",
    illustration: "/images/how-it-works/property-form.svg",
  },
  {
    number: "02",
    title: "Get Your Cash Offer",
    body: "We’ll review the details and present a fair cash offer with no fees or obligation.",
    illustration: "/images/how-it-works/cash-offer.svg",
  },
  {
    number: "03",
    title: "Choose Your Closing Date",
    body: "Choose the closing date that works for you, and we’ll handle the remaining details.",
    illustration: "/images/how-it-works/closing-calendar.svg",
  },
] as const;

type ProcessStepProps = {
  step: (typeof processSteps)[number];
  active?: boolean;
  interactive?: boolean;
  onSelect?: () => void;
};

function ProcessStep({
  step,
  active = false,
  interactive = false,
  onSelect,
}: ProcessStepProps) {
  const content = (
    <>
      <span
        className={styles.stepNumber + " text-heading-4"}
        aria-hidden="true"
      >
        {step.number}
      </span>
      <span className={styles.stepTextFlow}>
        <span className={styles.activeIndicator} aria-hidden="true" />
        <span className={styles.stepTitle} role="heading" aria-level={3}>
          {step.title}
        </span>
        <span className={styles.stepBody + " text-body"}>
          {step.body}
        </span>
      </span>
    </>
  );

  if (!interactive) {
    return <div className={styles.staticStep}>{content}</div>;
  }

  return (
    <button
      className={styles.stepButton}
      id={"how-it-works-step-" + step.number}
      type="button"
      aria-controls={stepPanelId}
      aria-pressed={active}
      onClick={onSelect}
    >
      {content}
    </button>
  );
}

function StepIllustration({
  src,
  active = true,
}: {
  src: string;
  active?: boolean;
}) {
  return (
    <Image
      className={
        active
          ? styles.illustration + " " + styles.illustrationActive
          : styles.illustration
      }
      src={src}
      alt=""
      fill
      sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
    />
  );
}

export function AreaHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [manualSelection, setManualSelection] = useState(false);
  const [pointerInside, setPointerInside] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [desktopComposition, setDesktopComposition] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreferences = () => {
      setDesktopComposition(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    syncPreferences();
    desktopQuery.addEventListener("change", syncPreferences);
    motionQuery.addEventListener("change", syncPreferences);

    return () => {
      desktopQuery.removeEventListener("change", syncPreferences);
      motionQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setDocumentVisible(document.visibilityState === "visible");
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (
      !desktopComposition ||
      reducedMotion ||
      manualSelection ||
      pointerInside ||
      focusInside ||
      !documentVisible
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % processSteps.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [
    desktopComposition,
    documentVisible,
    focusInside,
    manualSelection,
    pointerInside,
    reducedMotion,
  ]);

  const selectStep = (index: number) => {
    setActiveStep(index);
    setManualSelection(true);
  };

  return (
    <section
      className="section-spacing system-lines-bg"
      aria-labelledby={headingId}
    >
      <div className={styles.layout + " content-grid"}>
        <div className={styles.intro}>
          <SectionLabel icon={Cog}>How It Works</SectionLabel>
          <h2 id={headingId} className={styles.heading + " text-heading-2"}>
            Selling your house can be simple.
          </h2>
          <p
            className={styles.supportingCopy + " text-body-large"}
          >
            See how easy it is to sell your house for cash in just three simple
            steps.
          </p>
        </div>

        <div
          className={styles.desktopProcessComposition}
          onPointerEnter={() => setPointerInside(true)}
          onPointerLeave={() => setPointerInside(false)}
          onFocusCapture={() => setFocusInside(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocusInside(false);
            }
          }}
        >
          <ol className={styles.desktopStepList}>
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <ProcessStep
                  step={step}
                  active={activeStep === index}
                  interactive
                  onSelect={() => selectStep(index)}
                />
              </li>
            ))}
          </ol>

          <div
            id={stepPanelId}
            className={styles.desktopIllustrationStage}
            aria-labelledby={
              "how-it-works-step-" + processSteps[activeStep].number
            }
          >
            {processSteps.map((step, index) => (
              <StepIllustration
                key={step.illustration}
                src={step.illustration}
                active={activeStep === index}
              />
            ))}
          </div>
        </div>

        <ol className={styles.mobileProcessList}>
          {processSteps.map((step) => (
            <li key={step.title} className={styles.mobileStepGroup}>
              <ProcessStep step={step} />
              <div className={styles.mobileIllustrationStage}>
                <StepIllustration src={step.illustration} />
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
