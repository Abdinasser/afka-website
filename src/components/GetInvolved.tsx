import Link from "next/link";

import { MotionSection } from "@/components/Motion";

export function GetInvolved() {
  return (
    <MotionSection
      className="section-reveal relative isolate overflow-hidden bg-[var(--afka-deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="get-involved-heading"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(10,92,107,0.62) 0 1.35px, transparent 1.65px), radial-gradient(circle, rgba(244,248,249,0.28) 0 1px, transparent 1.4px)",
          backgroundPosition: "0 0, 9px 9px",
          backgroundSize: "18px 18px, 18px 18px",
          opacity: 0.42,
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)",
          maskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)"
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
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
