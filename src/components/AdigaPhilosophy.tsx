import { adigaPhilosophy } from "@/data/site";
import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";

export function AdigaPhilosophy() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="adiga-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-32">
        <div>
          <p
            className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
            style={{ letterSpacing: "0.08em" }}
          >
            {adigaPhilosophy.label}
          </p>
          <h2
            id="adiga-heading"
            className="mt-5 font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg)]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {adigaPhilosophy.heading}
          </h2>
        </div>

        <div className="space-y-8">
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {adigaPhilosophy.publicStatement}{" "}
            {adigaPhilosophy.philosophyStatement}
          </p>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {adigaPhilosophy.meanings.map((meaning) => (
              <StaggerItem key={meaning.title}>
                <ResearchSurface className="p-6">
                  <h3
                    className="font-display font-medium text-[24px] leading-[1.12] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {meaning.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {meaning.description}
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
