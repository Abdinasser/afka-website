/* eslint-disable */
const { useState, useEffect, useRef } = React;

/* ---------- Tiny primitives shared across pages ---------- */

window.Eyebrow = function Eyebrow({ children, tone = "accent", className = "" }) {
  const color = tone === "mist" ? "var(--afka-mist-blue)" : "var(--accent)";
  return (
    <span className={className} style={{
      fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.08em",
      textTransform: "uppercase", color
    }}>{children}</span>
  );
};

window.SurfaceIndex = function SurfaceIndex({ n, tone = "accent" }) {
  const color = tone === "mist" ? "var(--afka-mist-blue)" : "var(--accent)";
  return (
    <span style={{
      display: "inline-flex", minWidth: "2.6rem",
      alignItems: "center", justifyContent: "center",
      borderBottom: `1px solid ${color}`, paddingBottom: 6,
      color, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase"
    }}>{String(n).padStart(2, "0")}</span>
  );
};

window.EditorialRule = function EditorialRule({ tone = "light" }) {
  return <hr style={{
    height: 1, border: 0, margin: 0,
    background: tone === "dark" ? "rgba(244,248,249,0.18)" : "var(--line-soft)"
  }} />;
};

/* ResearchSurface — the workhorse card. Three modes:
   - default light
   - accent (data-accent="true")
   - dark   (data-tone="dark")
*/
window.ResearchSurface = function ResearchSurface({ accent = false, tone = "light", className = "", children, style = {} }) {
  const base = {
    position: "relative", isolation: "isolate", overflow: "hidden",
    padding: "20px 22px",
    transition: "border-color 220ms cubic-bezier(.22,1,.36,1), background-color 220ms, box-shadow 220ms, transform 220ms"
  };
  let look;
  if (tone === "dark") {
    look = {
      border: "1px solid rgba(244,248,249,0.16)",
      background:
        "linear-gradient(150deg, rgba(244,248,249,0.10), rgba(13,31,34,0.55) 70%)," +
        "radial-gradient(circle at 82% 16%, rgba(10,92,107,0.22), transparent 18rem)," +
        "rgba(20, 36, 40, 0.85)",
      color: "var(--fg-inverse)",
      boxShadow: "0 24px 82px rgba(13,31,34,0.32), inset 0 1px 0 rgba(244,248,249,0.10)"
    };
  } else if (accent) {
    look = {
      border: "1px solid rgba(10,92,107,0.42)",
      background:
        "linear-gradient(145deg, rgba(244,248,249,0.92), rgba(10,92,107,0.10))," +
        "rgba(244,248,249,0.82)",
      boxShadow: "0 22px 68px rgba(13,31,34,0.11), inset 0 0 0 1px rgba(10,92,107,0.06)",
      backdropFilter: "blur(16px)"
    };
  } else {
    look = {
      border: "1px solid var(--line)",
      background:
        "linear-gradient(145deg, rgba(244,248,249,0.9), rgba(200,232,237,0.7))," +
        "rgba(244,248,249,0.78)",
      boxShadow: "0 20px 62px rgba(13,31,34,0.08), inset 0 1px 0 rgba(244,248,249,0.44)",
      backdropFilter: "blur(16px)"
    };
  }
  return (
    <div className={className} style={{ ...base, ...look, ...style }}>
      {/* Pinstripe grid pseudo */}
      <span aria-hidden="true" style={{
        position: "absolute", inset: -1, zIndex: -2, pointerEvents: "none",
        background: tone === "dark"
          ? "repeating-linear-gradient(90deg, rgba(244,248,249,0.055) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(244,248,249,0.04) 0 1px, transparent 1px 30px)"
          : "repeating-linear-gradient(90deg, rgba(13,31,34,0.055) 0 1px, transparent 1px 22px), repeating-linear-gradient(0deg, rgba(13,31,34,0.035) 0 1px, transparent 1px 28px)",
        opacity: tone === "dark" ? 0.62 : 0.58
      }} />
      {children}
    </div>
  );
};

/* Button: primary | outline | ghost | light | glass */
window.Button = function Button({ kind = "primary", size = "md", onClick, children, type = "button" }) {
  const sz = size === "sm"
    ? { minHeight: 36, padding: "6px 16px", fontSize: 12 }
    : { minHeight: 44, padding: "10px 22px", fontSize: 13 };
  const palettes = {
    primary: { background: "var(--accent)", color: "var(--fg-inverse)", border: "1px solid transparent" },
    outline: { background: "transparent", color: "var(--fg)", border: "1px solid var(--fg)" },
    ghost:   { background: "transparent", color: "var(--fg-muted)", border: "1px solid transparent" },
    light:   { background: "var(--fg-inverse)", color: "var(--fg)", border: "1px solid rgba(244,248,249,0.94)", boxShadow: "0 20px 62px rgba(0,0,0,0.34)" },
    glass:   { background: "rgba(13,31,34,0.5)", color: "var(--fg-inverse)", border: "1px solid rgba(244,248,249,0.34)", backdropFilter: "blur(20px)" }
  };
  return (
    <button type={type} onClick={onClick} style={{
      ...sz, ...palettes[kind],
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      borderRadius: 9999, cursor: "pointer", fontWeight: 600, fontFamily: "var(--sans)",
      letterSpacing: "0.005em",
      transition: "background-color 220ms cubic-bezier(.22,1,.36,1), color 220ms, border-color 220ms"
    }}>{children}</button>
  );
};

/* SocialIcon — lifted from src/components/SocialLinks.tsx */
window.SocialIcon = function SocialIcon({ label }) {
  if (label === "Instagram")
    return <svg width="16" height="16" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="16.7" cy="7.3" r="1" fill="currentColor"/></svg>;
  if (label === "LinkedIn")
    return <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.2 9.4h3.1v9.4H5.2zM6.8 5.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM11 9.4h3v1.3c.5-.8 1.5-1.6 3.1-1.6 2.2 0 3.7 1.4 3.7 4.3v5.4h-3.1v-5c0-1.4-.5-2.2-1.7-2.2-1.1 0-1.8.8-1.8 2.2v5H11z"/></svg>;
  if (label === "X")
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m5 5 10.8 14h3.2L8.2 5zm0 14 6.2-6.2M13.1 11 19 5"/></svg>;
  return <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M14 8.2h2.3V5.4A14.5 14.5 0 0 0 13.5 5c-2.8 0-4.7 1.7-4.7 4.8v2.4H6v3.1h2.8V20h3.4v-4.7h3l.5-3.1h-3.5V10c0-1 .3-1.8 1.8-1.8Z"/></svg>;
};

window.SocialLinks = function SocialLinks({ tone = "dark" }) {
  const isDark = tone === "dark";
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {AFKA_DATA.socialLinks.map(s => (
        <a key={s.label} href={s.href}
           aria-label={s.label}
           style={{
             width: 36, height: 36, borderRadius: 9999,
             display: "inline-flex", alignItems: "center", justifyContent: "center",
             border: isDark ? "1px solid rgba(244,248,249,0.14)" : "1px solid var(--line)",
             color: isDark ? "rgba(244,248,249,0.66)" : "var(--fg-muted)",
             transition: "color 220ms, border-color 220ms"
           }}>
          <SocialIcon label={s.label} />
        </a>
      ))}
    </div>
  );
};
