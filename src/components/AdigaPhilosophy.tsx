import type { ReactNode } from "react";

import { adigaPhilosophy, type NameIcon } from "@/data/site";

function MarkedText({ terms, text }: { terms: string[]; text: string }) {
  const usableTerms = terms.filter(Boolean).sort((a, b) => b.length - a.length);
  const parts: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let nextIndex = -1;
    let nextTerm = "";

    for (const term of usableTerms) {
      const index = text.indexOf(term, cursor);

      if (
        index !== -1 &&
        (nextIndex === -1 ||
          index < nextIndex ||
          (index === nextIndex && term.length > nextTerm.length))
      ) {
        nextIndex = index;
        nextTerm = term;
      }
    }

    if (nextIndex === -1) {
      parts.push(text.slice(cursor));
      break;
    }

    if (nextIndex > cursor) {
      parts.push(text.slice(cursor, nextIndex));
    }

    parts.push(<strong key={`${nextTerm}-${nextIndex}`}>{nextTerm}</strong>);
    cursor = nextIndex + nextTerm.length;
  }

  return <>{parts}</>;
}

function LineIcon({ name }: { name: NameIcon }) {
  const sharedProps = {
    className: "adiga-line-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  } as const;

  if (name === "language") {
    return (
      <svg {...sharedProps}>
        <path d="M4.5 6.5h8a4 4 0 0 1 0 8H9l-4.5 3v-3a4 4 0 0 1 0-8Z" />
        <path d="M13.5 9.2h2.2a3.8 3.8 0 0 1 0 7.6h-.8l3.1 2.2v-2.2" />
      </svg>
    );
  }

  if (name === "digital") {
    return (
      <svg {...sharedProps}>
        <path d="M5 5h14v9H5z" />
        <path d="M9 19h6" />
        <path d="M12 14v5" />
      </svg>
    );
  }

  if (name === "institute") {
    return (
      <svg {...sharedProps}>
        <path d="m4 9 8-5 8 5" />
        <path d="M6 10h12" />
        <path d="M7 10v8" />
        <path d="M11 10v8" />
        <path d="M15 10v8" />
        <path d="M19 10v8" />
        <path d="M5 18h14" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...sharedProps}>
        <path d="M12 3.5 19 6v5.4c0 4.1-2.8 7.4-7 9.1-4.2-1.7-7-5-7-9.1V6z" />
        <path d="M9.6 12.8a2.4 2.4 0 0 1 4.8 0" />
        <path d="M12 8.7a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z" />
      </svg>
    );
  }

  if (name === "journal") {
    return (
      <svg {...sharedProps}>
        <path d="M6 4.5h12v15H6z" />
        <path d="M9 8h6" />
        <path d="M9 11.5h6" />
        <path d="M9 15h3.5" />
      </svg>
    );
  }

  if (name === "research") {
    return (
      <svg {...sharedProps}>
        <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
        <path d="m15.2 15.2 4.3 4.3" />
      </svg>
    );
  }

  if (name === "policy") {
    return (
      <svg {...sharedProps}>
        <path d="M12 4v16" />
        <path d="M5 7h14" />
        <path d="m7 7-3 6h6z" />
        <path d="m17 7-3 6h6z" />
        <path d="M8.5 20h7" />
      </svg>
    );
  }

  if (name === "creator") {
    return (
      <svg {...sharedProps}>
        <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M6.5 20v-1.6a5.5 5.5 0 0 1 11 0V20" />
        <path d="M18.5 6.5h1.8" />
        <path d="M19.4 5.6v1.8" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M16 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M12 12.8a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
      <path d="M3.8 19v-.8A4.2 4.2 0 0 1 8 14" />
      <path d="M20.2 19v-.8A4.2 4.2 0 0 0 16 14" />
      <path d="M7.2 20v-.7a4.8 4.8 0 0 1 9.6 0v.7" />
    </svg>
  );
}

export function AdigaPhilosophy() {
  const [headingLead, headingTail = ""] =
    adigaPhilosophy.heading.split(adigaPhilosophy.centralWord);

  return (
    <section
      className="section-reveal adiga-section"
      aria-labelledby="adiga-heading"
    >
      <div className="adiga-shell">
        <div className="adiga-composition">
          <header className="adiga-title-panel">
            <div className="adiga-title-copy">
              <p className="adiga-kicker">{adigaPhilosophy.label}</p>
              <h2 id="adiga-heading" className="adiga-heading">
                {headingLead}
                <span>{adigaPhilosophy.centralWord}</span>
                {headingTail}
              </h2>
              <div className="adiga-title-rule" aria-hidden="true" />
              <div className="adiga-public-note">
                <p>
                  <MarkedText
                    terms={["Afka Digital Institute"]}
                    text={adigaPhilosophy.publicStatement}
                  />
                </p>
                <p>
                  <MarkedText
                    terms={[adigaPhilosophy.centralWord]}
                    text={adigaPhilosophy.philosophyStatement}
                  />
                </p>
              </div>
            </div>
          </header>

          <section
            className="adiga-name-panel"
            aria-label="Meaning of the public name"
          >
            {adigaPhilosophy.meanings.map((meaning) => (
              <article className="adiga-name-card" key={meaning.title}>
                <LineIcon name={meaning.icon} />
                <h3>{meaning.title}</h3>
                <p>{meaning.description}</p>
              </article>
            ))}
          </section>

          <section
            className="adiga-center-band"
            aria-label="ADIGA meaning in Somali"
          >
            <p className="adiga-center-intro">
              {adigaPhilosophy.centralIntro}
            </p>
            <p className="adiga-center-word">{adigaPhilosophy.centralWord}</p>
            <div className="adiga-center-divider" aria-hidden="true" />
            <div className="adiga-center-translation">
              <p>&ldquo;{adigaPhilosophy.centralMeaning}&rdquo;</p>
              <span>{adigaPhilosophy.centralSuffix}</span>
            </div>
          </section>

          <section
            className="adiga-acronym-system"
            aria-label="ADIGA acronym breakdown"
          >
            {adigaPhilosophy.acronym.map((item, index) => (
              <article className="adiga-acronym-card" key={item.title}>
                <p className="adiga-acronym-letter">{item.letter}</p>
                <div className="adiga-mini-rule" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </section>

          <section
            className="adiga-people-panel"
            aria-labelledby="adiga-people-heading"
          >
            <div className="adiga-people-statement">
              <div className="adiga-people-emblem" aria-hidden="true">
                <LineIcon name="communities" />
              </div>
              <h3 id="adiga-people-heading">{adigaPhilosophy.peopleIntro}</h3>
            </div>
            <ul className="adiga-people-list">
              {adigaPhilosophy.people.map((group) => (
                <li key={group.label}>
                  <LineIcon name={group.icon} />
                  <span>{group.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="adiga-footer-strip">
            <div className="adiga-footer-emblem" aria-hidden="true">
              <LineIcon name="institute" />
            </div>
            <p>
              <MarkedText
                terms={["Afka Digital Institute"]}
                text={adigaPhilosophy.footerPublicName}
              />
            </p>
            <p>
              <MarkedText
                terms={[
                  adigaPhilosophy.centralWord,
                  adigaPhilosophy.centralMeaning
                ]}
                text={adigaPhilosophy.footerStatement}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
