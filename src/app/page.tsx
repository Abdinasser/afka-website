import type { Metadata } from "next";

import { Context } from "@/components/Context";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomePathways } from "@/components/HomePathways";
import { Outputs } from "@/components/Outputs";
import { ResearchAreas } from "@/components/ResearchAreas";
import { getPageMetadata } from "@/data/site";

export const metadata: Metadata = getPageMetadata("home");

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomePathways />
        <Context />
        <ResearchAreas />
        <Outputs />
      </main>
      <Footer />
    </>
  );
}
