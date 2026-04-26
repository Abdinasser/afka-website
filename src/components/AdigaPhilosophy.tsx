import { adigaPhilosophy } from "@/data/site";

export function AdigaPhilosophy() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="adiga-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div className="border border-slate-200 bg-[var(--surface-soft)] p-6 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              {adigaPhilosophy.label}
            </p>
            <h2
              id="adiga-heading"
              className="font-serif-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              {adigaPhilosophy.heading}
            </h2>
          </div>

          <div className="grid gap-6 text-base leading-8 text-slate-700 sm:text-lg lg:grid-cols-2">
            <p className="border-l-2 border-[var(--sand)] pl-6 text-xl leading-9 text-slate-900">
              {adigaPhilosophy.intro}
            </p>
            <p>{adigaPhilosophy.support}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {adigaPhilosophy.acronym.map((item, index) => (
            <article
              key={`${item.letter}-${item.title}`}
              className="card-lift relative min-h-[280px] overflow-hidden border border-slate-200 bg-[var(--surface-soft)] p-6 sm:p-7"
            >
              <div
                className="absolute right-5 top-5 h-12 w-12 border border-slate-300/70"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  0{index + 1}
                </p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-serif-display text-6xl leading-none text-[var(--primary)]">
                    {item.letter}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <div className="my-6 h-px bg-slate-300" />
                <p className="text-sm leading-7 text-slate-700">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 border border-slate-200 bg-[var(--primary)] p-6 text-white sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div
            className="flex flex-wrap gap-2 text-sm font-semibold uppercase tracking-[0.16em]"
            aria-hidden="true"
          >
            {adigaPhilosophy.acronym.map((item) => (
              <span
                key={`marker-${item.title}`}
                className="flex h-10 w-10 items-center justify-center border border-white/18 bg-white/[0.08] text-[var(--sand)]"
              >
                {item.letter}
              </span>
            ))}
          </div>
          <p className="max-w-4xl text-base leading-8 text-slate-100 sm:text-lg">
            {adigaPhilosophy.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
