import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { independencePrinciples } from "@/data/site";

export function Independence() {
  return (
    <MotionSection
      id="independence"
      className="section-reveal bg-[var(--deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="independence-heading"
    >
      <div className="halftone-panel mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
              Independence
            </p>
            <h2
              id="independence-heading"
              className="mt-5 font-serif-display text-3xl leading-tight text-[var(--cloud-white)] sm:text-4xl"
            >
              Built for public trust.
            </h2>
          </div>

          <Stagger className="grid gap-3 sm:grid-cols-3">
            {independencePrinciples.map((principle, index) => (
              <StaggerItem key={principle.title}>
                <ResearchSurface
                  tone="dark"
                  className={`p-5 ${index === 1 ? "sm:mt-8" : ""}`}
                >
                  <h3 className="font-serif-display text-[1.5rem] leading-tight text-[var(--cloud-white)]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(244,248,249,0.58)]">
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
