import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "400 600",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourhouseincash.com"),
  title: "Your House in Cash",
  description: "Sell your house for cash.",
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const isProductionDeployment = process.env.VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <GoogleAnalytics measurementId={googleAnalyticsId} productionDeployment={isProductionDeployment} />
        <SpeedInsights />
      </body>
    </html>
  );
}
