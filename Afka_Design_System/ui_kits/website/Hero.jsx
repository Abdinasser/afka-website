/* eslint-disable */
window.Hero = function Hero({ setRoute }) {
  const h = AFKA_DATA.hero;
  return (
    <section id="top" style={{
      position: "relative", isolation: "isolate", minHeight: "100vh",
      overflow: "hidden", background: "var(--afka-deep-ink)", color: "var(--fg-inverse)"
    }}>
      {/* Photographic ground */}
      <img src="../../assets/afka-hero-code-field.jpg" alt=""
           style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center top",
                    filter: "saturate(0.98) contrast(1.06) brightness(1.05)" }} />
      {/* Scrim */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1,
        background:
          "radial-gradient(ellipse at 50% 49%, rgba(13,31,34,0.58) 0%, rgba(13,31,34,0.5) 27%, rgba(13,31,34,0.2) 49%, transparent 68%), " +
          "linear-gradient(180deg, rgba(13,31,34,0.02) 0%, rgba(13,31,34,0.08) 31%, rgba(13,31,34,0.34) 66%, rgba(13,31,34,0.76) 100%)"
      }} />
      {/* Vignette */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 4,
        background:
          "radial-gradient(ellipse at 50% 43%, transparent 0%, rgba(13,31,34,0.08) 48%, rgba(13,31,34,0.46) 100%), " +
          "linear-gradient(180deg, transparent 0%, transparent 57%, rgba(13,31,34,0.48) 84%, rgba(13,31,34,0.86) 100%)",
        opacity: 0.82
      }} />
      {/* Copy */}
      <div style={{
        position: "relative", zIndex: 10, margin: "0 auto", display: "flex",
        minHeight: "100vh", maxWidth: "80rem",
        alignItems: "center", justifyContent: "center",
        padding: "192px 40px 144px",
        textAlign: "center"
      }}>
        <div style={{ width: "100%", maxWidth: "62rem" }}>
          <p style={{
            margin: "0 auto 40px", width: "fit-content",
            borderRadius: 9999, border: "1px solid rgba(244,248,249,0.12)",
            background: "rgba(244,248,249,0.06)",
            padding: "8px 16px", fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            color: "rgba(244,248,249,0.68)", backdropFilter: "blur(20px)"
          }}>{h.eyebrow}</p>
          <h1 style={{
            margin: "0 auto", maxWidth: "58rem",
            fontFamily: "var(--display)", fontWeight: 500,
            fontSize: "clamp(2.4rem, 5vw, 4.4rem)", lineHeight: 1.0,
            letterSpacing: "-0.035em",
            color: "var(--fg-inverse)", textWrap: "balance",
            fontVariationSettings: '"opsz" 96'
          }}>{h.title}</h1>
          <p style={{
            margin: "40px auto 0", maxWidth: "48rem",
            fontSize: 18, lineHeight: 1.65, color: "rgba(244,248,249,0.7)"
          }}>{h.body}</p>
          <div style={{ marginTop: 48, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button kind="light" onClick={() => setRoute(h.primary.to)}>{h.primary.label}</Button>
            <Button kind="glass" onClick={() => setRoute(h.secondary.to)}>{h.secondary.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
