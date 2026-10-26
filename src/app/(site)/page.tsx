import type { Metadata } from "next";
import { AreaPage } from "@/components/area/area-page";
import { clevelandArea } from "@/data/areas";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Cleveland, OH | Your House in Cash",
  description: "Sell your Cleveland, Ohio house as-is for cash. No repairs, fees, or traditional-sale waiting. Serving Greater Cleveland homeowners.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <AreaPage area={clevelandArea} />;
}
