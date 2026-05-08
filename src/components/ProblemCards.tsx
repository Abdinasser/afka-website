import { MotionSection, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SectionHeading } from "@/components/SectionHeading";
import { problemCards } from "@/data/site";

export function ProblemCards() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-32">
        <SectionHeading
          id="problem-heading"
          eyebrow="Signals"
          title="What Afka watches."
          body="The institute focuses on recurring gaps that shape Somali digital life."
        />

        <Stagger className="grid gap-4">
          {problemCards.map((card, index) => (
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
                  <h3 className="font-serif-display text-[1.65rem] leading-tight text-[var(--deep-ink)]">
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
