import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { FoundingBriefProgress } from "@/components/FoundingBriefProgress";
import { FoundingBriefShare } from "@/components/FoundingBriefShare";
import Header from "@/components/Header";
import { MotionSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail } from "@/data/site";
import { foundingBrief } from "@/data/foundingBrief";

export const metadata: Metadata = {
  title: "Founding Brief | Afka Digital Institute",
  description:
    "The case for an independent Somali digital research institute, published by Afka Digital Institute."
};

const metaLine = `${foundingBrief.type} · ${foundingBrief.institution} · ${foundingBrief.year}`;

export default function FoundingBriefPage() {
  return (
    <>
      <FoundingBriefProgress />
      <Header />
      <main className="bg-[var(--cloud-white)] text-[var(--deep-ink)]">
        <section
          className="brief-hero grain-layer relative overflow-hidden pt-36"
          aria-labelledby="founding-brief-title"
        >
          <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <Reveal kind="hero">
                <div className="max-w-4xl">
                  <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                    {metaLine}
                  </p>
                  <h1
                    id="founding-brief-title"
                    className="mt-8 font-serif-display text-[2.75rem] leading-[1.02] text-[var(--deep-ink)] sm:text-[4.5rem] lg:text-[5.4rem]"
                  >
                    {foundingBrief.title}
                  </h1>
                  <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--muted)]">
                    {foundingBrief.framing}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href={foundingBrief.downloadHref}
                      className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--deep-teal)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:bg-[var(--deep-ink)]"
                    >
                      Download PDF
                    </Link>
                    <Link
                      href="#brief-online"
                      className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.26)] px-6 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
                    >
                      Read online
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:justify-self-end" kind="card">
                <ResearchSurface className="brief-cover-card p-6 sm:p-7">
                  <Image
                    src="/images/afka-wordmark-black.png"
                    alt="Afka"
                    width={816}
                    height={324}
                    className="h-auto w-32"
                    priority
                  />
                  <div className="mt-16">
                    <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                      {foundingBrief.type}
                    </p>
                    <p className="mt-4 font-serif-display text-3xl leading-tight">
                      A publication framework for Somali digital realities.
                    </p>
                  </div>
                  <div className="mt-14 border-t border-[var(--line)] pt-5">
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      Share the brief with researchers, journalists, policy actors,
                      platforms, civil society, and institutions working on digital
                      governance.
                    </p>
                    <div className="mt-6">
                      <FoundingBriefShare title={foundingBrief.title} />
                    </div>
                  </div>
                </ResearchSurface>
              </Reveal>
            </div>
          </div>
        </section>

        <MotionSection
          className="section-reveal bg-[var(--cloud-white)]"
          aria-labelledby="brief-focus-heading"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 border-y border-[var(--line)] py-12 lg:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  Quick read
                </p>
                <h2
                  id="brief-focus-heading"
                  className="mt-4 font-serif-display text-3xl leading-tight"
                >
                  Brief in focus
                </h2>
              </div>
              <Stagger className="grid gap-3 sm:grid-cols-2">
                {foundingBrief.quickRead.map((point, index) => (
                  <StaggerItem key={point}>
                    <ResearchSurface
                      accent={index === 0}
                      className="h-full p-5"
                    >
                      <p className="surface-index">0{index + 1}</p>
                      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                        {point}
                      </p>
                    </ResearchSurface>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </MotionSection>

        <MotionSection
          id="brief-online"
          className="section-reveal brief-reading-section bg-[var(--cloud-white)]"
          aria-labelledby="brief-online-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:px-10 lg:pb-32">
            <aside className="hidden lg:block">
              <div className="brief-toc sticky top-28">
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  Contents
                </p>
                <nav className="mt-5 grid gap-2" aria-label="Founding Brief contents">
                  {foundingBrief.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="focus-ring rounded-sm border-l border-[var(--line)] py-1 pl-3 text-sm leading-6 text-[var(--muted)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-ink)]"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                <Link
                  href={foundingBrief.downloadHref}
                  className="focus-ring mt-8 inline-flex rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
                >
                  Download PDF
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              <details className="brief-mobile-toc mb-10 rounded-[1.5rem] border border-[var(--line)] bg-[rgba(200,232,237,0.24)] p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-[var(--deep-ink)]">
                  Contents
                </summary>
                <nav className="mt-5 flex gap-2 overflow-x-auto pb-2" aria-label="Mobile brief contents">
                  {foundingBrief.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="focus-ring whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--cloud-white)] px-4 py-2 text-sm text-[var(--muted)]"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </details>

              <article
                aria-labelledby="brief-online-heading"
                className="brief-reading mx-auto max-w-[46rem]"
              >
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  Read online
                </p>
                <h2
                  id="brief-online-heading"
                  className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl"
                >
                  Full founding brief
                </h2>

                {foundingBrief.sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="brief-section scroll-mt-28"
                  >
                    <p className="surface-index">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-6 font-serif-display text-3xl leading-tight sm:text-[2.45rem]">
                      {section.title}
                    </h3>
                    <p className="mt-5 border-l border-[var(--deep-teal)] pl-5 text-base leading-8 text-[var(--muted)]">
                      {section.summary}
                    </p>
                    {section.pullQuote ? (
                      <blockquote className="brief-pullquote">
                        {section.pullQuote}
                      </blockquote>
                    ) : null}
                    <div className="mt-8 space-y-6">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </article>

              <section
                className="mx-auto mt-20 max-w-[46rem] border-t border-[var(--line)] pt-12"
                aria-labelledby="brief-sources-heading"
              >
                <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
                  References
                </p>
                <h2
                  id="brief-sources-heading"
                  className="mt-4 font-serif-display text-3xl leading-tight"
                >
                  Sources referenced in the brief
                </h2>
                <div className="mt-7 flex flex-wrap gap-2">
                  {foundingBrief.sources.map((source) => (
                    <span
                      key={source}
                      className="rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.3)] px-4 py-2 text-sm text-[var(--muted)]"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </MotionSection>

        <MotionSection
          className="section-reveal bg-[var(--cloud-white)]"
          aria-labelledby="brief-closing-heading"
        >
          <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
            <ResearchSurface
              tone="dark"
              className="founding-brief-surface p-6 text-[var(--cloud-white)] sm:p-8 lg:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase text-[var(--mist-blue)]">
                    Closing
                  </p>
                  <h2
                    id="brief-closing-heading"
                    className="mt-5 max-w-2xl font-serif-display text-4xl leading-tight sm:text-5xl"
                  >
                    Read the brief. Build the field.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(244,248,249,0.68)]">
                    Afka Digital Institute is being built to produce evidence,
                    preserve institutional memory, and make Somali digital life
                    legible to the people and institutions making decisions about it.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={foundingBrief.downloadHref}
                      className="focus-ring rounded-full bg-[var(--cloud-white)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:bg-[var(--mist-blue)]"
                    >
                      Download PDF
                    </Link>
                    <Link
                      href="/contact"
                      className="focus-ring rounded-full border border-[rgba(244,248,249,0.18)] px-5 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:border-[var(--mist-blue)]"
                    >
                      Contact Afka
                    </Link>
                    <Link
                      href="/#outputs"
                      className="focus-ring rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-[rgba(244,248,249,0.72)] transition-colors hover:text-[var(--cloud-white)]"
                    >
                      Explore outputs
                    </Link>
                  </div>
                </div>
                <div className="space-y-5 lg:justify-self-end">
                  <FoundingBriefShare title={foundingBrief.title} />
                  <div className="flex lg:justify-end">
                    <SocialLinks tone="dark" compact />
                  </div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="focus-ring inline-flex rounded-full border border-[rgba(244,248,249,0.14)] px-5 py-3 text-sm text-[rgba(244,248,249,0.74)] transition-colors hover:border-[var(--mist-blue)] hover:text-[var(--cloud-white)]"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </ResearchSurface>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
