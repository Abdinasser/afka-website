import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { researchOutputs } from "@/data/site";

export function Outputs() {
  return (
    <MotionSection
      id="outputs"
      className="section-reveal relative overflow-clip bg-[var(--afka-cloud-white)]"
      aria-labelledby="outputs-heading"
    >
      <div className="mx-auto max-w-[80rem] px-5 pb-28 pt-36 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div>
            <p
              className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
              style={{ letterSpacing: "0.08em" }}
            >
              Outputs
            </p>
            <h2
              id="outputs-heading"
              className="mt-5 font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              What Afka will produce.
            </h2>
            <p className="mt-7 max-w-[30rem] text-[16px] leading-[1.7] text-[var(--fg-muted)]">
              Afka will translate documented cases, platform behaviour, and
              field evidence into research and policy work for public use.
            </p>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {researchOutputs.map((item, index) => (
              <StaggerItem key={item.title} className="h-full">
                <ResearchSurface
                  accent={index === 0}
                  className="output-grid-card flex h-full min-h-[260px] flex-col p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.42)] px-3 py-[5px] text-[10.5px] font-semibold uppercase text-[var(--accent)]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[10.5px] font-semibold uppercase text-[rgba(13,31,34,0.38)]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="mt-8 font-display font-medium text-[24px] leading-[1.12] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[13.5px] leading-[1.7] text-[var(--fg-muted)]">
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
