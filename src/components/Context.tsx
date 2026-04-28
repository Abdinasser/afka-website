import Link from "next/link";

export function Context() {
  return (
    <section
      id="mission"
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="context-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-28">
        <div className="relative overflow-hidden bg-[var(--primary)] p-8 text-white shadow-[0_26px_70px_rgba(23,35,49,0.18)] sm:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="relative">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Context
            </p>
            <h2
              id="context-heading"
              className="font-serif-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
            >
              A digital public sphere unseen by platforms.
            </h2>
            <div className="mt-10 border-t border-white/18 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                Mandate
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-100">
                Somali-language digital harm, moderation, AI governance, and
                technology policy.
              </p>
            </div>
          </div>
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
            Afka Digital Institute was created to fill that gap.
          </p>
          <Link
            href="/about"
            className="focus-ring inline-flex min-h-12 items-center justify-center border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Read the full context
          </Link>
        </div>
      </div>
    </section>
  );
}
