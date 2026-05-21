import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchAreas } from "@/components/ResearchAreas";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SignalField } from "@/components/SignalField";
import { approachSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Research | Afka Digital Institute",
  description:
    "Afka Digital Institute researches platform accountability, Somali-language moderation, information integrity, AI governance, digital exclusion, and digital rights across Somali online spaces."
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Research"
          title="Platform systems, language, and public harm."
          body="Afka studies digital harm through Somali-language context, platform behaviour, information integrity, and public accountability."
        />
        <ResearchAreas showIntroLink={false} />

        <MotionSection
          className="section-reveal grain-layer bg-[var(--cloud-white)]"
          aria-labelledby="method-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                Method
              </p>
              <h2
                id="method-heading"
                className="mt-5 font-serif-display text-3xl leading-tight text-[var(--deep-ink)] sm:text-4xl"
              >
                From incident to public record.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
                The research process follows a clear editorial sequence: gather
                evidence, test the pattern, and publish with enough context for
                public use.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <Stagger className="grid gap-4">
                {approachSteps.map((step, index) => (
                  <StaggerItem key={step.step}>
                    <ResearchSurface
                      className={`p-5 ${index === 1 ? "lg:ml-8" : ""}`}
                    >
                      <p className="surface-index">
                        {step.step}
                      </p>
                      <h3 className="mt-5 font-serif-display text-[1.45rem] leading-tight text-[var(--deep-ink)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {step.description}
                      </p>
                    </ResearchSurface>
                  </StaggerItem>
                ))}
              </Stagger>
              <SignalField
                tone="light"
                label="Method layer"
                caption="The method connects observation, case evidence, platform behavior, and institutional interpretation."
              />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="bg-[var(--cloud-white)]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_auto] md:items-center">
              <p className="max-w-2xl font-serif-display text-2xl leading-tight text-[var(--deep-ink)] sm:text-3xl">
                Research questions and institutional inquiries can be directed
                to Afka.
              </p>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(10,92,107,0.42)] bg-[rgba(10,92,107,0.08)] px-6 py-3 text-sm font-semibold text-[var(--deep-ink)] shadow-[0_12px_30px_rgba(13,31,34,0.08)] transition-colors hover:border-[var(--deep-teal)] hover:bg-[rgba(10,92,107,0.13)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
