/* eslint-disable */
window.AboutContext = function AboutContext() {
  return (
    <section id="why-afka-exists" style={{
      position: "relative", background: "var(--afka-cloud-white)", overflow: "clip"
    }}>
      <div style={{
        maxWidth: "80rem", margin: "0 auto",
        padding: "144px 40px 112px",
        display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48
      }}>
        <div>
          <Eyebrow>Institution</Eyebrow>
          <h2 style={{
            marginTop: 20, fontFamily: "var(--display)", fontWeight: 500,
            fontSize: "clamp(2.2rem, 3.4vw, 3.4rem)", lineHeight: 1.04,
            letterSpacing: "-0.03em", color: "var(--fg)", maxWidth: "26rem", textWrap: "balance",
            fontVariationSettings: '"opsz" 96'
          }}>Why Afka exists</h2>
          <div style={{ marginTop: 32, maxWidth: "34rem", display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--fg)" }}>
              Afka Digital Institute exists because Somali‑speaking communities are deeply shaped by digital platforms, but rarely studied on their own terms.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--fg-muted)" }}>
              Moderation systems, monetisation rules, recommendation feeds and AI tools affect visibility, income, safety, trust and speech. Global systems often misread language, dialect, diaspora context and political meaning in Somali spaces.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--fg-muted)" }}>
              Afka turns that gap into a research agenda: documenting cases, analysing platform behaviour and translating lived digital realities into public‑interest knowledge.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gap: 20 }}>
          <ResearchSurface style={{ minHeight: 220, padding: 28 }}>
            <Eyebrow>Public‑interest frame</Eyebrow>
            <p style={{
              marginTop: 28, fontFamily: "var(--display)", fontWeight: 500,
              fontSize: 26, lineHeight: 1.15, color: "var(--fg)",
              letterSpacing: "-0.022em",
              fontVariationSettings: '"opsz" 36'
            }}>Digital harm is not only a technology issue. It is a question of language, trust, safety, livelihoods, and public knowledge.</p>
          </ResearchSurface>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
            {AFKA_DATA.insightCards.map((card, i) => (
              <ResearchSurface key={card.title} style={{ minHeight: 200, padding: 20 }}>
                <SurfaceIndex n={i + 1} />
                <h3 style={{
                  marginTop: 20, fontFamily: "var(--display)", fontWeight: 500,
                  fontSize: 19, lineHeight: 1.18, color: "var(--fg)",
                  letterSpacing: "-0.022em",
                  fontVariationSettings: '"opsz" 24'
                }}>{card.title}</h3>
                <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.7, color: "var(--fg-muted)" }}>{card.body}</p>
              </ResearchSurface>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
