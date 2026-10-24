import type { Metadata } from "next";
import { AreaPage } from "@/components/area/area-page";
import { clevelandArea } from "@/data/areas";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Cleveland | Your House in Cash",
  description: "We buy houses in Cleveland as-is, with no repairs, fees, or waiting for a traditional sale.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <AreaPage area={clevelandArea} />;
}
