import { independencePrinciples } from "@/data/site";

export function Independence() {
  return (
    <section
      id="independence"
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="independence-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden bg-[var(--ink)] p-6 text-white shadow-[0_24px_64px_rgba(23,35,49,0.16)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                Independence
              </p>
              <h2
                id="independence-heading"
                className="font-serif-display text-3xl leading-tight sm:text-4xl"
              >
                Independent, nonpartisan, evidence-led.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Afka is designed to protect its research from political,
                commercial, and platform interference.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {independencePrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="border border-white/12 bg-white/[0.07] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sand)]">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
