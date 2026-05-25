type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  body,
  tone = "light"
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className="mb-5 text-[11.5px] font-semibold uppercase text-[var(--accent)]"
          style={{ letterSpacing: "0.08em" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] ${
          isDark ? "text-[var(--fg-inverse)]" : "text-[var(--fg)]"
        }`}
        style={{ fontVariationSettings: '"opsz" 72' }}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-7 max-w-2xl text-[16px] leading-[1.7] ${
            isDark ? "text-[rgba(244,248,249,0.66)]" : "text-[var(--fg-muted)]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
