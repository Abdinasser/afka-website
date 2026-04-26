import { teamRoles } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Team() {
  return (
    <section
      className="section-reveal bg-white"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="team-heading"
          eyebrow="Team"
          title="Founding roles"
          body="Afka is being structured around research leadership, advisory review, and a fellows model for focused publication work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoles.map((member) => (
            <article
              key={member.role}
              className="card-lift border border-slate-200 bg-[var(--surface-soft)] p-6"
            >
              <div className="flex h-20 w-20 items-center justify-center bg-[var(--primary)] font-serif-display text-2xl text-white shadow-[10px_10px_0_var(--sand)]">
                {member.initials}
              </div>
              <h3 className="mt-8 font-serif-display text-2xl leading-tight text-slate-950">
                {member.role}
              </h3>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Placeholder role. Public biographies will be added after formal
                appointments are announced.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
