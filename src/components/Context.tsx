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
import { independencePrinciples } from "@/data/site";

export function Context() {
  return (
    <MotionSection
      id="approach"
      className="section-reveal scroll-cinema-section grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <ScrollDepth distance={28} fade>
            <SectionHeading
              id="approach-heading"
              eyebrow="Approach"
              title="Independent public-interest research."
              body="Afka documents digital harm through Somali-language context, careful evidence, and public reasoning."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="focus-ring rounded-full border border-[var(--deep-ink)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
              >
                About Afka
              </Link>
              <Link
                href="/research"
                className="focus-ring rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.28)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
              >
                Explore Research
              </Link>
            </div>
          </ScrollDepth>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Stagger className="narrative-stack grid gap-4 self-center lg:translate-y-6">
              {independencePrinciples.map((principle, index) => (
                <StaggerItem
                  key={principle.title}
                  className="narrative-stack-card"
                  style={{ "--stack-index": index } as CSSProperties}
                >
                  <ResearchSurface
                    className={`p-5 sm:p-6 ${
                      index === 1 ? "lg:ml-8" : ""
                    }`}
                  >
                    <p className="surface-index">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 font-serif-display text-[1.45rem] leading-tight text-[var(--deep-ink)]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {principle.description}
                    </p>
                  </ResearchSurface>
                </StaggerItem>
              ))}
            </Stagger>

            <SoftParallax className="lg:-translate-y-8" distance={26}>
              <RegionalSignalMap tone="light" label="Context signals" />
            </SoftParallax>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
