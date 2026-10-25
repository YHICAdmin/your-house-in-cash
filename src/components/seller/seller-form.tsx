"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { SellerDetails, type SellerValues } from "./seller-details";
import { SellerSuccess } from "./seller-success";
import { trackAnalyticsEvent } from "@/lib/analytics";

async function save(url: string, method: string, body: unknown, submissionKey?: string) { const r = await fetch(url, { method, headers: { "Content-Type": "application/json", ...(submissionKey ? { "Idempotency-Key": submissionKey } : {}) }, body: JSON.stringify(body) }); if (!r.ok) throw new Error(); return r.json() as Promise<{ leadId: string; created: boolean }>; }
export function SellerForm() {
  const [details, setDetails] = useState<SellerValues>(); const [step, setStep] = useState<1|2>(1);
  const submissionKey = useRef<string | null>(null);
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [step]);
  if (step === 2) return <SellerSuccess name={details?.name ?? ""} email={details?.email ?? ""} />;
  return <SellerDetails initialValues={details} onSave={async values => {
    const key = getSubmissionKey();
    const result = await save("/api/leads", "POST", values, key);
    if (result.created) trackAnalyticsEvent("generate_lead");
    if (key) window.sessionStorage.removeItem("cash-offer-submission-key");
    setDetails(values); setStep(2);
  }} />;
  function getSubmissionKey() {
    if (submissionKey.current) return submissionKey.current;
    const stored = window.sessionStorage.getItem("cash-offer-submission-key");
    const key = stored ?? crypto.randomUUID();
    window.sessionStorage.setItem("cash-offer-submission-key", key);
    submissionKey.current = key;
    return key;
  }
}
