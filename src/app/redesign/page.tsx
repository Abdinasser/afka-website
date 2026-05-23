import type { Metadata } from "next";

import { Audiences } from "@/components/redesign/Audiences";
import { Engage } from "@/components/redesign/Engage";
import { Focus } from "@/components/redesign/Focus";
import { Method } from "@/components/redesign/Method";
import { Mission } from "@/components/redesign/Mission";
import { Outputs } from "@/components/redesign/Outputs";
import { RedesignFooter } from "@/components/redesign/RedesignFooter";
import { RedesignHeader } from "@/components/redesign/RedesignHeader";
import { RedesignHero } from "@/components/redesign/RedesignHero";

import {
  siteDescription,
  siteName,
  siteOgImage,
  siteUrl
} from "@/data/site";

const previewTitle =
  "Afka Digital Institute — Researching digital harm in Somali-speaking spaces";

const previewDescription =
  "Concept preview of the Afka Digital Institute website. Independent research on platform accountability, Somali-language moderation, information integrity, AI governance, online gendered harm, and digital rights in Somali-speaking digital spaces.";

const canonicalUrl = new URL("/redesign", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: previewTitle,
  description: previewDescription,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  },
  alternates: {
    canonical: "/redesign"
  },
  openGraph: {
    title: previewTitle,
    description: previewDescription,
    url: canonicalUrl,
    siteName,
    type: "website",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Afka Digital Institute research field"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: previewTitle,
    description: previewDescription,
    images: [siteOgImage]
  }
};

const researchProjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: siteName,
  description: siteDescription,
  url: canonicalUrl,
  inLanguage: ["en", "so"],
  knowsAbout: [
    "Platform accountability",
    "Somali-language content moderation",
    "Information integrity",
    "AI governance",
    "Online gendered harm",
    "Creator monetisation",
    "Digital exclusion",
    "Digital rights",
    "Language justice",
    "Somali-speaking digital ecosystems"
  ]
};

export default function RedesignPreview() {
  return (
    <div className="afka-redesign">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchProjectJsonLd).replace(
            /</g,
            "\\u003c"
          )
        }}
      />
      <RedesignHeader />
      <main className="afka-redesign-main">
        <RedesignHero />
        <Mission />
        <Focus />
        <Outputs />
        <Method />
        <Audiences />
        <Engage />
      </main>
      <RedesignFooter />
    </div>
  );
}
