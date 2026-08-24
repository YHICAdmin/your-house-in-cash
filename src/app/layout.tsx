import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LineSystem } from "@/components/layout/line-system";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your House in Cash",
  description: "Sell your house for cash.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LineSystem />
        <SiteHeader />
        <div id="site-content">{children}</div>
      </body>
    </html>
  );
}
