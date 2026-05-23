import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";

const outputs = [
  {
    cadence: "Quarterly",
    label: "Research briefs",
    body:
      "Long-form analysis on platform behaviour, language moderation, AI systems, and the online economy in Somali-speaking spaces."
  },
  {
    cadence: "Rolling",
    label: "Policy memos",
    body:
      "Short, citable recommendations for regulators, platforms, and civil society — anchored to specific decisions or incidents."
  },
  {
    cadence: "Monthly",
    label: "Platform accountability reports",
    body:
      "Structured logs of enforcement gaps, takedown patterns, and policy carve-outs observed across major platforms."
  },
  {
    cadence: "As needed",
    label: "Explainers",
    body:
      "Plain-language explainers for journalists and the public on moderation, AI, monetisation, and digital rights as they affect Somali speakers."
  },
  {
    cadence: "Continuous",
    label: "Monitoring notes",
    body:
      "Working notes and datasets from ongoing observation — released where the evidence is robust and the public interest is clear."
  },
  {
    cadence: "Open",
    label: "Public-interest analysis",
    body:
      "Commentary, testimony, and contributions to public consultations on platform governance and digital rights."
  }
];

export function Outputs() {
  return (
    <MotionSection
      id="outputs"
      aria-labelledby="redesign-outputs-heading"
      className="redesign-section redesign-section-dark"
    >
      <div className="redesign-section-rule redesign-section-rule-dark" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head redesign-section-head-dark">
          <p className="redesign-section-mark redesign-section-mark-dark">
            <span className="redesign-roman">III.</span>
            <span>Outputs</span>
          </p>
          <h2
            id="redesign-outputs-heading"
            className="redesign-section-title font-serif-display"
          >
            What Afka publishes.
          </h2>
          <p className="redesign-section-body redesign-section-body-dark">
            Findings are released as briefs, memos, accountability reports, and
            explainers — written to be read by people who shape platform and
            policy decisions, and cited by people who study them.
          </p>
        </header>

        <Stagger className="redesign-outputs-grid">
          {outputs.map((item, index) => (
            <StaggerItem key={item.label} className="redesign-output-card">
              <div className="redesign-output-card-head">
                <span className="redesign-output-card-cadence">
                  {item.cadence}
                </span>
                <span className="redesign-output-card-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="redesign-output-card-title font-serif-display">
                {item.label}
              </h3>
              <p className="redesign-output-card-body">{item.body}</p>
              <span className="redesign-output-card-rule" aria-hidden="true" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
