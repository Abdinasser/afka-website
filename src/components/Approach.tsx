import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
import { approachSteps } from "@/data/site";

export function Approach() {
  return (
    <MotionSection
      id="approach"
      className="section-reveal bg-[var(--afka-cloud-white)]"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <SectionHeading
          id="approach-heading"
          eyebrow="Method"
          title="A smaller, stricter workflow."
          body="Afka favors careful public evidence over crowded publication cycles."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <StaggerItem key={step.step}>
              <ResearchSurface
                className={`p-6 sm:p-8 ${index === 1 ? "md:mt-10" : ""}`}
              >
                <p className="surface-index">
                  {step.step}
                </p>
                <h3
                  className="mt-10 font-display font-medium text-[24px] leading-[1.12] tracking-[-0.022em] text-[var(--fg)]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  {step.description}
                </p>
              </ResearchSurface>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
