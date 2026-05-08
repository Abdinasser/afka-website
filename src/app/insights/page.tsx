import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SignalField } from "@/components/SignalField";
import { featuredInsight, researchOutputs } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights | Afka Digital Institute",
  description:
    "Research reports, policy briefs, explainers, and public-interest analysis from Afka Digital Institute."
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Insights"
          title="From evidence to public knowledge."
          body="Afka will produce research and policy work that makes Somali-speaking digital spaces visible, legible, and accountable."
        />

        <MotionSection
          className="section-reveal grain-layer bg-[var(--cloud-white)]"
          aria-labelledby="featured-insight-heading"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
            <ResearchSurface
              id="brief"
              tone="dark"
              className="founding-brief-surface grid gap-10 p-6 text-[var(--cloud-white)] sm:p-8 lg:grid-cols-[0.78fr_1.22fr]"
            >
              <div>
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  {featuredInsight.label}
                </p>
                <h2
                  id="featured-insight-heading"
                  className="mt-8 max-w-2xl font-serif-display text-3xl leading-tight text-[var(--cloud-white)] sm:text-[2.45rem]"
                >
                  {featuredInsight.title}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(244,248,249,0.62)]">
                  {featuredInsight.description}
                </p>
                <p className="mt-8 w-fit rounded-full border border-[rgba(244,248,249,0.14)] bg-[rgba(244,248,249,0.05)] px-4 py-2 text-sm font-semibold text-[rgba(244,248,249,0.72)]">
                  {featuredInsight.status}
                </p>
                <Link
                  href={featuredInsight.href}
                  className="focus-ring mt-5 inline-flex rounded-full bg-[var(--cloud-white)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:bg-[var(--mist-blue)]"
                >
                  Read the Brief
                </Link>
              </div>
              <SignalField
                tone="dark"
                label="Brief frame"
                caption="Briefs are shaped around evidence quality, public context, and institutional usefulness."
              />
            </ResearchSurface>

            <div
              className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[0.72fr_1.28fr]"
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
                  Outputs will translate lived experience, platform behavior,
                  field evidence, and data signals into clear analysis for
                  policymakers, civil society, journalists, platforms, and
                  institutions.
                </p>
              </Reveal>

              <Stagger className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <StaggerItem className="lg:row-span-2">
                  <ResearchSurface className="output-feature-card p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                      {researchOutputs[0].label}
                    </p>
                    <h3 className="mt-8 font-serif-display text-3xl leading-tight text-[var(--deep-ink)]">
                      {researchOutputs[0].title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                      {researchOutputs[0].description}
                    </p>
                    <p className="mt-10 max-w-sm text-sm leading-7 text-[var(--muted)]">
                      Selected insights and research notes will appear here as
                      Afka publishes new work.
                    </p>
                  </ResearchSurface>
                </StaggerItem>

                {researchOutputs.slice(1).map((item, index) => (
                  <StaggerItem key={item.title}>
                    <ResearchSurface
                      className={`p-5 ${index % 2 === 0 ? "lg:translate-y-6" : ""}`}
                    >
                      <p className="text-[0.68rem] font-semibold uppercase text-[var(--deep-teal)]">
                        {item.label}
                      </p>
                      <h3 className="mt-4 font-serif-display text-xl leading-tight text-[var(--deep-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
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
