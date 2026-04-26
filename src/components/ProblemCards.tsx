import { problemCards } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ProblemCards() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <SectionHeading
              id="problem-heading"
              eyebrow="The Problem"
              title="Failures that remain under-documented."
            />
            <p className="mt-8 max-w-sm text-sm leading-7 text-slate-600">
              The visible public conversation is only one layer. The harms
              below it require language knowledge, platform testing, and
              disciplined documentation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {problemCards.map((card, index) => (
              <article
                key={card.title}
                className="card-lift relative overflow-hidden border border-slate-200 bg-[var(--surface-soft)] p-6 sm:p-8"
              >
                <p className="absolute right-6 top-5 font-serif-display text-6xl text-slate-300/60">
                  0{index + 1}
                </p>
                <div className="relative">
                  <div className="mb-8 h-2 w-16 bg-[var(--sand)]" />
                  <h3 className="font-serif-display max-w-[15rem] text-2xl leading-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
