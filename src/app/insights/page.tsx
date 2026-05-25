import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionSection, Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchSurface } from "@/components/ResearchSurface";
import { getPageMetadata } from "@/data/site";

export const metadata: Metadata = getPageMetadata("insights");

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Notes and outputs as Afka publishes."
          body="A restrained log of research outputs. The first item is the Founding Brief."
        />

        <MotionSection
          id="insights-output"
          className="section-reveal bg-[var(--bg)]"
          aria-labelledby="insights-heading"
        >
          <div className="mx-auto max-w-[80rem] px-5 pb-28 pt-36 sm:px-8 lg:px-10">
            <Reveal kind="text">
              <p
                className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
                style={{ letterSpacing: "0.08em" }}
              >
                Insights
              </p>
              <h2
                id="insights-heading"
                className="mt-5 max-w-[26ch] font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg)]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                This is where Afka&apos;s work will appear.
              </h2>
              <p className="mt-7 max-w-[48rem] text-[16px] leading-[1.7] text-[var(--fg-muted)]">
                As Afka publishes research notes, briefs, and resources, they
                will be listed here. The Founding Brief is the first
                publication, currently a work in progress.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <ResearchSurface accent className="flex min-h-[220px] flex-col p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p
                    className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    Founding Brief
                  </p>
                  <span
                    className="rounded-full border border-[var(--line)] bg-transparent px-[10px] py-[4px] text-[10px] font-semibold uppercase text-[var(--fg-muted)]"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    Work in progress
                  </span>
                </div>
                <h3
                  className="mt-7 max-w-[22ch] font-display font-medium text-[28px] leading-[1.1] tracking-[-0.024em] text-[var(--fg)]"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  What Afka studies, and why now.
                </h3>
                <p className="mt-[18px] max-w-[42ch] text-[13.5px] leading-[1.7] text-[var(--fg-muted)]">
                  A short framing of the research agenda for Somali-speaking
                  digital spaces. Currently in drafting; an excerpt will be
                  published when ready.
                </p>
              </ResearchSurface>

              <ResearchSurface className="flex min-h-[220px] flex-col justify-between p-8">
                <p
                  className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
                  style={{ letterSpacing: "0.08em" }}
                >
                  How to follow
                </p>
                <div>
                  <p
                    className="mt-5 font-display font-medium text-[22px] leading-[1.18] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    Quiet by design. Substantive when we publish.
                  </p>
                  <p className="mt-[14px] text-[13px] leading-[1.7] text-[var(--fg-muted)]">
                    Write to Afka if you would like to be notified when new
                    work is released.
                  </p>
                </div>
              </ResearchSurface>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
