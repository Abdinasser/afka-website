import { Reveal } from "@/components/Motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  body,
  align = "center"
}: PageHeroProps) {
  return (
    <section className="cinematic-field page-atmosphere-field min-h-[72vh] text-[var(--cloud-white)]">
      <div
        className={`relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10 ${
          align === "center" ? "justify-center text-center" : ""
        }`}
      >
        <Reveal className="max-w-4xl" kind="hero">
          <p className="mb-7 text-xs font-semibold uppercase text-[var(--deep-teal)]">
            {eyebrow}
          </p>
          <h1
            className={`max-w-[20rem] text-balance font-serif-display text-[2.1rem] leading-tight text-[var(--cloud-white)] sm:max-w-4xl sm:text-[3.55rem] lg:text-[4.1rem] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-7 max-w-[17rem] text-base leading-8 text-[rgba(244,248,249,0.62)] sm:max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
