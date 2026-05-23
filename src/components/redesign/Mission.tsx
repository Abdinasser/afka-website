import {
  MotionSection,
  Stagger,
  StaggerItem
} from "@/components/Motion";

const missionPoints = [
  {
    heading: "Platforms make decisions in our absence.",
    body:
      "Visibility, takedowns, monetisation, and safety policies for Somali-language content are shaped without dedicated research or Somali-speaking experts in the room."
  },
  {
    heading: "Language is treated as an afterthought.",
    body:
      "Automated moderation and AI systems handle Somali unevenly. Local dialect, coded abuse, and political speech routinely fall through the cracks."
  },
  {
    heading: "Harms compound, evidence does not.",
    body:
      "Image-based abuse, harassment of women journalists, monetised disinformation, and access barriers are documented in fragments. There is no consolidated record."
  }
];

export function Mission() {
  return (
    <MotionSection
      id="mission"
      aria-labelledby="redesign-mission-heading"
      className="redesign-section redesign-section-light"
    >
      <div className="redesign-section-rule" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head">
          <p className="redesign-section-mark">
            <span className="redesign-roman">I.</span>
            <span>Mission</span>
          </p>
          <h2
            id="redesign-mission-heading"
            className="redesign-section-title font-serif-display"
          >
            Why Somali-speaking digital spaces need
            <span className="redesign-section-title-soft"> dedicated research.</span>
          </h2>
          <p className="redesign-section-body">
            More than 25 million Somali speakers live and work online across the
            Horn of Africa and the diaspora. The platforms they use are designed,
            governed, and moderated elsewhere. Afka exists to study what that
            distance produces — for safety, for public information, and for the
            economic life of creators and small media.
          </p>
        </header>

        <Stagger className="redesign-mission-grid">
          {missionPoints.map((item, index) => (
            <StaggerItem key={item.heading} className="redesign-mission-item">
              <p className="redesign-mission-mark">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="redesign-mission-heading font-serif-display">
                {item.heading}
              </h3>
              <p className="redesign-mission-body">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}
