import type { CSSProperties } from "react";

import { MotionSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";

const insightCards = [
  {
    title: "Language as infrastructure",
    body: "Somali language and context are treated as central evidence, not an afterthought."
  },
  {
    title: "Platforms as public space",
    body: "Visibility, moderation, monetization, and speech shape safety and civic life."
  },
  {
    title: "Lived reality as evidence",
    body: "Cases are read with attention to gender, diaspora, journalism, youth, and community context."
  },
  {
    title: "Policy-relevant knowledge",
    body: "Research is built for communities, policymakers, journalists, researchers, and institutions."
  }
];

const signalRows = [
  "Language",
  "Trust",
  "Safety",
  "Livelihoods",
  "Public knowledge"
];

export function AboutContext() {
  return (
    <MotionSection
      className="section-reveal grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="about-context-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
        <Reveal className="lg:sticky lg:top-28" kind="text">
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            Institution
          </p>
          <h2
            id="about-context-heading"
            className="mt-5 max-w-2xl font-serif-display text-4xl leading-[1.05] text-[var(--deep-ink)] sm:text-5xl"
          >
            Why Afka exists
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]">
            <p className="text-lg leading-8 text-[var(--deep-ink)]">
              Afka Digital Institute exists because Somali-speaking communities
              are deeply affected by digital systems, but rarely studied on
              their own terms.
            </p>
            <p>
              Across platforms, languages, and borders, Somali creators,
              journalists, researchers, women, young people, and diaspora
              communities navigate systems that shape visibility, income,
              safety, and speech. Digital harm in these spaces affects
              language, trust, identity, livelihoods, civic life, safety, and
              public knowledge.
            </p>
            <p>
              Afka turns that gap into a research agenda. We document these
              realities, produce credible research, and translate lived
              experience into policy-relevant knowledge on digital rights,
              information ecosystems, platform accountability, and the online
              economy.
            </p>
          </div>
        </Reveal>

        <div className="relative grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <ResearchSurface className="about-statement-surface p-6 sm:p-7 lg:mt-16">
            <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
              Public-interest frame
            </p>
            <p className="mt-8 font-serif-display text-[1.75rem] leading-tight text-[var(--deep-ink)]">
              Digital harm is not only a technology issue. It is a question of
              language, trust, rights, livelihoods, safety, and public life.
            </p>
          </ResearchSurface>

          <Reveal className="about-signal-system min-h-[31rem] p-5 sm:p-6" kind="card">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  Founding logic
                </p>
                <p className="mt-5 max-w-sm font-serif-display text-2xl leading-tight text-[var(--deep-ink)]">
                  Research grounded in Somali digital realities, not imported
                  assumptions.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {signalRows.map((row, index) => (
                  <div
                    key={row}
                    className="about-signal-row"
                    style={{ "--row-index": index } as CSSProperties}
                  >
                    <span>{row}</span>
                    <span aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:-mt-14 lg:pl-16">
            {insightCards.map((card, index) => (
              <StaggerItem key={card.title}>
                <ResearchSurface
                  className={`about-insight-card p-5 ${
                    index === 1 || index === 2 ? "lg:translate-y-8" : ""
                  }`}
                >
                  <h3 className="font-serif-display text-xl leading-tight text-[var(--deep-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {card.body}
                  </p>
                </ResearchSurface>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </MotionSection>
  );
}
