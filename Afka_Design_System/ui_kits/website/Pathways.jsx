/* eslint-disable */
window.Pathways = function Pathways({ setRoute }) {
  return (
    <section aria-labelledby="pathways-heading" style={{
      position: "relative", zIndex: 10, marginTop: -80, background: "transparent"
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          position: "relative",
          background: "linear-gradient(145deg, rgba(244,248,249,0.86), rgba(200,232,237,0.7)), radial-gradient(ellipse at 86% 10%, rgba(10,92,107,0.12), transparent 24rem)",
          border: "1px solid rgba(244,248,249,0.14)",
          padding: 20,
          boxShadow: "0 28px 90px rgba(13,31,34,0.16)",
          backdropFilter: "blur(20px)",
          overflow: "hidden"
        }}>
          {/* Signal field decoration */}
          <span aria-hidden="true" style={{
            position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none",
            background:
              "radial-gradient(circle at 22% 28%, rgba(10,92,107,0.08), transparent 24%)," +
              "radial-gradient(circle at 76% 44%, rgba(13,31,34,0.12), transparent 34%)," +
              "repeating-linear-gradient(90deg, rgba(10,92,107,0.18) 0 1px, transparent 1px 18px)",
            opacity: 0.45
          }} />
          <div style={{ display: "grid", gridTemplateColumns: "0.55fr 1.45fr", gap: 20, alignItems: "center" }}>
            <div style={{ padding: "0 4px" }}>
              <Eyebrow>Pathways</Eyebrow>
              <h2 id="pathways-heading" style={{
                marginTop: 8, fontFamily: "var(--display)", fontWeight: 500,
                fontSize: 26, lineHeight: 1.1, color: "var(--fg)",
                letterSpacing: "-0.025em", fontVariationSettings: '"opsz" 36'
              }}>Move through the work.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {AFKA_DATA.pathways.map((p, i) => (
                <a key={p.to} href="#"
                   onClick={(e) => { e.preventDefault(); setRoute(p.to); }}
                   style={{
                     textDecoration: "none", color: "var(--fg)",
                     marginTop: (i === 1 || i === 3) ? 12 : 0
                   }}
                >
                  <ResearchSurface accent={!!p.emphasis} style={{ minHeight: 120, padding: 18 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{p.label}</div>
                    <div style={{ marginTop: 12, fontSize: 12, lineHeight: 1.55, color: "var(--fg-muted)" }}>{p.note}</div>
                    <div style={{ marginTop: 20, height: 1, width: 40, background: p.emphasis ? "var(--accent)" : "var(--line)" }} />
                  </ResearchSurface>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
