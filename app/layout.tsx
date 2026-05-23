import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sps1921.github.io"),
  title: "Surya Pratap Singh — Founder's Office, Product Ops & AI Execution",
  description:
    "Editorial portfolio of Surya Pratap Singh — a high-agency operator across Founder's Office, Research Operations, Product Operations and AI-assisted workflows. Delhi NCR, India.",
  openGraph: {
    title: "Surya Pratap Singh — Operator & Builder",
    description:
      "Founder's Office, Product Operations, Research Execution and AI-driven business systems.",
    images: ["/surya-linkedin.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
