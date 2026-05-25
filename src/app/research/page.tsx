import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchAreas } from "@/components/ResearchAreas";
import { ResearchSurface } from "@/components/ResearchSurface";
import { approachSteps, getPageMetadata } from "@/data/site";

export const metadata: Metadata = getPageMetadata("research");

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Research"
          title="What Afka studies, and how."
          body="Six research areas organised around platform systems, Somali-language context, public harm, AI governance, and access."
        />
        <ResearchAreas showIntroLink={false} />

        <MotionSection
          id="method"
          className="section-reveal bg-[var(--afka-cloud-white)]"
          aria-labelledby="method-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[0.66fr_0.72fr_0.62fr] lg:gap-6 lg:px-10 lg:pb-28 lg:pt-40">
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                METHOD
              </p>
              <h2
                id="method-heading"
                className="mt-5 font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--deep-ink)]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                From incident to public record.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
                The research process follows a clear editorial sequence: document
                evidence, test patterns, and publish findings with enough context
                for public use.
              </p>
            </div>

            <Stagger className="grid gap-4">
              {approachSteps.map((step) => (
                <StaggerItem key={step.step} className="h-full">
                  <ResearchSurface className="method-card flex h-full flex-col p-5">
                    <p className="surface-index">
                      {step.step}
                    </p>
                    <h3
                      className="mt-5 font-display font-medium text-[22px] leading-[1.12] tracking-[-0.022em] text-[var(--deep-ink)]"
                      style={{ fontVariationSettings: '"opsz" 36' }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </ResearchSurface>
                </StaggerItem>
              ))}
            </Stagger>

            <ResearchSurface className="method-layer-panel p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                METHOD LAYER
              </p>
              <p
                className="mt-6 font-display font-medium text-[24px] leading-[1.15] tracking-[-0.022em] text-[var(--deep-ink)]"
                style={{ fontVariationSettings: '"opsz" 36' }}
              >
                The method connects observation, case evidence, platform
                behaviour, and institutional interpretation.
              </p>
              <div className="mt-8 grid gap-2 text-xs font-semibold uppercase text-[var(--deep-teal)]">
                <span className="border-t border-[var(--line)] pt-3">
                  Observation
                </span>
                <span className="border-t border-[var(--line)] pt-3">
                  Case evidence
                </span>
                <span className="border-t border-[var(--line)] pt-3">
                  Platform behaviour
                </span>
                <span className="border-t border-[var(--line)] pt-3">
                  Interpretation
                </span>
              </div>
            </ResearchSurface>
          </div>
        </MotionSection>

        <MotionSection className="bg-[var(--cloud-white)]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_auto] md:items-center">
              <p
                className="max-w-2xl font-display font-medium text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.022em] text-[var(--deep-ink)]"
                style={{ fontVariationSettings: '"opsz" 36' }}
              >
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
