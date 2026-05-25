import type { Metadata } from "next";

import { AboutContext } from "@/components/AboutContext";
import { AboutCTA } from "@/components/AboutCTA";
import { AboutHero } from "@/components/AboutHero";
import { AboutStandard } from "@/components/AboutStandard";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { getPageMetadata } from "@/data/site";

export const metadata: Metadata = getPageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContext />
        <AboutStandard />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
