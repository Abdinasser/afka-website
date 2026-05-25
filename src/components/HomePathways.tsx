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
    note: "Forthcoming public outputs"
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
      className="section-reveal relative z-10 -mt-20 bg-transparent"
      aria-labelledby="pathways-heading"
    >
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-10">
        <ScrollDepth
          className="relative overflow-hidden border border-[rgba(244,248,249,0.14)] p-5 shadow-[0_28px_90px_rgba(13,31,34,0.16)] backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(145deg, rgba(244,248,249,0.86), rgba(200,232,237,0.7)), radial-gradient(ellipse at 86% 10%, rgba(10,92,107,0.12), transparent 24rem)"
          }}
          distance={24}
          scale
        >
          {/* Signal field decoration */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -1,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 22% 28%, rgba(10,92,107,0.08), transparent 24%), radial-gradient(circle at 76% 44%, rgba(13,31,34,0.12), transparent 34%), repeating-linear-gradient(90deg, rgba(10,92,107,0.18) 0 1px, transparent 1px 18px)",
              opacity: 0.45
            }}
          />
          <div className="grid gap-5 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div className="px-1">
              <p
                className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
                style={{ letterSpacing: "0.08em" }}
              >
                Pathways
              </p>
              <h2
                id="pathways-heading"
                className="mt-2 font-display font-medium text-[26px] leading-[1.1] tracking-[-0.025em] text-[var(--fg)]"
                style={{ fontVariationSettings: '"opsz" 36' }}
              >
                Move through the work.
              </h2>
            </div>

            <Stagger className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {pathways.map((item, index) => (
                <StaggerItem key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring group block text-[var(--fg)]"
                    style={{
                      textDecoration: "none",
                      marginTop: index === 1 || index === 3 ? 12 : 0
                    }}
                  >
                    <ResearchSurface
                      accent={item.emphasis}
                      className="min-h-[120px] p-[18px]"
                    >
                      <span className="text-[13px] font-semibold">
                        {item.label}
                      </span>
                      <span className="mt-3 block text-[12px] leading-[1.55] text-[var(--fg-muted)]">
                        {item.note}
                      </span>
                      <span
                        className="mt-5 block h-px w-10 transition-colors"
                        style={{
                          background: item.emphasis
                            ? "var(--accent)"
                            : "var(--line)"
                        }}
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
