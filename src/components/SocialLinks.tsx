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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.8a3 3 0 0 0-3 3v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3H7.8ZM12 7.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Zm5-2.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
          fill="currentColor"
        />
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
          d="M17.53 3h3.1l-6.77 7.73L22 21h-6.24l-4.88-6.39L5.18 21H2.07l7.24-8.27L2 3h6.39l4.4 5.82L17.53 3Zm-1.09 16.1h1.72L7.7 4.8H5.86l10.58 14.3Z"
          fill="currentColor"
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
