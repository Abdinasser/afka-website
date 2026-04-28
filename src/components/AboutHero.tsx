import Image from "next/image";

export function AboutHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--ink)] text-white"
      aria-labelledby="about-hero-heading"
    >
      <Image
        src="/images/horn-of-africa-map-clean.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-20 object-cover object-center opacity-[0.42]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,35,49,0.96)_0%,rgba(23,35,49,0.86)_48%,rgba(23,35,49,0.58)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 backdrop-blur-md">
            About Afka
          </p>
          <h1
            id="about-hero-heading"
            className="font-serif-display text-[clamp(2.75rem,11vw,4.5rem)] leading-[1.02] text-white lg:text-7xl"
          >
            Why Afka exists
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Afka Digital Institute is an independent research and policy
            institute documenting digital harm, platform accountability
            failures, AI moderation gaps, and online rights issues affecting
            Somali-speaking communities.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            ["Public name", "Afka Digital Institute"],
            ["Mandate", "Digital harm and platform accountability"],
            ["Research standard", "Public evidence and careful documentation"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-white/14 bg-white/[0.08] p-5 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] backdrop-blur-md"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                {label}
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
