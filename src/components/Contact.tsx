"use client";

import type { FormEvent } from "react";
import { inquiryReasons } from "@/data/site";

const contactEmail = "hello@afkadigital.org";

export function Contact() {
  function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const field = (name: string) => {
      const value = formData.get(name);
      return typeof value === "string" ? value.trim() : "";
    };

    const body = [
      `Name: ${field("name")}`,
      `Organization: ${field("organization") || "Not provided"}`,
      `Email: ${field("email")}`,
      `Reason: ${field("reason")}`,
      "",
      field("message")
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Afka Digital Institute Inquiry"
    )}&body=${encodeURIComponent(body)}`;
  }

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
                  href={`mailto:${contactEmail}`}
                  className="focus-ring border border-white/16 bg-white/[0.08] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Email
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-white">
                    {contactEmail}
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
            onSubmit={handleInquirySubmit}
            className="border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(23,35,49,0.10)] sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  Inquiry form
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
              Open Email Draft
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
