import Link from "next/link";
import type { CSSProperties } from "react";

import {
  MotionSection,
  ScrollDepth,
  SoftParallax,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { RegionalSignalMap } from "@/components/RegionalSignalMap";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";

const researchSignals = [
  ["01", "Dedicated research", "Somali-speaking digital spaces need evidence built from their own language and context."],
  ["02", "Public evidence", "Cases and patterns that can be tested, scrutinized, and cited."],
  ["03", "Accountability frame", "Safety, speech, access, and platform power across Somali online spaces."]
];

export function Context() {
  return (
    <MotionSection
      id="mission"
      className="section-reveal scroll-cinema-section grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="context-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <ScrollDepth className="lg:sticky lg:top-28" distance={28} fade>
            <SectionHeading
              id="context-heading"
              eyebrow="Why Afka"
              title="Somali-speaking digital spaces need their own evidence base."
              body="Afka exists to document how platform systems shape language, trust, safety, rights, livelihoods, and public knowledge across Somali online spaces."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="focus-ring rounded-full border border-[var(--deep-ink)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
              >
                About Afka
              </Link>
              <Link
                href="/founding-brief"
                className="focus-ring rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.28)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
              >
                Read Founding Brief
              </Link>
              <Link
                href="/research"
                className="focus-ring rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--deep-teal)]"
              >
                Explore Research
              </Link>
            </div>
          </ScrollDepth>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Stagger className="narrative-stack grid gap-4 self-center lg:min-h-[46rem] lg:translate-y-10">
              {researchSignals.map(([number, title, body], index) => (
                <StaggerItem
                  key={number}
                  className="narrative-stack-card"
                  style={{ "--stack-index": index } as CSSProperties}
                >
                  <ResearchSurface
                    className={`p-5 sm:p-6 ${
                      index === 1 ? "lg:ml-8" : ""
                    }`}
                  >
                    <p className="surface-index">
                      {number}
                    </p>
                    <h3 className="mt-5 font-serif-display text-[1.45rem] leading-tight text-[var(--deep-ink)]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {body}
                    </p>
                  </ResearchSurface>
                </StaggerItem>
              ))}
            </Stagger>

            <SoftParallax className="lg:-translate-y-8" distance={26}>
              <RegionalSignalMap tone="light" label="Regional texture" />
            </SoftParallax>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
