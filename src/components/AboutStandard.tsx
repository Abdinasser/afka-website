import { independencePrinciples } from "@/data/site";

export function AboutStandard() {
  return (
    <section
      className="section-reveal bg-[var(--ink)] text-white"
      aria-labelledby="about-standard-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
              Independence
            </p>
            <h2
              id="about-standard-heading"
              className="font-serif-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Independent, nonpartisan, evidence-led.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Afka Digital Institute is designed to protect its research from
              political, commercial, and platform interference. Its standard is
              careful documentation, clear sourcing, and public-interest
              analysis.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {independencePrinciples.map((principle) => (
              <article
                key={principle.title}
                className="border border-white/12 bg-white/[0.06] p-5"
              >
                <h3 className="font-serif-display text-2xl leading-tight text-white">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
