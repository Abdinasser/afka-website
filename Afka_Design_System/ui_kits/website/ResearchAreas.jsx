/* eslint-disable */
window.ResearchAreas = function ResearchAreas({ showIntroLink = true, setRoute }) {
  return (
    <section id="research" aria-labelledby="research-heading" style={{
      position: "relative", background: "var(--afka-deep-ink)", color: "var(--fg-inverse)", overflow: "clip", isolation: "isolate"
    }}>
      {/* Halftone background pattern */}
      <span aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(10,92,107,0.62) 0 1.35px, transparent 1.65px), radial-gradient(circle, rgba(244,248,249,0.28) 0 1px, transparent 1.4px)",
        backgroundPosition: "0 0, 9px 9px",
        backgroundSize: "18px 18px, 18px 18px",
        opacity: 0.42,
        WebkitMaskImage: "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)",
        maskImage: "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)"
      }} />
      <div style={{
        position: "relative", maxWidth: "80rem", margin: "0 auto",
        padding: "144px 40px 112px"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.78fr 1.22fr", gap: 48, alignItems: "start" }}>
          <div>
            <Eyebrow tone="mist">Research focus</Eyebrow>
            <h2 id="research-heading" style={{
              marginTop: 20, fontFamily: "var(--display)", fontWeight: 500,
              fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.05,
              letterSpacing: "-0.028em",
              color: "var(--fg-inverse)", textWrap: "balance",
              fontVariationSettings: '"opsz" 72'
            }}>What Afka studies.</h2>
            <p style={{
              marginTop: 28, maxWidth: "32rem",
              fontSize: 16, lineHeight: 1.7, color: "rgba(244,248,249,0.66)"
            }}>The research agenda is organised around platform systems, Somali‑language context, public harm, AI governance and access.</p>
            {showIntroLink && setRoute && (
              <button
                onClick={() => setRoute("research")}
                style={{
                  marginTop: 32, padding: "12px 20px", fontSize: 13, fontWeight: 600,
                  borderRadius: 9999,
                  border: "1px solid rgba(244,248,249,0.14)",
                  background: "rgba(244,248,249,0.04)",
                  color: "rgba(244,248,249,0.78)", cursor: "pointer"
                }}>Explore Research</button>
            )}
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}>
            {AFKA_DATA.researchAreas.map((area, i) => (
              <ResearchSurface key={area.title} tone="dark"
                style={{ minHeight: 240, padding: 24, display: "flex", flexDirection: "column" }}>
                <SurfaceIndex n={i + 1} tone="mist" />
                <h3 style={{
                  marginTop: 28, fontFamily: "var(--display)", fontWeight: 500,
                  fontSize: 22, lineHeight: 1.12,
                  letterSpacing: "-0.022em",
                  color: "var(--fg-inverse)",
                  fontVariationSettings: '"opsz" 36'
                }}>{area.title}</h3>
                <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.7, color: "rgba(244,248,249,0.7)" }}>{area.description}</p>
              </ResearchSurface>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
