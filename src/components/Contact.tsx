import { inquiryReasons } from "@/data/site";

const socialLinks = [
  { label: "LinkedIn", href: "#contact" },
  { label: "X", href: "#contact" },
  { label: "Instagram", href: "#contact" },
  { label: "Facebook", href: "#contact" }
];

function SocialIcon({ label }: { label: string }) {
  const className = "h-4 w-4";

  if (label === "LinkedIn") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.8 8.9H3.4V20h3.4V8.9ZM5.1 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 4.9H9.8V20h3.3v-5.7c0-1.5.8-2.5 2-2.5 1.1 0 1.7.8 1.7 2.4V20h3.4v-6.4c0-3.2-1.7-4.9-4.2-4.9-1.5 0-2.5.7-3 1.6V8.9Z"
        />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 10.8 21.4 2h-1.8l-6.4 7.6L8.1 2H2.2l7.8 11.4L2.2 22h1.9l6.7-7.5 5.4 7.5h5.8L14 10.8Zm-2.4 2.7-.8-1.1L4.5 3.4h2.8l5 7.2.8 1.1 6.6 9.1h-2.8l-5.3-7.3Z"
        />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          d="M7.5 3.5h9A4 4 0 0 1 20.5 7.5v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          d="M8.8 12a3.2 3.2 0 1 0 6.4 0 3.2 3.2 0 0 0-6.4 0Z"
        />
        <path fill="currentColor" d="M16.8 7.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.2V6.6c0-.8.5-1.2 1.3-1.2h1.6V2.6A22 22 0 0 0 14.8 2c-2.4 0-4 1.4-4 4v2.2H8.1v3.1h2.7V22h3.4V11.3h2.7l.4-3.1h-3.1Z"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="section-reveal bg-[var(--surface-soft)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative overflow-hidden bg-[var(--primary)] p-6 text-white shadow-[0_24px_70px_rgba(23,35,49,0.16)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(200,161,109,0.18),transparent_30%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
            <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-serif-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
              >
                Work with Afka.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-100">
                We welcome research partnerships, media inquiries, donor
                conversations, platform engagement, and civil society
                collaboration connected to digital harm in the Somali-speaking
                world.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:hello@afkadigital.org"
                  className="focus-ring border border-white/16 bg-white/[0.08] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Email
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-white">
                    hello@afkadigital.org
                  </span>
                </a>
                <div className="border border-white/16 bg-white/[0.08] p-4">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Locations
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-white">
                    Mogadishu · Nairobi
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Social
                </p>
                <div className="mt-3 flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={`${link.label} profile`}
                      className="focus-ring flex h-11 w-11 items-center justify-center border border-white/16 bg-white/[0.08] text-white transition-colors hover:bg-[var(--sand)] hover:text-slate-950"
                    >
                      <SocialIcon label={link.label} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {inquiryReasons.slice(0, 4).map((reason) => (
                  <span
                    key={reason}
                    className="border border-white/16 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-slate-100"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form
            action="mailto:hello@afkadigital.org"
            method="post"
            encType="text/plain"
            className="border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(23,35,49,0.10)] sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  Inquiry form
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  First version uses a mailto submission.
                </p>
              </div>
              <span className="hidden h-10 w-10 items-center justify-center bg-[var(--surface-soft)] text-sm font-semibold text-[var(--primary)] sm:flex">
                ADI
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="focus-ring min-h-12 border border-slate-300 bg-[var(--surface-soft)] px-4 py-3 text-base font-normal normal-case tracking-normal text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Organization
                <input
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  className="focus-ring min-h-12 border border-slate-300 bg-[var(--surface-soft)] px-4 py-3 text-base font-normal normal-case tracking-normal text-slate-900"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus-ring min-h-12 border border-slate-300 bg-[var(--surface-soft)] px-4 py-3 text-base font-normal normal-case tracking-normal text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Reason
                <select
                  name="reason"
                  required
                  className="focus-ring min-h-12 border border-slate-300 bg-[var(--surface-soft)] px-4 py-3 text-base font-normal normal-case tracking-normal text-slate-900"
                >
                  <option value="">Select a reason</option>
                  {inquiryReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="focus-ring min-h-36 resize-y border border-slate-300 bg-[var(--surface-soft)] px-4 py-3 text-base font-normal normal-case leading-7 tracking-normal text-slate-900"
              />
            </label>

            <button
              type="submit"
              className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
