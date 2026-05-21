import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
import { researchOutputs } from "@/data/site";

export function Outputs() {
  return (
    <MotionSection
      id="outputs"
      className="section-reveal outputs-section grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="outputs-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div>
            <SectionHeading
              id="outputs-heading"
              eyebrow="Outputs"
              title="What Afka will produce."
              body="Afka will translate documented cases, platform behaviour, and field evidence into research and policy work for public use."
            />
          </div>

          <Stagger className="outputs-grid grid gap-5 sm:grid-cols-2">
            {researchOutputs.map((item, index) => (
              <StaggerItem key={item.title} className="h-full">
                <ResearchSurface
                  accent={index === 0}
                  className="output-grid-card flex h-full flex-col p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.42)] px-3 py-1 text-[0.68rem] font-semibold uppercase text-[var(--deep-teal)]">
                      {item.label}
                    </p>
                    <span className="text-[0.68rem] font-semibold uppercase text-[rgba(13,31,34,0.38)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-serif-display text-[1.65rem] leading-tight text-[var(--deep-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
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
