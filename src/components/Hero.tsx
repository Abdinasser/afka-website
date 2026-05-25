"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 74]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0.46]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.82, 0.96]);
  const imageStyle = reducedMotion ? undefined : { y: imageY, scale: imageScale };
  const copyStyle = reducedMotion ? undefined : { y: copyY, opacity: copyOpacity };
  const veilStyle = reducedMotion ? undefined : { opacity: veilOpacity };

  return (
    <motion.section
      ref={ref}
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--afka-deep-ink)] text-[var(--fg-inverse)]"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 z-0" style={imageStyle}>
        <Image
          src="/images/afka-hero-code-field.jpg"
          alt="Abstract digital code field representing Somali online spaces"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top]"
          style={{ filter: "saturate(0.98) contrast(1.06) brightness(1.05)" }}
        />
      </motion.div>
      {/* Scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 50% 49%, rgba(13,31,34,0.58) 0%, rgba(13,31,34,0.5) 27%, rgba(13,31,34,0.2) 49%, transparent 68%), linear-gradient(180deg, rgba(13,31,34,0.02) 0%, rgba(13,31,34,0.08) 31%, rgba(13,31,34,0.34) 66%, rgba(13,31,34,0.76) 100%)"
        }}
      />
      {/* Vignette */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          zIndex: 4,
          background:
            "radial-gradient(ellipse at 50% 43%, transparent 0%, rgba(13,31,34,0.08) 48%, rgba(13,31,34,0.46) 100%), linear-gradient(180deg, transparent 0%, transparent 57%, rgba(13,31,34,0.48) 84%, rgba(13,31,34,0.86) 100%)",
          ...(veilStyle ?? { opacity: 0.82 })
        }}
      />
      {/* Copy */}
      <div
        className="relative mx-auto flex min-h-screen max-w-[80rem] items-center justify-center px-5 pb-36 pt-48 text-center sm:px-8 lg:px-10"
        style={{ zIndex: 10 }}
      >
        <motion.div className="w-full max-w-[62rem]" style={copyStyle}>
          <p
            className="mx-auto mb-10 w-fit rounded-full border border-[rgba(244,248,249,0.12)] bg-[rgba(244,248,249,0.06)] px-4 py-2 text-[11px] font-semibold uppercase text-[rgba(244,248,249,0.68)] backdrop-blur-xl"
            style={{ letterSpacing: "0.06em" }}
          >
            Afka Digital Institute
          </p>
          <h1
            id="hero-heading"
            className="mx-auto max-w-[58rem] text-balance font-display font-medium text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.0] tracking-[-0.035em] text-[var(--fg-inverse)]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Building evidence on digital harm in Somali-speaking spaces.
          </h1>
          <p
            className="mx-auto mt-10 max-w-[48rem] text-[18px] leading-[1.65]"
            style={{ color: "rgba(244,248,249,0.7)" }}
          >
            Afka Digital Institute documents platform accountability,
            Somali-language moderation, information integrity, AI governance,
            digital exclusion, and digital rights across Somali online spaces.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 48,
            }}
          >
            <Link
              href="/research"
              className="focus-ring inline-flex items-center justify-center transition-opacity hover:opacity-90"
              style={{
                background: "var(--fg-inverse)",
                color: "var(--fg)",
                border: "1px solid rgba(244,248,249,0.94)",
                boxShadow: "0 20px 62px rgba(0,0,0,0.34)",
                borderRadius: 9999,
                minHeight: 44,
                padding: "10px 22px",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--sans)",
                letterSpacing: "0.005em",
              }}
            >
              Explore Research
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center transition-opacity hover:opacity-80"
              style={{
                background: "rgba(13,31,34,0.5)",
                color: "var(--fg-inverse)",
                border: "1px solid rgba(244,248,249,0.34)",
                backdropFilter: "blur(20px)",
                borderRadius: 9999,
                minHeight: 44,
                padding: "10px 22px",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--sans)",
                letterSpacing: "0.005em",
              }}
            >
              Contact Afka
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
