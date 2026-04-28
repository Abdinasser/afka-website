import { SectionHeading } from "@/components/SectionHeading";
import { aboutProblemCards } from "@/data/site";

export function AboutProblem() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="about-problem-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <SectionHeading
              id="about-problem-heading"
              eyebrow="The Problem"
              title="The problem Afka studies"
            />
            <p className="mt-8 max-w-sm text-sm leading-7 text-slate-600">
              Afka studies the gap between the scale of Somali-language digital
              life and the evidence available to understand how platforms,
              monetization systems, and AI tools affect it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutProblemCards.map((card, index) => (
              <article
                key={card.title}
                className="card-lift relative overflow-hidden border border-slate-200 bg-[var(--surface-soft)] p-6"
              >
                <p className="absolute right-5 top-4 font-serif-display text-5xl text-slate-300/60">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="relative">
                  <div className="mb-7 h-2 w-14 bg-[var(--sand)]" />
                  <h3 className="font-serif-display max-w-[15rem] text-2xl leading-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-700">
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
