import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Serif,
  Newsreader
} from "next/font/google";

import {
  getPageMetadata,
  organizationJsonLd,
  websiteJsonLd
} from "@/data/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-serif-reading",
  display: "swap"
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

const fontClassName = [
  bricolage.variable,
  instrumentSerif.variable,
  newsreader.variable,
  plexSans.variable,
  plexMono.variable
].join(" ");

export const metadata: Metadata = getPageMetadata("home");

const structuredData = [organizationJsonLd, websiteJsonLd];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        {structuredData.map((item) => (
          <script
            key={item["@id"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(item).replace(/</g, "\\u003c")
            }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
