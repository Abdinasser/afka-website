"use client";

import Link from "next/link";
import Image from "next/image";
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
  const imageStyle = reducedMotion
    ? undefined
    : { y: imageY, scale: imageScale };
  const copyStyle = reducedMotion
    ? undefined
    : { y: copyY, opacity: copyOpacity };
  const veilStyle = reducedMotion ? undefined : { opacity: veilOpacity };

  return (
    <motion.section
      ref={ref}
      id="top"
      className="hero-image-field relative isolate min-h-screen overflow-hidden bg-[var(--deep-ink)] text-[var(--cloud-white)]"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 z-0" style={imageStyle}>
        <Image
          src="/images/afka-hero-code-field.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="hero-image-base object-cover object-center"
        />
      </motion.div>
      <div className="hero-image-scrim" aria-hidden="true" />
      <div className="hero-code-ambient hero-code-ambient-a" aria-hidden="true" />
      <div className="hero-code-ambient hero-code-ambient-b" aria-hidden="true" />
      <motion.div
        className="hero-image-vignette"
        aria-hidden="true"
        style={veilStyle}
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 pb-36 pt-48 text-center sm:px-8 lg:px-10">
        <motion.div className="hero-copy-enter max-w-5xl" style={copyStyle}>
          <p className="mx-auto mb-10 w-fit rounded-full border border-[rgba(244,248,249,0.12)] bg-[rgba(244,248,249,0.06)] px-4 py-2 text-xs font-semibold uppercase text-[rgba(244,248,249,0.68)] backdrop-blur-xl">
            Afka Digital Institute
          </p>
          <h1
            id="hero-heading"
            className="mx-auto max-w-[21rem] text-balance font-serif-display text-[1.95rem] leading-[1.05] text-[var(--cloud-white)] sm:max-w-[54rem] sm:text-[3.72rem] lg:text-[4.32rem]"
          >
            <span className="block sm:inline">Researching</span>{" "}
            <span className="block sm:inline">digital harm</span>{" "}
            <span className="block sm:inline">in the</span>{" "}
            <span className="block sm:inline">Somali-speaking</span>{" "}
            <span className="block sm:inline">world.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-[19rem] text-base leading-8 text-[rgba(244,248,249,0.62)] sm:max-w-2xl sm:text-lg">
            Afka Digital Institute studies platform accountability, information
            ecosystems, and digital rights across Somali online spaces.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/insights#brief"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(244,248,249,0.22)] bg-[rgba(13,31,34,0.42)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] shadow-[0_18px_54px_rgba(13,31,34,0.28)] backdrop-blur-xl transition-colors hover:border-[rgba(200,232,237,0.44)] hover:bg-[rgba(10,92,107,0.26)]"
            >
              Read the Brief
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
