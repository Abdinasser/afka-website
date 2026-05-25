import Image from "next/image";
import Link from "next/link";

import { MotionFooter } from "@/components/Motion";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail, footerLinks } from "@/data/site";

export function Footer() {
  return (
    <MotionFooter
      id="site-footer"
      className="relative overflow-hidden border-t border-[rgba(244,248,249,0.10)] bg-[var(--afka-deep-ink)] text-[var(--fg-inverse)]"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 82% 12%, rgba(10,92,107,0.16), transparent 30rem)",
          opacity: 0.5,
          pointerEvents: "none"
        }}
      />
      <div className="relative z-10 mx-auto max-w-[80rem] px-5 pt-14 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.22fr_0.55fr_1fr] lg:gap-16">
          <div className="max-w-[32rem]">
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
                className="h-auto w-[176px]"
              />
            </Link>
            <p
              className="mt-8 max-w-[28rem] font-display font-medium text-[30px] leading-[1.08] tracking-[-0.028em] text-[rgba(244,248,249,0.92)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Evidence for Somali digital futures.
            </p>
            <p className="mt-5 max-w-[28rem] text-[13.5px] leading-[1.7] text-[rgba(244,248,249,0.66)]">
              Independent research on platform accountability, Somali-language
              digital rights, and public-interest technology policy.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid content-start gap-4"
          >
            <p
              className="text-[10.5px] font-semibold uppercase text-[rgba(244,248,249,0.5)]"
              style={{ letterSpacing: "0.08em" }}
            >
              Navigate
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring w-fit rounded-sm text-[13.5px] font-medium text-[rgba(244,248,249,0.76)] transition-colors hover:text-[var(--fg-inverse)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="grid content-start gap-5 lg:justify-self-end lg:text-right">
            <p
              className="text-[10.5px] font-semibold uppercase text-[rgba(244,248,249,0.5)]"
              style={{ letterSpacing: "0.08em" }}
            >
              Research inquiries
            </p>
            <p className="max-w-[22rem] text-[13.5px] leading-[1.7] text-[rgba(244,248,249,0.66)] lg:ml-auto">
              For collaboration, case referrals, media inquiries, and policy
              conversations.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring inline-flex items-center justify-center rounded-full border border-[rgba(244,248,249,0.34)] bg-[rgba(244,248,249,0.08)] px-5 py-3 text-[13px] font-semibold text-[var(--fg-inverse)] shadow-[0_16px_42px_rgba(0,0,0,0.2)] transition-colors hover:border-[rgba(244,248,249,0.5)] hover:bg-[rgba(244,248,249,0.12)] lg:self-end"
            >
              {contactEmail}
            </a>
            <div className="flex lg:justify-end">
              <SocialLinks tone="dark" compact />
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-[rgba(244,248,249,0.12)] pt-6 text-[13px] text-[rgba(244,248,249,0.52)] sm:grid-cols-[1fr_auto] sm:items-center">
          <p>Afka Digital Institute</p>
          <p>© 2026</p>
        </div>
      </div>
    </MotionFooter>
  );
}
