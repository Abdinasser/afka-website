import { socialLinks } from "@/data/site";

type SocialLinksProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

function SocialIcon({ label }: { label: string }) {
  const common = "h-4 w-4";

  if (label === "Instagram") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5.2 9.4h3.1v9.4H5.2zM6.8 5.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM11 9.4h3v1.3c.5-.8 1.5-1.6 3.1-1.6 2.2 0 3.7 1.4 3.7 4.3v5.4h-3.1v-5c0-1.4-.5-2.2-1.7-2.2-1.1 0-1.8.8-1.8 2.2v5H11z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m5 5 10.8 14h3.2L8.2 5zm0 14 6.2-6.2M13.1 11 19 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 8.2h2.3V5.4A14.5 14.5 0 0 0 13.5 5c-2.8 0-4.7 1.7-4.7 4.8v2.4H6v3.1h2.8V20h3.4v-4.7h3l.5-3.1h-3.5V10c0-1 .3-1.8 1.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SocialLinks({ tone = "dark", compact = false }: SocialLinksProps) {
  const isDark = tone === "dark";

  return (
    <div className="flex flex-wrap gap-2" aria-label="Social media links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`focus-ring inline-flex items-center justify-center rounded-full border transition-colors ${
            compact ? "h-9 w-9" : "h-10 w-10"
          } ${
            isDark
              ? "border-[rgba(244,248,249,0.12)] text-[rgba(244,248,249,0.62)] hover:border-[var(--deep-teal)] hover:text-[var(--cloud-white)]"
              : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--deep-teal)] hover:text-[var(--deep-ink)]"
          }`}
          aria-label={link.label}
        >
          <SocialIcon label={link.label} />
        </a>
      ))}
    </div>
  );
}
