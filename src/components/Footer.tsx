import Image from "next/image";
import Link from "next/link";

import { MotionFooter } from "@/components/Motion";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail, footerLinks } from "@/data/site";

export function Footer() {
  return (
    <MotionFooter
      id="site-footer"
      className="relative isolate overflow-hidden border-t border-[rgba(244,248,249,0.10)] bg-[var(--afka-deep-ink)] text-[var(--cloud-white)]"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 82% 12%, rgba(10,92,107,0.16), transparent 30rem)",
          opacity: 0.5
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.22fr_0.55fr_1fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <Link
              href="/"
              className="focus-ring inline-flex rounded-sm"
              aria-label="Afka Digital Institute home"
            >
              <Image
                src="/images/afka-wordmark-light.png"
                alt="Afka Digital Institute"
                width={816}
                height={324}
                className="h-auto w-36 sm:w-44"
              />
            </Link>
            <p className="mt-8 max-w-md font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-tight text-[rgba(244,248,249,0.9)]">
              Evidence for Somali digital futures.
            </p>
            <p className="mt-5 max-w-md text-[13.5px] leading-7 text-[rgba(244,248,249,0.68)]">
              Independent research on platform accountability, Somali-language
              digital rights, and public-interest technology policy.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid content-start gap-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[rgba(244,248,249,0.48)]">
              Navigate
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring w-fit rounded-sm text-sm font-medium text-[rgba(244,248,249,0.76)] transition-colors hover:text-[var(--cloud-white)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-5 lg:justify-self-end lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[rgba(244,248,249,0.48)]">
              Research inquiries
            </p>
            <p className="max-w-sm text-sm leading-7 text-[rgba(244,248,249,0.68)] lg:ml-auto">
              For collaboration, case referrals, media inquiries, and policy
              conversations.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(244,248,249,0.34)] bg-[rgba(244,248,249,0.08)] px-5 py-3 text-sm font-semibold text-[var(--fg-inverse)] shadow-[0_16px_42px_rgba(0,0,0,0.2)] transition-colors hover:border-[rgba(244,248,249,0.5)] hover:bg-[rgba(244,248,249,0.12)]"
            >
              {contactEmail}
            </a>
            <div className="flex lg:justify-end">
              <SocialLinks tone="dark" compact />
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-[rgba(244,248,249,0.12)] pt-6 text-sm text-[rgba(244,248,249,0.52)] sm:grid-cols-[1fr_auto] sm:items-center">
          <p>Afka Digital Institute</p>
          <p>© 2026</p>
        </div>
      </div>
    </MotionFooter>
  );
}
