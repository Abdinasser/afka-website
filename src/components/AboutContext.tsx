import { MotionSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";

const insightCards = [
  {
    title: "Language as evidence",
    body: "Somali language, dialect, slang, coded speech, and cultural context are treated as central evidence, not background detail."
  },
  {
    title: "Platforms as public space",
    body: "Visibility, moderation, monetisation, verification, and recommendation systems shape safety and civic life."
  },
  {
    title: "Lived reality as data",
    body: "Cases are documented with attention to gender, diaspora, journalism, youth, creators, and community context."
  },
  {
    title: "Policy-relevant knowledge",
    body: "Research is written for communities, journalists, civil society, policymakers, researchers, and institutions."
  }
];

export function AboutContext() {
  return (
    <MotionSection
      id="why-afka-exists"
      className="section-reveal grain-layer bg-[var(--cloud-white)]"
      aria-labelledby="about-context-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
        <Reveal kind="text">
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            INSTITUTION
          </p>
          <h2
            id="about-context-heading"
            className="mt-5 max-w-2xl font-serif-display text-4xl leading-[1.05] text-[var(--deep-ink)] sm:text-5xl"
          >
            Why Afka exists
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]">
            <p className="text-lg leading-8 text-[var(--deep-ink)]">
              Afka Digital Institute exists because Somali-speaking communities
              are deeply shaped by digital platforms, but rarely studied on their
              own terms.
            </p>
            <p>
              Moderation systems, monetisation rules, recommendation feeds, AI
              tools, and verification policies affect visibility, income, safety,
              trust, and speech. In Somali spaces, these effects are often
              misunderstood because language, dialect, diaspora context, and
              political meaning are poorly read by global systems.
            </p>
            <p>
              Afka turns that gap into a research agenda: documenting cases,
              analysing platform behaviour, and translating lived digital
              realities into public-interest knowledge.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <ResearchSurface className="about-pull-panel p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
              Public-interest frame
            </p>
            <p className="mt-8 font-serif-display text-[1.75rem] leading-tight text-[var(--deep-ink)]">
              Digital harm is not only a technology issue. It is a question of
              language, trust, safety, livelihoods, and public knowledge.
            </p>
          </ResearchSurface>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {insightCards.map((card, index) => (
              <StaggerItem key={card.title} className="h-full">
                <ResearchSurface className="about-logic-card flex h-full flex-col p-5">
                  <p className="surface-index">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif-display text-xl leading-tight text-[var(--deep-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {card.body}
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
