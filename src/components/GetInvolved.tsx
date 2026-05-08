import Link from "next/link";

import { MotionSection } from "@/components/Motion";

export function GetInvolved() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="get-involved-heading"
    >
      <div className="halftone-panel mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            Get involved
          </p>
          <h2
            id="get-involved-heading"
            className="mt-5 max-w-3xl font-serif-display text-3xl leading-tight text-[var(--cloud-white)] sm:text-4xl"
          >
            Work with Afka on public evidence.
          </h2>
        </div>
        <Link
          href="/contact"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(244,248,249,0.14)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:border-[var(--deep-teal)]"
        >
          Contact
        </Link>
      </div>
    </MotionSection>
  );
}
