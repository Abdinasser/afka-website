type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase text-[var(--deep-teal)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-serif-display text-3xl leading-tight sm:text-[2.45rem] lg:text-[2.95rem] ${
          isDark ? "text-[var(--cloud-white)]" : "text-[var(--deep-ink)]"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 ${
            isDark ? "text-[rgba(244,248,249,0.62)]" : "text-[var(--muted)]"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
