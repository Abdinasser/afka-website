import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";

const audiences = [
  {
    label: "Policymakers",
    body:
      "Regulators and public bodies shaping platform governance, digital safety law, and data policy in regions where Somali speakers live."
  },
  {
    label: "Civil society",
    body:
      "Digital rights groups, human rights organisations, and women's rights bodies working on online harm and platform accountability."
  },
  {
    label: "Journalists",
    body:
      "Reporters covering platforms, AI, disinformation, and women's safety online — particularly those working on or from the Horn of Africa."
  },
  {
    label: "Researchers",
    body:
      "Academics and analysts studying language, moderation, and platform governance in under-resourced linguistic contexts."
  },
  {
    label: "Platforms",
    body:
      "Trust, safety, policy, and integrity teams that need a structured account of how their systems behave in Somali-language spaces."
  },
  {
    label: "Somali-speaking communities",
    body:
      "Creators, women's groups, journalists, students, and users — the people the platforms make decisions about."
  }
];

export function Audiences() {
  return (
    <MotionSection
      id="audiences"
      aria-labelledby="redesign-audiences-heading"
      className="redesign-section redesign-section-light"
    >
      <div className="redesign-section-rule" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head">
          <p className="redesign-section-mark">
            <span className="redesign-roman">V.</span>
            <span>Audiences</span>
          </p>
          <h2
            id="redesign-audiences-heading"
            className="redesign-section-title font-serif-display"
          >
            Who the work is for.
          </h2>
          <p className="redesign-section-body">
            Afka is built to be read by the people who write the rules, the
            people who enforce them, the people who report on them, and the
            people they affect.
          </p>
        </header>

        <Stagger className="redesign-audiences-grid">
          {audiences.map((item, index) => (
            <StaggerItem key={item.label} className="redesign-audience-card">
              <span className="redesign-audience-mark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="redesign-audience-title font-serif-display">
                {item.label}
              </h3>
              <p className="redesign-audience-body">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
