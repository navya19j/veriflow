import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veriflow — Catch Label Errors Before They Become Recalls",
  description:
    "Veriflow verifies product labels at the production line to prevent compliance failures and costly recalls. Built for mid-market manufacturers.",
  keywords: [
    "label verification",
    "recall prevention",
    "compliance manufacturing",
    "FDA compliance",
    "food safety",
    "label inspection",
    "production line",
  ],
  authors: [{ name: "Veriflow" }],
  openGraph: {
    title: "Veriflow — Catch Label Errors Before They Become Recalls",
    description:
      "Compliance + inspection layer for regulated manufacturing. Verify labels at the production line.",
    type: "website",
    siteName: "Veriflow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veriflow — Label Verification for Manufacturers",
    description:
      "Stop recalls before they start. Veriflow verifies labels at the line.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
