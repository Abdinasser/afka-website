import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";

type FocusArea = {
  id: string;
  title: string;
  body: string;
  signals: string[];
};

const focusAreas: FocusArea[] = [
  {
    id: "01",
    title: "Platform accountability",
    body:
      "How major platforms apply enforcement, visibility, takedown, monetisation, and appeal decisions to Somali-language content and Somali-speaking users.",
    signals: ["Enforcement gaps", "Appeals and reach", "Policy carve-outs"]
  },
  {
    id: "02",
    title: "Somali-language moderation",
    body:
      "How dialect, slang, political speech, religious discourse, and coded abuse are handled by automated and human review systems built around other languages.",
    signals: ["Classifier accuracy", "Coded abuse", "Dialect coverage"]
  },
  {
    id: "03",
    title: "Information integrity",
    body:
      "How false claims, influence networks, monetised attention, and crisis narratives travel across Somali digital spaces — and which incentives sustain them.",
    signals: ["Influence networks", "Monetised attention", "Crisis narratives"]
  },
  {
    id: "04",
    title: "Online gendered harm",
    body:
      "Documentation of harassment, image-based abuse, intimidation, and silencing patterns affecting Somali women, journalists, activists, and public figures.",
    signals: ["Image-based abuse", "Silencing", "Journalist safety"]
  },
  {
    id: "05",
    title: "AI and language justice",
    body:
      "How Somali is represented, excluded, or distorted in AI systems, automated tools, transcription pipelines, and platform safety infrastructure.",
    signals: ["Model coverage", "Bias and erasure", "Safety tooling"]
  },
  {
    id: "06",
    title: "Creator economy and access",
    body:
      "Monetisation, payment, verification, reach, and access barriers facing Somali creators, small media outlets, and civil society on global platforms.",
    signals: ["Payments", "Verification", "Reach throttling"]
  },
  {
    id: "07",
    title: "Digital exclusion",
    body:
      "Who is left out — by language, geography, identity verification, or design choice — and what that absence means for civic participation.",
    signals: ["Onboarding barriers", "Identity", "Civic exclusion"]
  },
  {
    id: "08",
    title: "Policy and governance",
    body:
      "Translating findings into recommendations for regulators, platforms, and civil society working on digital rights and content governance.",
    signals: ["Regulator briefings", "Platform engagement", "Civil society"]
  }
];

export function Focus() {
  return (
    <MotionSection
      id="focus"
      aria-labelledby="redesign-focus-heading"
      className="redesign-section redesign-section-light"
    >
      <div className="redesign-section-rule" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head">
          <p className="redesign-section-mark">
            <span className="redesign-roman">II.</span>
            <span>Research focus</span>
          </p>
          <h2
            id="redesign-focus-heading"
            className="redesign-section-title font-serif-display"
          >
            Eight questions Afka investigates.
          </h2>
          <p className="redesign-section-body">
            The research agenda is organised around platform behaviour,
            Somali-language context, AI systems, public harm, and access. Each
            area produces evidence that can be cited, contested, and acted on.
          </p>
        </header>

        <Stagger className="redesign-focus-list">
          {focusAreas.map((area) => (
            <StaggerItem key={area.id} className="redesign-focus-row">
              <div className="redesign-focus-row-id">
                <span className="redesign-focus-row-num">{area.id}</span>
              </div>
              <div className="redesign-focus-row-body">
                <h3 className="redesign-focus-row-title font-serif-display">
                  {area.title}
                </h3>
                <p className="redesign-focus-row-text">{area.body}</p>
              </div>
              <ul className="redesign-focus-row-signals" aria-label="Signals tracked">
                {area.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
