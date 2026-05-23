import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";

const methodSteps = [
  {
    step: "01",
    title: "Document",
    body:
      "Collect public cases, platform behaviour, and language context with explicit scope. Each case carries a date, a source, and a method note."
  },
  {
    step: "02",
    title: "Read",
    body:
      "Test what the cases show together — across platforms, languages, incentives, and rights — using methods that other researchers can replicate."
  },
  {
    step: "03",
    title: "Publish",
    body:
      "Release briefs, memos, and reports that institutions can scrutinise, cite, and challenge. Findings are written to be revisited as evidence changes."
  }
];

const methodPrinciples = [
  {
    title: "Somali-language context",
    body:
      "Research is conducted with Somali-speaking researchers and contributors who can read dialect, register, and political meaning."
  },
  {
    title: "Open-source where possible",
    body:
      "Public-record observation, archived posts, platform transparency data, and primary documentation form the evidence base — not proprietary scraping."
  },
  {
    title: "Community-informed",
    body:
      "Cases and questions are shaped with the people most affected: women facing online abuse, journalists, creators, and civil society."
  },
  {
    title: "Editorial verification",
    body:
      "Each output is read by an independent reviewer before publication. Sources, claims, and limits are stated plainly."
  }
];

export function Method() {
  return (
    <MotionSection
      id="method"
      aria-labelledby="redesign-method-heading"
      className="redesign-section redesign-section-light"
    >
      <div className="redesign-section-rule" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head">
          <p className="redesign-section-mark">
            <span className="redesign-roman">IV.</span>
            <span>Method</span>
          </p>
          <h2
            id="redesign-method-heading"
            className="redesign-section-title font-serif-display"
          >
            How the research is built.
          </h2>
          <p className="redesign-section-body">
            Afka follows a careful sequence: document, read, publish. The
            evidence base is open enough to be questioned, and the writing is
            specific enough to be useful.
          </p>
        </header>

        <div className="redesign-method-grid">
          <Stagger className="redesign-method-steps">
            {methodSteps.map((item) => (
              <StaggerItem key={item.step} className="redesign-method-step">
                <span className="redesign-method-step-num">{item.step}</span>
                <h3 className="redesign-method-step-title font-serif-display">
                  {item.title}
                </h3>
                <p className="redesign-method-step-body">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="redesign-method-principles">
            <p className="redesign-eyebrow redesign-eyebrow-spaced">
              Standards we hold
            </p>
            {methodPrinciples.map((item) => (
              <StaggerItem key={item.title} className="redesign-method-principle">
                <h4 className="redesign-method-principle-title">{item.title}</h4>
                <p className="redesign-method-principle-body">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </MotionSection>
  );
}
