import Link from "next/link";

import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
import { independencePrinciples } from "@/data/site";

export function Context() {
  return (
    <MotionSection
      id="approach"
      className="section-reveal relative overflow-clip bg-[var(--afka-cloud-white)]"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeading
              id="approach-heading"
              eyebrow="Approach"
              title="Independent public-interest research."
              body="Afka documents digital harm through Somali-language context, careful evidence, and public reasoning."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="focus-ring cta-text-light inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(13,31,34,0.68)] bg-[var(--deep-ink)] px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(13,31,34,0.1)] transition-colors hover:border-[var(--deep-teal)] hover:bg-[var(--deep-teal)]"
              >
                About Afka
              </Link>
              <Link
                href="/research"
                className="focus-ring cta-text-dark inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(10,92,107,0.36)] bg-[rgba(200,232,237,0.38)] px-5 py-3 text-sm font-semibold transition-colors hover:border-[var(--deep-teal)] hover:bg-[rgba(200,232,237,0.58)]"
              >
                Explore Research
              </Link>
            </div>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {independencePrinciples.map((principle, index) => (
              <StaggerItem key={principle.title} className="h-full">
                <ResearchSurface
                  className="approach-card flex h-full flex-col p-5 sm:p-6"
                >
                  <p className="surface-index">
                    0{index + 1}
                  </p>
                  <h3
                    className="mt-6 font-display font-medium text-[22px] leading-[1.12] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {principle.description}
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
