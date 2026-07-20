import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://katlanzenekar.com"),
  title: {
    default: "Katlan — Kolozsvár",
    template: "%s | Katlan",
  },
  description:
    "Kárpát-medencei népzene, bluegrass és country — frissen, pimaszul, autentikusan Kolozsvárról.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Katlan",
    images: [{ url: "/images/katlan-og.webp", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/images/katlan-logo-dark.svg",
  },
  other: {
    "theme-color": "#f6a000",
    "codex-preview": "development",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
