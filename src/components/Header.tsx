"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About",    href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Insights", href: "/insights" },
  { label: "Contact",  href: "/contact" },
];

const PILL: React.CSSProperties = {
  minHeight: 56,
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "8px 16px 8px 14px",
  borderRadius: 9999,
  border: "1px solid rgba(244,248,249,0.12)",
  background: "rgba(13,31,34,0.72)",
  boxShadow: "0 22px 70px rgba(13,31,34,0.22)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: "fixed",
        insetInline: 0,
        top: 20,
        zIndex: 80,
        padding: "0 16px",
        color: "var(--fg-inverse)",
        display: "flex",
        justifyContent: "center",
      }}>
        <nav aria-label="Primary navigation" style={{
          display: "flex",
          width: "max-content",
          maxWidth: "calc(100vw - 32px)",
        }}>
          <div style={PILL}>

            {/* Wordmark */}
            <Link
              href="/"
              aria-label="Afka Digital Institute home"
              style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
            >
              <Image
                src="/images/afka-wordmark-light.png"
                alt="Afka Digital Institute"
                width={176}
                height={28}
                style={{ height: 28, width: "auto" }}
                priority
              />
            </Link>

            {/* Desktop nav links — hidden on mobile */}
            <div className="hidden md:flex" style={{ gap: 2 }}>
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: "8px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      borderRadius: 9999,
                      textDecoration: "none",
                      color: active ? "rgba(244,248,249,1)" : "rgba(244,248,249,0.7)",
                      background: active ? "rgba(244,248,249,0.10)" : "transparent",
                      transition: "background-color 220ms, color 220ms",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger — visible on mobile only */}
            <button
              className="flex md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 4px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ display: "block", width: 20, height: 1.5, background: "rgba(244,248,249,0.85)", borderRadius: 1 }} />
              <span style={{ display: "block", width: 20, height: 1.5, background: "rgba(244,248,249,0.85)", borderRadius: 1 }} />
              <span style={{ display: "block", width: 20, height: 1.5, background: "rgba(244,248,249,0.85)", borderRadius: 1 }} />
            </button>

          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgba(13,31,34,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              borderRadius: 9999,
              border: "1px solid rgba(244,248,249,0.14)",
              background: "transparent",
              color: "rgba(244,248,249,0.7)",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Nav links */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "14px 40px",
                    fontSize: 28,
                    fontWeight: 500,
                    fontFamily: "var(--display)",
                    letterSpacing: "-0.025em",
                    color: active ? "rgba(244,248,249,1)" : "rgba(244,248,249,0.7)",
                    textDecoration: "none",
                    borderRadius: 9999,
                    transition: "color 220ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom label */}
          <span style={{
            position: "absolute",
            bottom: 40,
            fontSize: 11,
            color: "rgba(244,248,249,0.28)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--sans)",
          }}>
            Afka Digital Institute
          </span>

        </div>
      )}
    </>
  );
}
