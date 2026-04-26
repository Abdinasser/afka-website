import { adigaPhilosophy } from "@/data/site";

export function AdigaPhilosophy() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="adiga-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden border-y border-slate-200 bg-[var(--surface-soft)] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(52,73,94,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,73,94,0.06)_1px,transparent_1px)] bg-[size:42px_42px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.56fr_1.44fr]">
            <div className="flex flex-col justify-between gap-8">
              <div>
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
              <div className="border-l-2 border-[var(--sand)] bg-white/70 py-4 pl-5 pr-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Public name
                </p>
                <p className="mt-3 font-serif-display text-2xl leading-9 text-[var(--primary)]">
                  {adigaPhilosophy.publicStatement}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3 md:grid-cols-3">
                {adigaPhilosophy.meanings.map((meaning) => (
                  <article
                    key={meaning.title}
                    className="border border-slate-200 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                      Meaning
                    </p>
                    <h3 className="mt-4 font-serif-display text-2xl leading-tight text-slate-950">
                      {meaning.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {meaning.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.44fr_0.56fr]">
                <aside className="relative overflow-hidden bg-[var(--primary)] p-6 text-white sm:p-7">
                  <div
                    className="absolute right-5 top-5 h-16 w-16 border border-white/18"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p className="max-w-xs text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                      Founding philosophy
                    </p>
                    <p className="mt-5 text-lg leading-8 text-slate-100">
                      {adigaPhilosophy.philosophyStatement}
                    </p>
                    <div className="mt-7 border-t border-white/18 pt-6">
                      <p className="text-sm leading-7 text-slate-300">
                        In Somali,{" "}
                        <span className="font-semibold text-white">
                          {adigaPhilosophy.somaliWord}
                        </span>{" "}
                        means
                      </p>
                      <p className="font-serif-display text-6xl leading-none text-[var(--sand)]">
                        {adigaPhilosophy.translatedWord}
                      </p>
                    </div>
                  </div>
                </aside>

                <div className="border border-slate-200 bg-white p-6 sm:p-7">
                  <p className="font-serif-display text-2xl leading-9 text-slate-950">
                    {adigaPhilosophy.peopleIntro}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {adigaPhilosophy.people.map((person) => (
                      <li
                        key={person}
                        className="border border-slate-200 bg-[var(--surface-soft)] px-3 py-2 text-sm leading-6 text-slate-700"
                      >
                        {person}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="border border-[rgba(200,161,109,0.45)] bg-white/80 p-5 font-serif-display text-2xl leading-9 text-[var(--primary)]">
                {adigaPhilosophy.closing}
              </p>
            </div>
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
      </div>
    </section>
  );
}
