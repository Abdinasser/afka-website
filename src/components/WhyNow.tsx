import { MotionSection, Reveal } from "@/components/Motion";

export function WhyNow() {
  return (
    <MotionSection
      className="section-reveal relative isolate min-h-[34rem] overflow-hidden bg-[var(--afka-deep-ink)] text-[var(--fg-inverse)]"
      aria-labelledby="why-now-heading"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(10,92,107,0.62) 0 1.35px, transparent 1.65px), radial-gradient(circle, rgba(244,248,249,0.28) 0 1px, transparent 1.4px)",
          backgroundPosition: "0 0, 9px 9px",
          backgroundSize: "18px 18px, 18px 18px",
          opacity: 0.42,
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)",
          maskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)"
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-[80rem] items-center px-5 py-24 sm:px-8 lg:px-10">
        <Reveal className="max-w-3xl" kind="text">
          <p
            className="text-[11.5px] font-semibold uppercase"
            style={{ letterSpacing: "0.08em", color: "var(--afka-mist-blue)" }}
          >
            Why now
          </p>
          <h2
            id="why-now-heading"
            className="mt-6 font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg-inverse)]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            Digital life is moving faster than the evidence around it.
          </h2>
          <p
            className="mt-7 max-w-2xl text-[16px] leading-[1.7] sm:text-[18px]"
            style={{ color: "rgba(244,248,249,0.66)" }}
          >
            Afka exists to slow that picture down, document what is happening,
            and make the systems visible enough to question.
          </p>
        </Reveal>
      </div>
    </MotionSection>
  );
}
