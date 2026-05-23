/* eslint-disable */
window.Footer = function Footer({ setRoute }) {
  return (
    <footer id="site-footer" style={{
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(244,248,249,0.10)",
      background: "var(--afka-deep-ink)", color: "var(--fg-inverse)"
    }}>
      <span aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 82% 12%, rgba(10,92,107,0.16), transparent 30rem)",
        opacity: 0.5, pointerEvents: "none"
      }} />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "56px 40px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.22fr 0.55fr 1fr", gap: 64, paddingBottom: 48 }}>
          <div style={{ maxWidth: "32rem" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setRoute("home"); }} aria-label="Afka home" style={{ textDecoration: "none", display: "inline-flex" }}>
              <img src="../../assets/afka-wordmark-light.png" alt="Afka Digital Institute"
                   style={{ height: "auto", width: 176 }} />
            </a>
            <p style={{
              marginTop: 32, maxWidth: "28rem",
              fontFamily: "var(--display)", fontWeight: 500, fontSize: 30, lineHeight: 1.08,
              letterSpacing: "-0.028em", color: "rgba(244,248,249,0.92)",
              fontVariationSettings: '"opsz" 72'
            }}>Evidence for Somali digital futures.</p>
            <p style={{ marginTop: 20, maxWidth: "28rem", fontSize: 13.5, lineHeight: 1.7, color: "rgba(244,248,249,0.66)" }}>
              Independent research on platform accountability, Somali‑language digital rights, and public‑interest technology policy.
            </p>
          </div>

          <nav aria-label="Footer navigation" style={{ display: "grid", alignContent: "start", gap: 16 }}>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(244,248,249,0.5)" }}>Navigate</p>
            {AFKA_DATA.navLinks.map(l => (
              <a key={l.href} href="#" onClick={(e) => { e.preventDefault(); setRoute(l.href); }}
                 style={{ width: "fit-content", fontSize: 13.5, fontWeight: 500, color: "rgba(244,248,249,0.76)", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "grid", gap: 20, alignContent: "start", justifySelf: "end", textAlign: "right" }}>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(244,248,249,0.5)" }}>Research inquiries</p>
            <p style={{ maxWidth: "22rem", fontSize: 13.5, lineHeight: 1.7, color: "rgba(244,248,249,0.66)", marginLeft: "auto" }}>For collaboration, case referrals, media inquiries, and policy conversations.</p>
            <a href={`mailto:${AFKA_DATA.contactEmail}`} style={{
              display: "inline-flex", alignSelf: "end",
              padding: "12px 20px", fontSize: 13, fontWeight: 600,
              borderRadius: 9999,
              border: "1px solid rgba(244,248,249,0.34)",
              background: "rgba(244,248,249,0.08)",
              color: "var(--fg-inverse)", textDecoration: "none",
              boxShadow: "0 16px 42px rgba(0,0,0,0.2)"
            }}>{AFKA_DATA.contactEmail}</a>
            <div style={{ display: "flex", justifyContent: "flex-end" }}><SocialLinks tone="dark" /></div>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: 16, paddingTop: 24,
          borderTop: "1px solid rgba(244,248,249,0.12)",
          fontSize: 13, color: "rgba(244,248,249,0.52)"
        }}>
          <p>Afka Digital Institute</p>
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  );
};
