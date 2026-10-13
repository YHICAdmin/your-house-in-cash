import { CalendarCheck, House } from "lucide-react";
import { FinalCta } from "@/components/ui/final-cta";

export function AreaFinalCta({ areaName }: { areaName?: string }) {
  const houseDescription = areaName ? `${areaName} house` : "house";
  return <FinalCta content={{
    label: "Ready When You Are",
    headline: `Ready to sell your ${houseDescription}?`,
    supportingCopy: `Tell us about your ${houseDescription} and receive a fair, no-obligation cash offer built around your situation and timeline.`,
    cta: { label: "Get My Cash Offer", href: "/get-cash-offer" },
    reassurance: "100% free. No obligation.",
    benefits: [
      { icon: House, heading: "Sell As-Is", supportingCopy: "Skip repairs, cleaning, and staging. We buy your house in its current condition." },
      { icon: CalendarCheck, heading: "Close on Your Timeline", supportingCopy: "Choose the closing date that works for you, whether you need to move quickly or need more time." },
    ],
  }} />;
}
