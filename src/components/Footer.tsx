import Image from "next/image";
import Link from "next/link";

import { MotionFooter } from "@/components/Motion";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail, footerLinks } from "@/data/site";

export function Footer() {
  return (
    <MotionFooter
      id="site-footer"
      className="footer-architecture relative overflow-hidden border-t border-[rgba(244,248,249,0.1)] bg-[var(--deep-ink)] text-[var(--cloud-white)]"
    >
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
                alt="Afka"
                width={816}
                height={324}
                className="h-auto w-36 sm:w-44"
              />
            </Link>
            <p className="mt-8 max-w-md font-serif-display text-2xl leading-tight text-[rgba(244,248,249,0.9)] sm:text-[2rem]">
              Evidence for Somali digital futures.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[rgba(244,248,249,0.68)]">
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
              className="focus-ring cta-text-light inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(244,248,249,0.18)] bg-[rgba(244,248,249,0.05)] px-5 py-3 text-sm font-semibold shadow-[0_16px_42px_rgba(0,0,0,0.16)] transition-colors hover:border-[rgba(200,232,237,0.48)] hover:bg-[rgba(200,232,237,0.08)]"
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
