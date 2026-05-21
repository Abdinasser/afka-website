import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionSection, Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchSurface } from "@/components/ResearchSurface";
import { getPageMetadata, insightItems } from "@/data/site";

export const metadata: Metadata = getPageMetadata("insights");

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Insights"
          title="From evidence to public knowledge."
          body="Afka will translate documented cases and platform behaviour into public-interest outputs."
        />

        <MotionSection
          id="insights-output"
          className="section-reveal outputs-section grain-layer bg-[var(--cloud-white)]"
          aria-labelledby="research-output-heading"
        >
          <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
            <div
              className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"
              aria-labelledby="research-output-heading"
            >
              <Reveal kind="text">
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  Output system
                </p>
                <h2
                  id="research-output-heading"
                  className="mt-5 font-serif-display text-3xl leading-tight text-[var(--deep-ink)] sm:text-4xl"
                >
                  Research outputs
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
                  Afka will translate documented cases and platform behaviour
                  into public-interest outputs.
                </p>
              </Reveal>

              {insightItems.length === 0 ? (
                <ResearchSurface className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                    Status
                  </p>
                  <h3 className="mt-6 font-serif-display text-2xl leading-tight text-[var(--deep-ink)]">
                    No insights published yet
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Research notes, briefs, and resources will appear here when
                    Afka publishes public-facing work.
                  </p>
                </ResearchSurface>
              ) : null}
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
