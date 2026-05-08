import Link from "next/link";

import {
  MotionSection,
  ScrollDepth,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";

const pathways = [
  {
    label: "Explore Research",
    href: "/research",
    note: "What Afka studies"
  },
  {
    label: "Read Insights",
    href: "/insights",
    note: "Reports, briefs, notes"
  },
  {
    label: "About Afka",
    href: "/about",
    note: "Why Afka exists"
  },
  {
    label: "Contact Us",
    href: "/contact",
    note: "Collaborate or inquire",
    emphasis: true
  }
];

export function HomePathways() {
  return (
    <MotionSection
      className="section-reveal pathway-transition relative z-10 -mt-20 bg-transparent"
      aria-labelledby="pathways-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollDepth
          className="pathway-shell signal-field border border-[rgba(244,248,249,0.14)] p-4 shadow-[0_28px_90px_rgba(13,31,34,0.16)] backdrop-blur-xl sm:p-5"
          distance={24}
          scale
        >
          <div className="grid gap-5 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div className="px-1">
              <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                Pathways
              </p>
              <h2
                id="pathways-heading"
                className="mt-2 font-serif-display text-2xl leading-tight text-[var(--deep-ink)]"
              >
                Move through the work.
              </h2>
            </div>

            <Stagger className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {pathways.map((item, index) => (
                <StaggerItem key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring group block text-[var(--deep-ink)]"
                  >
                    <ResearchSurface
                      accent={item.emphasis}
                      className={`min-h-[7.5rem] p-4 sm:p-5 ${
                        index === 1 || index === 3 ? "lg:mt-3" : ""
                      }`}
                    >
                      <span className="text-sm font-semibold">{item.label}</span>
                      <span className="mt-3 block text-xs leading-5 text-[var(--muted)]">
                        {item.note}
                      </span>
                      <span
                        className={`mt-5 block h-px w-10 transition-colors ${
                          item.emphasis
                            ? "bg-[var(--deep-teal)]"
                            : "bg-[var(--line)] group-hover:bg-[var(--deep-teal)]"
                        }`}
                        aria-hidden="true"
                      />
                    </ResearchSurface>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </ScrollDepth>
      </div>
    </MotionSection>
  );
}
