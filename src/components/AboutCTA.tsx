import Link from "next/link";

export function AboutCTA() {
  return (
    <section
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(23,35,49,0.07)] sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Get Involved
            </p>
            <h2
              id="about-cta-heading"
              className="font-serif-display text-3xl leading-tight text-slate-950 sm:text-4xl"
            >
              Work with Afka on evidence for Somali-language digital life.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="focus-ring mt-7 inline-flex min-h-12 shrink-0 items-center justify-center border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 md:mt-0"
          >
            Contact Afka
          </Link>
        </div>
      </div>
    </section>
  );
}
