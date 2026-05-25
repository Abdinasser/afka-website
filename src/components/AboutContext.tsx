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
      className="section-reveal relative overflow-clip bg-[var(--afka-cloud-white)]"
      aria-labelledby="about-context-heading"
    >
      <div className="mx-auto grid max-w-[80rem] gap-12 px-5 pb-28 pt-36 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal kind="text">
          <p
            className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
            style={{ letterSpacing: "0.08em" }}
          >
            Institution
          </p>
          <h2
            id="about-context-heading"
            className="mt-5 max-w-[26rem] text-balance font-display font-medium text-[clamp(2.2rem,3.4vw,3.4rem)] leading-[1.04] tracking-[-0.03em] text-[var(--fg)]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Why Afka exists
          </h2>
          <div className="mt-8 flex max-w-[34rem] flex-col gap-5">
            <p className="text-[18px] leading-[1.65] text-[var(--fg)]">
              Afka Digital Institute exists because Somali-speaking communities
              are deeply shaped by digital platforms, but rarely studied on
              their own terms.
            </p>
            <p className="text-[15px] leading-[1.75] text-[var(--fg-muted)]">
              Moderation systems, monetisation rules, recommendation feeds and
              AI tools affect visibility, income, safety, trust and speech.
              Global systems often misread language, dialect, diaspora context
              and political meaning in Somali spaces.
            </p>
            <p className="text-[15px] leading-[1.75] text-[var(--fg-muted)]">
              Afka turns that gap into a research agenda: documenting cases,
              analysing platform behaviour and translating lived digital
              realities into public-interest knowledge.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <ResearchSurface className="about-pull-panel min-h-[220px] p-7">
            <p
              className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
              style={{ letterSpacing: "0.08em" }}
            >
              Public-interest frame
            </p>
            <p
              className="mt-7 font-display font-medium text-[26px] leading-[1.15] tracking-[-0.022em] text-[var(--fg)]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              Digital harm is not only a technology issue. It is a question of
              language, trust, safety, livelihoods, and public knowledge.
            </p>
          </ResearchSurface>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {insightCards.map((card, index) => (
              <StaggerItem key={card.title} className="h-full">
                <ResearchSurface className="about-logic-card flex h-full min-h-[200px] flex-col p-5">
                  <span
                    className="inline-flex min-w-[2.6rem] items-center justify-center pb-[6px] text-[11px] font-bold uppercase text-[var(--accent)]"
                    style={{
                      letterSpacing: "0.06em",
                      borderBottom: "1px solid var(--accent)"
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-5 font-display font-medium text-[19px] leading-[1.18] tracking-[-0.022em] text-[var(--fg)]"
                    style={{ fontVariationSettings: '"opsz" 24' }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[var(--fg-muted)]">
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
