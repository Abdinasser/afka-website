import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--ink)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <a
          href="#top"
          className="focus-ring inline-flex rounded-sm"
          aria-label="Afka Digital Institute home"
        >
          <Image
            src="/images/afka-logo-light-transparent.png"
            alt="Afka Digital Institute"
            width={280}
            height={133}
            className="h-auto w-40"
          />
        </a>
          <a
            href="#top"
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/14 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/[0.12]"
          >
            Back to top
          </a>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-sm text-slate-300 md:flex-row md:items-center">
          <p>Evidence for the Somali digital world.</p>
          <p>© 2026 · AFKA DIGITAL INSTITUTE</p>
        </div>
      </div>
    </footer>
  );
}
