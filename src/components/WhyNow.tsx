import { MotionSection, Reveal } from "@/components/Motion";

export function WhyNow() {
  return (
    <MotionSection
      className="section-reveal cinematic-field min-h-[34rem] text-[var(--cloud-white)]"
      aria-labelledby="why-now-heading"
    >
      <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <Reveal className="max-w-3xl" kind="text">
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            Why now
          </p>
          <h2
            id="why-now-heading"
            className="mt-6 font-serif-display text-3xl leading-tight text-[var(--cloud-white)] sm:text-4xl"
          >
            Digital life is moving faster than the evidence around it.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[rgba(244,248,249,0.62)] sm:text-lg">
            Afka exists to slow that picture down, document what is happening,
            and make the systems visible enough to question.
          </p>
        </Reveal>
      </div>
    </MotionSection>
  );
}
