import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { independencePrinciples } from "@/data/site";

export function AboutStandard() {
  return (
    <MotionSection
      className="section-reveal relative isolate overflow-hidden bg-[var(--afka-deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="about-standard-heading"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(10,92,107,0.62) 0 1.35px, transparent 1.65px), radial-gradient(circle, rgba(244,248,249,0.28) 0 1px, transparent 1.4px)",
          backgroundPosition: "0 0, 9px 9px",
          backgroundSize: "18px 18px, 18px 18px",
          opacity: 0.42,
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)",
          maskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)"
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
              Approach
            </p>
            <h2
              id="about-standard-heading"
              className="mt-5 font-serif-display text-3xl leading-tight text-[var(--cloud-white)] sm:text-4xl"
            >
              Careful documentation, public reasoning.
            </h2>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-3">
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
