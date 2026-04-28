import type { Metadata } from "next";

import { AboutContext } from "@/components/AboutContext";
import { AboutCTA } from "@/components/AboutCTA";
import { AboutHero } from "@/components/AboutHero";
import { AboutProblem } from "@/components/AboutProblem";
import { AboutStandard } from "@/components/AboutStandard";
import { AdigaPhilosophy } from "@/components/AdigaPhilosophy";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title:
    "About Afka Digital Institute | Digital Harm Research in the Somali-Speaking World",
  description:
    "Learn why Afka Digital Institute documents digital harm, platform accountability failures, AI moderation gaps, and online rights issues affecting Somali-speaking communities."
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContext />
        <AboutProblem />
        <AdigaPhilosophy />
        <AboutStandard />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
