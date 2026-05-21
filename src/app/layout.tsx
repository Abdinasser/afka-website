import type { Metadata } from "next";

import {
  getPageMetadata,
  organizationJsonLd,
  websiteJsonLd
} from "@/data/site";
import "./globals.css";

export const metadata: Metadata = getPageMetadata("home");

const structuredData = [organizationJsonLd, websiteJsonLd];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
