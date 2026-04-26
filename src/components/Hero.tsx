import Image from "next/image";
import { DataCards } from "@/components/DataCards";

function DigitalEvidencePanel() {
  const reviewStages = ["Monitor", "Classify", "Analyze", "Publish"];
  const signals = [
    "Somali-language moderation",
    "Platform accountability",
    "AI governance",
    "Digital harm evidence"
  ];

  return (
    <div className="hero-fade relative overflow-hidden border border-white/16 bg-[rgba(15,23,42,0.58)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(200,161,109,0.22),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-5 border-b border-white/12 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
              Evidence console
            </p>
            <h2 className="mt-3 font-serif-display text-3xl leading-tight text-white">
              Somali-language platform research layer
            </h2>
          </div>
          <div className="hidden h-16 w-24 items-center justify-center border border-white/14 bg-white/8 px-3 py-2 sm:flex">
            <Image
              src="/images/afka-logo-light-transparent.png"
              alt=""
              width={120}
              height={57}
              aria-hidden="true"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {signals.map((signal, index) => (
            <div
              key={signal}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border border-white/12 bg-white/[0.07] p-3"
            >
              <span className="flex h-9 w-9 items-center justify-center bg-[var(--sand)] text-xs font-bold text-slate-950">
                0{index + 1}
              </span>
              <span className="text-sm font-medium text-slate-100">
                {signal}
              </span>
              <span className="h-2 w-16 bg-white/14">
                <span
                  className="block h-full bg-[var(--sand)]"
                  style={{ width: `${62 + index * 8}%` }}
                />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {reviewStages.map((stage) => (
            <div
              key={stage}
              className="border border-white/12 bg-black/10 p-3 text-center"
            >
              <span className="mx-auto mb-3 block h-2 w-2 rounded-full bg-[var(--sand)] shadow-[0_0_0_6px_rgba(200,161,109,0.14)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                {stage}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="border border-white/14 bg-white/[0.08] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              Status
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Founding Stage
            </p>
          </div>
          <div className="border border-white/14 bg-white/[0.08] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              Method
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Public evidence
            </p>
          </div>
          <div className="border border-white/14 bg-white/[0.08] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              Focus
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Somali language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--ink)] text-white"
    >
      <Image
        src="/images/horn-of-africa-map-clean.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-20 object-cover object-center opacity-[0.5]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,35,49,0.96)_0%,rgba(23,35,49,0.86)_40%,rgba(23,35,49,0.46)_74%,rgba(23,35,49,0.68)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-32 sm:px-8 sm:pt-36 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-16">
        <div className="hero-fade">
          <p className="mb-6 inline-flex border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 backdrop-blur-md">
            Founding Stage · 2026
          </p>
          <h1 className="font-serif-display max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Documenting{" "}
            <span className="italic text-[var(--sand)]">digital harm</span> in
            the Somali-speaking world.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Afka Digital Institute is an independent research and policy
            institute building the evidence base that platforms, policymakers,
            and civil society lack.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#research"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[var(--sand)]"
            >
              View Research Areas
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/24 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14"
            >
              Collaborate
            </a>
          </div>
        </div>

        <DigitalEvidencePanel />

        <div className="hero-fade lg:col-span-2">
          <DataCards />
        </div>
      </div>
    </section>
  );
}
