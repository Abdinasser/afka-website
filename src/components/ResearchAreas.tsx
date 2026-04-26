import { researchAreas } from "@/data/site";

export function ResearchAreas() {
  return (
    <section
      id="research"
      className="section-reveal relative overflow-hidden bg-[var(--ink)] text-white"
      aria-labelledby="research-heading"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
              Research
            </p>
            <h2
              id="research-heading"
              className="font-serif-display max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Our research focus
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-slate-300">
            Six research tracks create a practical evidence base for platforms,
            policymakers, civil society, and researchers.
          </p>
        </div>

        <div className="relative mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area, index) => (
            <article
              key={area.title}
              className="card-lift flex min-h-[300px] flex-col justify-between border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8"
            >
              <div>
                <p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                  0{index + 1}
                </p>
                <h3 className="font-serif-display text-2xl leading-tight text-white">
                  {area.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
