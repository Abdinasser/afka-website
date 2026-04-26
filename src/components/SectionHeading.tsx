type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  body,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-serif-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
