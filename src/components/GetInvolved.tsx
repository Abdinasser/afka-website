import Image from "next/image";

export function GetInvolved() {
  return (
    <section
      className="section-reveal bg-[var(--primary)] text-white"
      aria-labelledby="get-involved-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
        <div className="hidden lg:block">
          <Image
            src="/images/afka-logo-light-transparent.png"
            alt="Afka Digital Institute"
            width={520}
            height={247}
            className="w-full max-w-md"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
            Get Involved
          </p>
          <h2
            id="get-involved-heading"
            className="font-serif-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Get Involved
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
            We are building our research team, advisory network, and first
            publications. We welcome researchers, donors, civil society
            organizations, journalists, and platform policy teams interested in
            digital harm and technology accountability in the Somali-speaking
            world.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[var(--sand)]"
            >
              Submit Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
