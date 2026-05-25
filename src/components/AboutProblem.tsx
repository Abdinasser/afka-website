import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ResearchSurface } from "@/components/ResearchSurface";
import { aboutProblemCards } from "@/data/site";

export function AboutProblem() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="about-problem-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-32">
        <SectionHeading
          id="about-problem-heading"
          eyebrow="Focus"
          title="The questions Afka studies."
        />

        <Stagger className="grid gap-4">
          {aboutProblemCards.map((card, index) => (
            <StaggerItem key={card.title}>
              <ResearchSurface
                className={`grid gap-6 p-6 sm:grid-cols-[5rem_1fr] ${
                  index === 1 ? "lg:ml-10" : ""
                }`}
              >
                <p className="surface-index self-start">
                  0{index + 1}
                </p>
                <div>
                  <h3
                    className="font-display font-medium text-[24px] leading-[1.12] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
                    {card.description}
                  </p>
                </div>
              </ResearchSurface>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
