import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Context } from "@/components/Context";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Independence } from "@/components/Independence";
import { Outputs } from "@/components/Outputs";
import { ProblemCards } from "@/components/ProblemCards";
import { ResearchAreas } from "@/components/ResearchAreas";
import { WhyNow } from "@/components/WhyNow";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Context />
        <ProblemCards />
        <ResearchAreas />
        <Approach />
        <Outputs />
        <Independence />
        <WhyNow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
