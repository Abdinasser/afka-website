import { outputCategories } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Outputs() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="outputs-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="outputs-heading"
            title="What Afka will publish"
          />
          <a
            href="#contact"
            className="focus-ring inline-flex min-h-11 w-full items-center justify-center border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 sm:w-auto"
          >
            Submit a research inquiry
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {outputCategories.map((category) => (
            <div
              key={category.title}
              data-content-type="publication-category"
              className="card-lift flex min-h-14 items-center justify-center border border-slate-200 bg-[var(--surface-soft)] px-4 py-4 text-center text-sm font-semibold text-[var(--primary)] shadow-[0_10px_24px_rgba(23,35,49,0.05)]"
            >
              {category.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
