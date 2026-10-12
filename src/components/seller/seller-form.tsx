"use client";
import { useLayoutEffect, useState } from "react";
import { SellerDetails, type SellerValues } from "./seller-details";
import { PropertyDetails, type PropertyAnswers } from "./property-details";
import { SellerSuccess } from "./seller-success";

async function save(url: string, method: string, body: unknown) { const r = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); if (!r.ok) throw new Error(); return r.json() as Promise<{ leadId: string }>; }
export function SellerForm() {
  const [leadId, setLeadId] = useState(""); const [details, setDetails] = useState<SellerValues>(); const [answers, setAnswers] = useState<PropertyAnswers>({ condition: [], occupancy: [], reasons: [], timeline: [], notes: "" }); const [step, setStep] = useState<1|2|3>(1); const [pending, setPending] = useState<"submit"|"skip">(); const [failure, setFailure] = useState("");
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [step]);
  if (step === 3) return <SellerSuccess name={details?.name ?? ""} />;
  if (step === 2) return <PropertyDetails name={details?.name} answers={answers} onChange={setAnswers} onBack={() => setStep(1)} pending={pending} failure={failure} onSkip={() => void finish("skip")} onSubmit={() => void finish("submit")} />;
  return <SellerDetails initialValues={details} onSave={async values => { const result = await save(leadId ? `/api/leads/${leadId}` : "/api/leads", leadId ? "PATCH" : "POST", values); setLeadId(result.leadId); setDetails(values); setStep(2); }} />;
  async function finish(kind: "submit"|"skip") { setPending(kind); setFailure(""); try { await save(`/api/leads/${leadId}`, "PATCH", answers); setStep(3); } catch { setFailure("We couldn’t save these details. Please try again."); } finally { setPending(undefined); } }
}
