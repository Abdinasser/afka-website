/* eslint-disable */
window.Outputs = function Outputs() {
  return (
    <section id="outputs" aria-labelledby="outputs-heading" style={{
      position: "relative", background: "var(--afka-cloud-white)", overflow: "clip"
    }}>
      <div style={{
        maxWidth: "80rem", margin: "0 auto",
        padding: "144px 40px 112px"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.58fr 1.42fr", gap: 48, alignItems: "start" }}>
          <div>
            <Eyebrow>Outputs</Eyebrow>
            <h2 id="outputs-heading" style={{
              marginTop: 20, fontFamily: "var(--display)", fontWeight: 500,
              fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.05,
              letterSpacing: "-0.028em", color: "var(--fg)",
              fontVariationSettings: '"opsz" 72'
            }}>What Afka will produce.</h2>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)", maxWidth: "30rem" }}>Afka will translate documented cases, platform behaviour, and field evidence into research and policy work for public use.</p>
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}>
            {AFKA_DATA.outputs.map((item, i) => (
              <ResearchSurface key={item.title} accent={i === 0}
                style={{ minHeight: 260, padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16 }}>
                  <span style={{
                    padding: "5px 12px", borderRadius: 9999,
                    border: "1px solid var(--line)",
                    background: "rgba(200,232,237,0.42)",
                    fontSize: 10.5, fontWeight: 600, letterSpacing: "0.05em",
                    textTransform: "uppercase", color: "var(--accent)"
                  }}>{item.label}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(13,31,34,0.38)" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={{
                  marginTop: 32, fontFamily: "var(--display)", fontWeight: 500,
                  fontSize: 24, lineHeight: 1.12,
                  letterSpacing: "-0.022em", color: "var(--fg)",
                  fontVariationSettings: '"opsz" 36'
                }}>{item.title}</h3>
                <p style={{ marginTop: 20, fontSize: 13.5, lineHeight: 1.7, color: "var(--fg-muted)" }}>{item.description}</p>
              </ResearchSurface>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
