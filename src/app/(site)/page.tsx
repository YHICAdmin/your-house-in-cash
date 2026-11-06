import type { Metadata } from "next";
import { AreaPage } from "@/components/area/area-page";
import { clevelandArea } from "@/data/areas";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sell Your House Fast in Cleveland, OH | Your House in Cash",
  description: "Sell your Cleveland, Ohio house as-is for cash. No repairs, fees, or traditional-sale waiting. Serving Greater Cleveland homeowners.",
  canonical: "/",
  image: { url: clevelandArea.localPhoto.src, alt: clevelandArea.localPhoto.alt },
});

export default function Home() {
  return <AreaPage area={clevelandArea} />;
}
