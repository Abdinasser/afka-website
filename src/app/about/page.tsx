import type { Metadata } from "next";

import { AboutContext } from "@/components/AboutContext";
import { AboutCTA } from "@/components/AboutCTA";
import { AboutHero } from "@/components/AboutHero";
import { AboutStandard } from "@/components/AboutStandard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "About Afka Digital Institute | Somali Digital Research",
  description:
    "Learn why Afka Digital Institute studies information ecosystems, digital rights, and platform harm across Somali online spaces."
};

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
