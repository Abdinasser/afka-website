import Image from "next/image";

export function WhyNow() {
  return (
    <section
      className="section-reveal relative overflow-hidden bg-[var(--ink)] text-white"
      aria-labelledby="why-now-heading"
    >
      <Image
        src="/images/horn-of-africa-map-clean.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,35,49,0.95),rgba(23,35,49,0.72))]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-4xl border-l-2 border-[var(--sand)] pl-6 sm:pl-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            Why Now
          </p>
          <h2
            id="why-now-heading"
            className="font-serif-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Why this work matters now
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-100 sm:text-lg">
            The Somali-speaking world is entering a major digital and AI
            transition without the institutions needed to study, document, or
            challenge the harms emerging inside it. A credible evidence base on
            Somali-language platform performance, digital harm, and AI
            moderation failure can shape donor priorities, platform
            accountability, public policy, and civil society response.
          </p>
          <p className="mt-8 font-serif-display text-2xl leading-9 text-white">
            Afka exists to build that evidence base.
          </p>
        </div>
      </div>
    </section>
  );
}
