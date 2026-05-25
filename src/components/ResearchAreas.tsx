import Link from "next/link";

import {
  MotionSection,
  ScrollDepth,
  Stagger,
  StaggerItem
} from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { researchAreas } from "@/data/site";

type ResearchAreasProps = {
  showIntroLink?: boolean;
};

export function ResearchAreas({ showIntroLink = true }: ResearchAreasProps) {
  return (
    <MotionSection
      id="research"
      className="section-reveal relative isolate overflow-clip bg-[var(--afka-deep-ink)] text-[var(--fg-inverse)]"
      aria-labelledby="research-heading"
    >
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
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)",
          maskImage:
            "linear-gradient(180deg, rgba(13,31,34,1) 0%, rgba(13,31,34,0.84) 36%, transparent 82%)"
        }}
      />
      <div className="relative z-10 mx-auto max-w-[80rem] px-5 pb-28 pt-36 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <ScrollDepth distance={32} fade>
            <p
              className="text-[11.5px] font-semibold uppercase"
              style={{
                letterSpacing: "0.08em",
                color: "var(--afka-mist-blue)"
              }}
            >
              Research focus
            </p>
            <h2
              id="research-heading"
              className="mt-5 text-balance font-display font-medium text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.028em] text-[var(--fg-inverse)]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              What Afka studies.
            </h2>
            <p
              className="mt-7 max-w-[32rem] text-[16px] leading-[1.7]"
              style={{ color: "rgba(244,248,249,0.66)" }}
            >
              The research agenda is organised around platform systems,
              Somali-language context, public harm, AI governance and access.
            </p>
            {showIntroLink ? (
              <Link
                href="/research"
                className="focus-ring mt-8 inline-flex rounded-full border border-[rgba(244,248,249,0.14)] bg-[rgba(244,248,249,0.04)] px-5 py-3 text-[13px] font-semibold text-[rgba(244,248,249,0.78)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg-inverse)]"
              >
                Explore Research
              </Link>
            ) : null}
          </ScrollDepth>

          <Stagger className="grid gap-5 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <StaggerItem key={area.title} className="h-full">
                <ResearchSurface
                  tone="dark"
                  className="research-focus-card flex h-full min-h-[240px] flex-col p-6"
                >
                  <span
                    className="inline-flex min-w-[2.6rem] items-center justify-center pb-[6px] text-[11px] font-bold uppercase"
                    style={{
                      letterSpacing: "0.06em",
                      color: "var(--afka-mist-blue)",
                      borderBottom: "1px solid var(--afka-mist-blue)"
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-7 font-display font-medium text-[22px] leading-[1.12] tracking-[-0.022em] text-[var(--fg-inverse)]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="mt-4 text-[13px] leading-[1.7]"
                    style={{ color: "rgba(244,248,249,0.7)" }}
                  >
                    {area.description}
                  </p>
                </ResearchSurface>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </MotionSection>
  );
}
