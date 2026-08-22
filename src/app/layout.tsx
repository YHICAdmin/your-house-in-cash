import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}