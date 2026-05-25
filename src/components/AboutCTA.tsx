import Link from "next/link";

import { MotionSection } from "@/components/Motion";

export function AboutCTA() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--afka-cloud-white)]"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <h2
            id="about-cta-heading"
            className="font-display font-medium text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.022em] text-[var(--fg)]"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            Research inquiries can be directed to Afka.
          </h2>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-[10px] text-[13px] font-semibold text-[var(--fg-inverse)] transition-colors hover:bg-[var(--afka-deep-teal-hover)] active:bg-[var(--afka-deep-teal-press)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
