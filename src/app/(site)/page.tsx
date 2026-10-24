import type { Metadata } from "next";
import { AreaPage } from "@/components/area/area-page";
import { clevelandArea } from "@/data/areas";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <AreaPage area={clevelandArea} />;
}
