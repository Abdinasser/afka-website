import Link from "next/link";

import { MotionSection } from "@/components/Motion";

export function HomeWhyAfka() {
  return (
    <MotionSection
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="home-why-afka-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
        <div>
          <p
            className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
            style={{ letterSpacing: "0.08em" }}
          >
            Why Afka
          </p>
          <h2
            id="home-why-afka-heading"
            className="mt-5 max-w-3xl font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg)]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            Afka begins with language.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
            The name grounds the institute in speech, context, and the lived
            digital experience of Somali-speaking communities.
          </p>
        </div>
        <Link
          href="/about"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--deep-ink)] px-6 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
        >
          Read about Afka
        </Link>
      </div>
    </MotionSection>
  );
}
