"use client";

import { useEffect, useMemo, useState } from "react";

type FoundingBriefShareProps = {
  title: string;
};

function Icon({ type }: { type: "linkedin" | "x" | "facebook" | "email" | "copy" }) {
  if (type === "linkedin") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5.2 9.4h3.1v9.4H5.2zM6.8 5.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM11 9.4h3v1.3c.5-.8 1.5-1.6 3.1-1.6 2.2 0 3.7 1.4 3.7 4.3v5.4h-3.1v-5c0-1.4-.5-2.2-1.7-2.2-1.1 0-1.8.8-1.8 2.2v5H11z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
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

  if (type === "facebook") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14 8.2h2.3V5.4A14.5 14.5 0 0 0 13.5 5c-2.8 0-4.7 1.7-4.7 4.8v2.4H6v3.1h2.8V20h3.4v-4.7h3l.5-3.1h-3.5V10c0-1 .3-1.8 1.8-1.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.8 6.8h14.4v10.4H4.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m5.4 7.4 6.6 5.1 6.6-5.1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.2 14.8 7.7 16.3a3.2 3.2 0 0 1-4.5-4.5l3.1-3.1a3.2 3.2 0 0 1 4.5 0M14.8 9.2l1.5-1.5a3.2 3.2 0 0 1 4.5 4.5l-3.1 3.1a3.2 3.2 0 0 1-4.5 0M8.9 15.1l6.2-6.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function FoundingBriefShare({ title }: FoundingBriefShareProps) {
  const [shareUrl, setShareUrl] = useState("https://afkadigital.org/founding-brief");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href.split("#")[0]);
  }, []);

  const links = useMemo(
    () => [
      {
        label: "LinkedIn",
        type: "linkedin" as const,
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
      },
      {
        label: "X",
        type: "x" as const,
        href: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
      },
      {
        label: "Facebook",
        type: "facebook" as const,
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
      },
      {
        label: "Email",
        type: "email" as const,
        href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`
      }
    ],
    [shareUrl, title]
  );

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Share this brief">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.type === "email" ? undefined : "_blank"}
          rel={link.type === "email" ? undefined : "noreferrer"}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.28)] text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
          aria-label={`Share on ${link.label}`}
        >
          <Icon type={link.type} />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.28)] px-4 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
      >
        <Icon type="copy" />
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
