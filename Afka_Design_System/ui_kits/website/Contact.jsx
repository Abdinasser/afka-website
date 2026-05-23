/* eslint-disable */
const { useState: useStateContact } = React;

window.Contact = function Contact() {
  const [sent, setSent] = useStateContact(false);
  return (
    <section id="contact" style={{
      position: "relative", background: "var(--afka-cloud-white)"
    }}>
      <div style={{
        maxWidth: "80rem", margin: "0 auto",
        padding: "144px 40px 112px",
        display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 48
      }}>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 style={{
            marginTop: 20, fontFamily: "var(--display)", fontWeight: 500,
            fontSize: "clamp(1.9rem, 2.8vw, 2.8rem)", lineHeight: 1.08,
            letterSpacing: "-0.028em", color: "var(--fg)", maxWidth: "26ch",
            fontVariationSettings: '"opsz" 72'
          }}>Research inquiries and institutional contact.</h2>
          <p style={{ marginTop: 28, maxWidth: "32rem", fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)" }}>
            For research partnerships, media requests, platform engagement, or general institutional contact, write to Afka directly.
          </p>
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={`mailto:${AFKA_DATA.contactEmail}`} style={{
              display: "inline-flex", padding: "12px 20px", fontSize: 13, fontWeight: 600,
              borderRadius: 9999, border: "1px solid var(--fg)", color: "var(--fg)",
              textDecoration: "none"
            }}>{AFKA_DATA.contactEmail}</a>
            <SocialLinks tone="light" />
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <ResearchSurface style={{ padding: 28 }}>
            {sent ? (
              <div style={{ padding: "60px 20px", textAlign: "center" }}>
                <Eyebrow>Sent</Eyebrow>
                <h3 style={{
                  marginTop: 18, fontFamily: "var(--display)", fontWeight: 500,
                  fontSize: 24, lineHeight: 1.2, color: "var(--fg)",
                  letterSpacing: "-0.022em",
                  fontVariationSettings: '"opsz" 36'
                }}>Your inquiry is queued.</h3>
                <p style={{ marginTop: 14, fontSize: 14, color: "var(--fg-muted)", maxWidth: "40ch", margin: "14px auto 0" }}>
                  Afka will respond to {AFKA_DATA.contactEmail.split("@")[1]} contacts within five working days.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Label>Name<Input name="name" required /></Label>
                  <Label>Organization<Input name="organization" /></Label>
                </div>
                <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Label>Email<Input name="email" type="email" required /></Label>
                  <Label>Reason<Select name="reason" required>
                    <option value="">Select</option>
                    {AFKA_DATA.inquiryReasons.map(r => <option key={r} value={r}>{r}</option>)}
                  </Select></Label>
                </div>
                <Label style={{ marginTop: 16 }}>Message<Textarea name="message" rows={5} required /></Label>
                <button type="submit" style={{
                  marginTop: 20, minHeight: 48, width: "100%",
                  borderRadius: 9999, border: 0,
                  background: "var(--accent)", color: "var(--fg-inverse)",
                  fontSize: 13, fontWeight: 600, cursor: "pointer"
                }}>Email Afka</button>
              </form>
            )}
          </ResearchSurface>
        </div>
      </div>
    </section>
  );
};

function Label({ children, style = {} }) {
  return <label style={{
    display: "grid", gap: 8,
    fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--fg-muted)",
    ...style
  }}>{children}</label>;
}
function Input(props) {
  return <input {...props} style={{
    minHeight: 48, padding: "12px 16px", fontSize: 14, fontFamily: "var(--sans)",
    border: "1px solid var(--line)", background: "transparent",
    color: "var(--fg)", outline: "none", borderRadius: 0, textTransform: "none"
  }} />;
}
function Select({ children, ...props }) {
  return <select {...props} style={{
    minHeight: 48, padding: "12px 16px", fontSize: 14, fontFamily: "var(--sans)",
    border: "1px solid var(--line)", background: "transparent",
    color: "var(--fg)", outline: "none", borderRadius: 0, textTransform: "none"
  }}>{children}</select>;
}
function Textarea(props) {
  return <textarea {...props} style={{
    minHeight: 140, padding: "12px 16px", fontSize: 14, fontFamily: "var(--sans)",
    border: "1px solid var(--line)", background: "transparent",
    color: "var(--fg)", outline: "none", borderRadius: 0, lineHeight: 1.6,
    resize: "vertical", textTransform: "none"
  }} />;
}
