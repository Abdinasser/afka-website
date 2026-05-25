"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  return (
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
      <nav
        aria-label="Primary navigation"
        style={{
          display: "flex",
          width: "max-content",
          maxWidth: "calc(100vw - 32px)",
        }}
      >
        <div style={PILL}>
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

          <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
        </div>
      </nav>
    </header>
  );
}
