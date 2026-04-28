export function AboutContext() {
  return (
    <section
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="about-context-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Context
          </p>
          <h2
            id="about-context-heading"
            className="font-serif-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            A digital public sphere with little evidence
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
          <p className="border-l-2 border-[var(--sand)] pl-6 text-xl leading-9 text-slate-900">
            The Somali-speaking world spans tens of millions across the Horn of
            Africa and the diaspora. Public debate, identity, business, culture,
            influence, and harm are increasingly shaped through digital
            platforms.
          </p>
          <p>
            But the research and policy infrastructure needed to understand this
            environment has not kept pace.
          </p>
          <p>
            Somali research institutions have produced important work on
            governance, security, humanitarian response, development, economics,
            and political economy. But no institution has made digital harm,
            platform accountability, Somali-language moderation, AI governance,
            or technology policy its central mandate.
          </p>
          <p className="font-serif-display text-2xl leading-9 text-[var(--primary)]">
            Afka was created to fill that gap.
          </p>
        </div>
      </div>
    </section>
  );
}
