import Link from "next/link";

import { MotionSection } from "@/components/Motion";

export function AboutCTA() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <h2
            id="about-cta-heading"
            className="font-serif-display text-2xl leading-tight text-[var(--deep-ink)] sm:text-3xl"
          >
            Research inquiries can be directed to Afka.
          </h2>
          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--deep-teal)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:bg-[var(--deep-ink)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
