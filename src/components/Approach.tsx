import { approachSteps } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

function StepIcon({ title }: { title: string }) {
  const common = "h-5 w-5";

  if (title === "Document") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3h7l4 4v14H7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M14 3v5h5M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (title === "Analyze") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 18l5-5 4 3 7-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M4 21h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (title === "Publish") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 8h4M10 16h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function Approach() {
  return (
    <section
      id="approach"
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="approach-heading"
          title="How Afka works"
          body="A disciplined research workflow for turning scattered online incidents into public evidence."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step) => (
            <article
              key={step.step}
              className="card-lift border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(23,35,49,0.07)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-[var(--primary)] text-white shadow-[7px_7px_0_var(--sand)]">
                  <StepIcon title={step.title} />
                </div>
                <p className="font-serif-display text-4xl text-slate-300">
                  {step.step}
                </p>
              </div>
              <h3 className="mt-8 font-serif-display text-2xl text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
