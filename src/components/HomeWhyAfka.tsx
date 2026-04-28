import Link from "next/link";

export function HomeWhyAfka() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="home-why-afka-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden border border-[rgba(200,161,109,0.38)] bg-[var(--surface-soft)] p-6 shadow-[0_18px_50px_rgba(23,35,49,0.07)] sm:p-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(52,73,94,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,73,94,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="relative">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Why Afka
            </p>
            <h2
              id="home-why-afka-heading"
              className="font-serif-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              A name rooted in language, people, and evidence.
            </h2>
          </div>

          <div className="relative mt-7 lg:mt-0">
            <p className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              Afka means &ldquo;the language&rdquo; in Somali. Behind the
              public name sits the ADIGA philosophy: a reminder that digital
              policy and platform accountability must begin with the people
              affected by these systems.
            </p>
            <Link
              href="/about"
              className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Read About Afka
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
