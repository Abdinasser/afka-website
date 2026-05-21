import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchSurface } from "@/components/ResearchSurface";
import { researchOutputs } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights | Afka Digital Institute",
  description:
    "Forthcoming research reports, policy briefs, working notes, and public resources from Afka Digital Institute."
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Insights"
          title="From evidence to public knowledge."
          body="Selected research outputs will appear here as Afka develops its evidence base and publishes public-interest analysis."
        />

        <MotionSection
          className="section-reveal outputs-section grain-layer bg-[var(--cloud-white)]"
          aria-labelledby="research-output-heading"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
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
                  What Afka will produce
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
                  Outputs will translate documented cases, platform behaviour,
                  field evidence, and public reasoning into clear analysis for
                  policymakers, civil society, journalists, platforms, and
                  institutions. They will be added here as they are published.
                </p>
              </Reveal>

              <Stagger className="grid gap-5 sm:grid-cols-2">
                {researchOutputs.map((item, index) => (
                  <StaggerItem key={item.title} className="h-full">
                    <ResearchSurface
                      accent={index === 0}
                      className="output-grid-card flex h-full flex-col p-6 sm:p-7"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.42)] px-3 py-1 text-[0.68rem] font-semibold uppercase text-[var(--deep-teal)]">
                          {item.label}
                        </p>
                        <span className="text-[0.68rem] font-semibold uppercase text-[rgba(13,31,34,0.38)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif-display text-[1.65rem] leading-tight text-[var(--deep-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </ResearchSurface>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
