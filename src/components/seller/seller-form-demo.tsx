"use client";

import { useRef, useState } from "react";
import { SellerDetails, type SellerValues } from "./seller-details";
import { PropertyDetails, type PropertyAnswers } from "./property-details";
import { SellerSuccess } from "./seller-success";
import { Progress } from "./progress";
import styles from "./seller-form.module.css";

export function SellerFormDemo() {
  const [step, setStep] = useState<1 | 2 | "success">(1);
  const [details, setDetails] = useState<SellerValues>();
  const [answers, setAnswers] = useState<PropertyAnswers>({ condition: [], occupancy: [], reasons: [], timeline: [], notes: "" });
  const content = useRef<HTMLDivElement>(null);
  const transitioning = useRef(false);

  async function move(next: 1 | 2 | "success") {
    const element = content.current;
    if (!element || transitioning.current) return;
    transitioning.current = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const direction = next === 1 ? -1 : 1;
    if (!reduced && next !== "success") {
      await element.animate([
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: `translateX(${-direction * 16}px)` },
      ], { duration: 100, easing: "ease-out" }).finished;
    }
    setStep(next);
    requestAnimationFrame(() => {
      const incoming = next === "success"
        ? [{ opacity: 0 }, { opacity: 1 }]
        : [{ opacity: 0, transform: `translateX(${direction * 16}px)` }, { opacity: 1, transform: "translateX(0)" }];
      const done = () => {
        element.querySelector<HTMLHeadingElement>("h1")?.focus();
        transitioning.current = false;
      };
      if (reduced) done();
      else element.animate(incoming, { duration: next === "success" ? 200 : 100, easing: "ease-out" }).finished.then(done);
    });
  }

  return <>
    <p className={`text-body-small ${styles.demoNotice}`}>Demo mode — details are not sent or saved. Refresh to reset.</p>
    {step === 2 && <Progress step={2} />}
    <div ref={content}>
      {step === 1 && <SellerDetails initialValues={details} onDemoContinue={values => {
        setDetails(values);
        void move(2);
      }} />}
      {step === 2 && <PropertyDetails name={details?.name} answers={answers} onChange={setAnswers}
        onBack={() => { void move(1); }} onSubmit={() => { void move("success"); }} onSkip={() => { void move("success"); }} />}
      {step === "success" && <SellerSuccess name={details?.name ?? ""} />}
    </div>
  </>;
}
