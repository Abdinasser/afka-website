import { Reveal } from "@/components/Motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="page-atmosphere relative isolate overflow-hidden px-5 pt-48 pb-16 text-[var(--fg-inverse)] sm:px-8 lg:px-10">
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
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, transparent 88%)",
          maskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, transparent 88%)"
        }}
      />
      <Reveal className="relative z-10 mx-auto max-w-[80rem]" kind="hero">
        <p
          className="text-[11.5px] font-semibold uppercase"
          style={{ letterSpacing: "0.08em", color: "var(--afka-mist-blue)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="mt-5 max-w-[26ch] text-balance font-display font-medium text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.0] tracking-[-0.035em] text-[var(--fg-inverse)]"
          style={{ fontVariationSettings: '"opsz" 96' }}
        >
          {title}
        </h1>
        <p
          className="mt-8 max-w-[48rem] text-[18px] leading-[1.65]"
          style={{ color: "rgba(244,248,249,0.7)" }}
        >
          {body}
        </p>
      </Reveal>
    </section>
  );
}
