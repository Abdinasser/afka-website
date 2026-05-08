import Link from "next/link";
import type { CSSProperties } from "react";

import {
  MotionSection,
  ScrollDepth,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalField } from "@/components/SignalField";
import { researchAreas } from "@/data/site";

type ResearchAreasProps = {
  showIntroLink?: boolean;
};

export function ResearchAreas({ showIntroLink = true }: ResearchAreasProps) {
  return (
    <MotionSection
      id="research"
      className="section-reveal research-framework-section bg-[var(--deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="research-heading"
    >
      <div className="halftone-panel mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <ScrollDepth className="lg:sticky lg:top-28" distance={32} fade>
            <SectionHeading
              id="research-heading"
              eyebrow="Research pillars"
              title="What Afka studies."
              body="The research agenda begins with three connected fields: information ecosystems, digital rights, and the online economy."
              tone="dark"
            />
            {showIntroLink ? (
              <Link
                href="/research"
                className="focus-ring mt-8 inline-flex rounded-full border border-[rgba(244,248,249,0.14)] bg-[rgba(244,248,249,0.04)] px-5 py-3 text-sm font-semibold text-[rgba(244,248,249,0.78)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--cloud-white)]"
              >
                Explore Research
              </Link>
            ) : null}
          </ScrollDepth>

          <div className="research-framework-grid grid gap-5 lg:min-h-[58rem] lg:grid-cols-[0.92fr_1.08fr]">
            <ScrollDepth className="lg:sticky lg:top-28 lg:self-start" distance={22} scale>
              <SignalField
                tone="dark"
                label="Information field"
                caption="Signals are read as relationships between language, platform surfaces, incentives, and rights."
              />
            </ScrollDepth>

            <Stagger className="pillar-card-stack grid gap-5 lg:pt-10">
              {researchAreas.map((area, index) => (
                <StaggerItem
                  key={area.title}
                  className="pillar-scroll-card"
                  style={{ "--pillar-index": index } as CSSProperties}
                >
                  <ResearchSurface
                    tone="dark"
                    className={`p-5 backdrop-blur-sm sm:p-6 ${
                      index === 1 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <p className="surface-index shrink-0">
                        0{index + 1}
                      </p>
                      <div>
                        <h3 className="font-serif-display text-[1.55rem] leading-tight text-[var(--cloud-white)]">
                          {area.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[rgba(244,248,249,0.58)]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </ResearchSurface>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
