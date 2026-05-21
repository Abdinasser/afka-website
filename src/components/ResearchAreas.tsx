import Link from "next/link";

import {
  MotionSection,
  ScrollDepth,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
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
          <ScrollDepth distance={32} fade>
            <SectionHeading
              id="research-heading"
              eyebrow="Research focus"
              title="What Afka studies."
              body="The research agenda is organized around platform systems, Somali-language context, public harm, AI governance, and access."
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

          <Stagger className="research-focus-grid grid gap-5 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <StaggerItem key={area.title} className="h-full">
                <ResearchSurface
                  tone="dark"
                  className="research-focus-card flex h-full flex-col p-5 backdrop-blur-sm sm:p-6"
                >
                  <p className="surface-index shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-7 font-serif-display text-[1.45rem] leading-tight text-[var(--cloud-white)]">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(244,248,249,0.6)]">
                    {area.description}
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
