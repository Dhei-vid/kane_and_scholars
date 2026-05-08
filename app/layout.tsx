import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kane & Scholars — People, Delivery & Change Advisory",
    template: "%s — Kane & Scholars",
  },
  description:
    "Kane & Scholars partners with leadership teams on people, payroll, and project delivery — combining strategic clarity with disciplined execution across jurisdictions.",
  metadataBase: new URL("https://kaneandscholars.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-bg text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
