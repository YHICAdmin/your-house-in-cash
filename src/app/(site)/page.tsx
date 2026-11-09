import type { Metadata } from "next";
import { AreaPage } from "@/components/area/area-page";
import { clevelandArea } from "@/data/areas";
import { createPageMetadata } from "@/lib/page-metadata";

const homepageHowItWorksContent = {
  heading: "How Our Cash Offer Process Works",
  intro:
    "Here’s what to expect when you request a cash offer for your Cleveland-area home.",
  steps: [
    {
      number: "01",
      title: "Tell Us About Your House",
      body:
        "Send us your property address or give us a call. We’ll ask a few questions about the house, its condition, and when you’d like to sell. If we need to see the property, we’ll arrange a time that works for you.",
      illustration: "/images/how-it-works/property-form.svg",
    },
    {
      number: "02",
      title: "Review Your Cash Offer",
      body:
        "We look at the condition of your house, the repairs it may need, and what similar homes nearby have sold for. We’ll explain how we arrived at your as-is cash offer. You can take time to decide whether it works for you.",
      illustration: "/images/how-it-works/cash-offer.svg",
    },
    {
      number: "03",
      title: "Choose Your Closing Date",
      body:
        "If you accept the offer, we’ll agree on a closing date that fits your plans and coordinate the paperwork. We’ll let you know what we need from you before closing.",
      illustration: "/images/how-it-works/closing-calendar.svg",
    },
  ],
} as const;

export const metadata: Metadata = createPageMetadata({
  title: "Sell Your House Fast in Cleveland, OH | Your House in Cash",
  description: "Sell your Cleveland, Ohio house as-is for cash. No repairs, fees, or traditional-sale waiting. Serving Greater Cleveland homeowners.",
  canonical: "/",
  image: { url: clevelandArea.localPhoto.src, alt: clevelandArea.localPhoto.alt },
});

export default function Home() {
  return <AreaPage area={clevelandArea} howItWorksContent={homepageHowItWorksContent} />;
}
