"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { MotionSection, Reveal } from "@/components/Motion";
import { ResearchSurface } from "@/components/ResearchSurface";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail, inquiryReasons } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);

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

    setSent(true);
  }

  const inputClass =
    "focus-ring min-h-[48px] rounded-none border border-[var(--line)] bg-transparent px-4 py-3 font-sans text-[14px] font-normal normal-case text-[var(--fg)]";
  const labelClass =
    "grid gap-2 text-[10.5px] font-semibold uppercase text-[var(--fg-muted)]";

  return (
    <MotionSection
      id="contact"
      className="section-reveal bg-[var(--afka-cloud-white)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[80rem] gap-12 px-5 pb-28 pt-36 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <Reveal kind="text">
          <p
            className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
            style={{ letterSpacing: "0.08em" }}
          >
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-5 max-w-[26ch] font-display font-medium text-[clamp(1.9rem,2.8vw,2.8rem)] leading-[1.08] tracking-[-0.028em] text-[var(--fg)]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            Research inquiries and institutional contact.
          </h2>
          <p className="mt-7 max-w-[32rem] text-[16px] leading-[1.7] text-[var(--fg-muted)]">
            For research partnerships, media requests, platform engagement, or
            general institutional contact, write to Afka directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring inline-flex rounded-full border border-[var(--fg)] px-5 py-3 text-[13px] font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {contactEmail}
            </a>
            <SocialLinks tone="light" compact />
          </div>
        </Reveal>

        <Reveal className="lg:mt-10" kind="card">
          <ResearchSurface className="p-7">
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <p
                  className="text-[11.5px] font-semibold uppercase text-[var(--accent)]"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Sent
                </p>
                <h3
                  className="mt-5 max-w-[22ch] font-display font-medium text-[28px] leading-[1.1] tracking-[-0.024em] text-[var(--fg)]"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  Your inquiry is queued.
                </h3>
                <p className="mt-5 max-w-[36ch] text-[13.5px] leading-[1.7] text-[var(--fg-muted)]">
                  Afka will respond to afkadigital.org contacts within five
                  working days.
                </p>
              </div>
            ) : (
            <form onSubmit={handleInquirySubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass} style={{ letterSpacing: "0.08em" }}>
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </label>
                <label className={labelClass} style={{ letterSpacing: "0.08em" }}>
                  Organization
                  <input
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className={labelClass} style={{ letterSpacing: "0.08em" }}>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </label>
                <label className={labelClass} style={{ letterSpacing: "0.08em" }}>
                  Reason
                  <select
                    name="reason"
                    required
                    className={inputClass}
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

              <label
                className={`mt-4 ${labelClass}`}
                style={{ letterSpacing: "0.08em" }}
              >
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={`${inputClass} min-h-[140px] resize-y leading-[1.6]`}
                />
              </label>

              <button
                type="submit"
                className="focus-ring mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-0 bg-[var(--accent)] px-6 text-[13px] font-semibold text-[var(--fg-inverse)] transition-colors hover:bg-[var(--afka-deep-teal-hover)] active:bg-[var(--afka-deep-teal-press)]"
              >
                Email Afka
              </button>
            </form>
            )}
          </ResearchSurface>
        </Reveal>
      </div>
    </MotionSection>
  );
}
