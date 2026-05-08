"use client";

import type { FormEvent } from "react";

import { MotionSection, Reveal } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail, inquiryReasons } from "@/data/site";

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
    <MotionSection
      id="contact"
      className="section-reveal bg-[var(--cloud-white)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-28">
        <Reveal kind="text">
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-5 font-serif-display text-3xl leading-tight text-[var(--deep-ink)] sm:text-4xl"
          >
            Research inquiries and institutional contact.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">
            For research partnerships, media requests, platform engagement, or
            general institutional contact, write to Afka directly.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring inline-flex rounded-full border border-[var(--deep-ink)] px-5 py-3 text-sm font-semibold text-[var(--deep-ink)] transition-colors hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
            >
              {contactEmail}
            </a>
            <SocialLinks tone="light" compact />
          </div>
        </Reveal>

        <Reveal className="lg:mt-10" kind="card">
        <ResearchSurface className="p-5 sm:p-7">
          <form onSubmit={handleInquirySubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase text-[var(--muted)]">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="focus-ring min-h-12 border border-[var(--line)] bg-transparent px-4 py-3 text-base font-normal normal-case text-[var(--deep-ink)]"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase text-[var(--muted)]">
                Organization
                <input
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  className="focus-ring min-h-12 border border-[var(--line)] bg-transparent px-4 py-3 text-base font-normal normal-case text-[var(--deep-ink)]"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase text-[var(--muted)]">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus-ring min-h-12 border border-[var(--line)] bg-transparent px-4 py-3 text-base font-normal normal-case text-[var(--deep-ink)]"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase text-[var(--muted)]">
                Reason
                <select
                  name="reason"
                  required
                  className="focus-ring min-h-12 border border-[var(--line)] bg-transparent px-4 py-3 text-base font-normal normal-case text-[var(--deep-ink)]"
                >
                  <option value="">Select</option>
                  {inquiryReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-xs font-semibold uppercase text-[var(--muted)]">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="focus-ring min-h-36 resize-y border border-[var(--line)] bg-transparent px-4 py-3 text-base font-normal normal-case leading-7 text-[var(--deep-ink)]"
              />
            </label>

            <button
              type="submit"
              className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--deep-teal)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:bg-[var(--deep-ink)]"
            >
              Open email draft
            </button>
          </form>
        </ResearchSurface>
        </Reveal>
      </div>
    </MotionSection>
  );
}
