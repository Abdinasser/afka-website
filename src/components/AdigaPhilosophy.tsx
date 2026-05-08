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
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            {adigaPhilosophy.label}
          </p>
          <h2
            id="adiga-heading"
            className="mt-5 font-serif-display text-3xl leading-tight text-[var(--deep-ink)] sm:text-4xl"
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
                  <h3 className="font-serif-display text-[1.55rem] leading-tight text-[var(--deep-ink)]">
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
