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
        <div className="grid gap-12 border-b border-[rgba(244,248,249,0.1)] pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
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
            <p className="mt-8 max-w-xl font-serif-display text-2xl leading-tight text-[rgba(244,248,249,0.86)] sm:text-[2rem]">
              Evidence for Somali digital futures.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:justify-items-end">
            <nav
              aria-label="Footer navigation"
              className="grid gap-4"
            >
              <p className="text-xs font-semibold uppercase text-[rgba(244,248,249,0.38)]">
                Navigate
              </p>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-sm text-sm font-medium text-[rgba(244,248,249,0.68)] transition-colors hover:text-[var(--cloud-white)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-5 sm:text-right">
              <p className="text-xs font-semibold uppercase text-[rgba(244,248,249,0.38)]">
                Contact
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="focus-ring inline-flex rounded-full border border-[rgba(244,248,249,0.14)] bg-[rgba(244,248,249,0.04)] px-5 py-3 text-sm font-medium text-[rgba(244,248,249,0.76)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--cloud-white)]"
              >
                {contactEmail}
              </a>
              <div className="flex sm:justify-end">
                <SocialLinks tone="dark" compact />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-6 text-sm text-[rgba(244,248,249,0.42)] sm:grid-cols-[1fr_auto] sm:items-center">
          <p>Afka Digital Institute</p>
          <p>© 2026</p>
        </div>
      </div>
    </MotionFooter>
  );
}
