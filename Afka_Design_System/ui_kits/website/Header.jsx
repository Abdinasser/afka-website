/* eslint-disable */
const { useState: useStateHeader } = React;

window.Header = function Header({ route, setRoute }) {
  const [open, setOpen] = useStateHeader(false);
  return (
    <header style={{ position: "fixed", insetInline: 0, top: 20, zIndex: 80, padding: "0 16px", color: "var(--fg-inverse)" }}>
      <nav aria-label="Primary navigation" style={{ margin: "0 auto", display: "flex", width: "max-content", maxWidth: "100%", justifyContent: "center" }}>
        <div style={{
          minHeight: 56, display: "flex", alignItems: "center", gap: 14,
          padding: "8px 16px 8px 14px", borderRadius: 9999,
          border: "1px solid rgba(244,248,249,0.12)",
          background: "rgba(13,31,34,0.72)",
          boxShadow: "0 22px 70px rgba(13,31,34,0.22)",
          backdropFilter: "blur(20px)"
        }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setRoute("home"); }}
             aria-label="Afka Digital Institute home"
             style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <img src="../../assets/afka-wordmark-light.png" alt="Afka Digital Institute"
                 style={{ height: 28, width: "auto" }} />
          </a>
          <div style={{ display: "flex", gap: 2 }}>
            {AFKA_DATA.navLinks.map(link => {
              const active = route === link.href;
              return (
                <a key={link.href} href="#"
                   onClick={(e) => { e.preventDefault(); setRoute(link.href); }}
                   style={{
                     padding: "8px 16px", fontSize: 13, fontWeight: 500, borderRadius: 9999,
                     textDecoration: "none",
                     color: active ? "var(--fg-inverse)" : "rgba(244,248,249,0.7)",
                     background: active ? "rgba(244,248,249,0.10)" : "transparent",
                     transition: "background-color 220ms, color 220ms"
                   }}
                   onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(244,248,249,0.08)"; e.currentTarget.style.color = "var(--fg-inverse)"; } }}
                   onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(244,248,249,0.7)"; } }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
