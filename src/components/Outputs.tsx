import Link from "next/link";

import { MotionSection, ScrollDepth } from "@/components/Motion";
import { OutputArchiveRail } from "@/components/OutputArchiveRail";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredInsight, researchOutputs } from "@/data/site";

export function Outputs() {
  return (
    <MotionSection
      id="outputs"
      className="section-reveal archive-scroll-section grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="outputs-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <ScrollDepth className="lg:sticky lg:top-28 lg:self-start" distance={30} fade>
            <SectionHeading
              id="outputs-heading"
              eyebrow="Outputs"
              title="What Afka will produce."
              body="Afka will translate lived experience, platform behavior, and field evidence into research and policy work for public use."
            />
            <Link
              href={featuredInsight.href}
              className="focus-ring mt-8 inline-flex rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.32)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
            >
              {featuredInsight.label}
            </Link>
            <p className="mt-4 max-w-sm text-xs leading-6 text-[var(--muted)]">
              {featuredInsight.status}
            </p>
          </ScrollDepth>

          <OutputArchiveRail items={researchOutputs} />
        </div>
      </div>
    </MotionSection>
  );
}
