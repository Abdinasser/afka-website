"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { heroTextReveal, motionViewport, sectionReveal } from "@/lib/motion";

const heroFocus = [
  { id: "i", label: "Platform accountability" },
  { id: "ii", label: "Somali-language moderation" },
  { id: "iii", label: "Information integrity" },
  { id: "iv", label: "AI and language justice" },
  { id: "v", label: "Online gendered harm" },
  { id: "vi", label: "Creator economy and access" }
];

export function RedesignHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="redesign-hero-heading"
      className="redesign-hero"
    >
      <div className="redesign-hero-grid">
        <div className="redesign-hero-grid-lines" aria-hidden="true" />
        <div className="redesign-hero-grid-fade" aria-hidden="true" />
      </div>

      <div className="redesign-hero-inner">
        <motion.div
          className="redesign-hero-dateline"
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="redesign-hero-dateline-mark">AFKA</span>
          <span className="redesign-hero-dateline-rule" aria-hidden="true" />
          <span>Digital harm research</span>
          <span className="redesign-hero-dateline-rule" aria-hidden="true" />
          <span>Founding programme · 2026</span>
        </motion.div>

        <motion.h1
          id="redesign-hero-heading"
          className="redesign-hero-title font-serif-display"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={heroTextReveal}
        >
          <span className="redesign-hero-title-line">A research institute for</span>
          <span className="redesign-hero-title-line">digital harm in the</span>
          <span className="redesign-hero-title-line redesign-hero-title-emph">
            Somali-speaking world.
          </span>
        </motion.h1>

        <motion.div
          className="redesign-hero-meta"
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={sectionReveal}
        >
          <div className="redesign-hero-standfirst">
            <p>
              Afka Digital Institute studies how platforms, moderation systems,
              recommender algorithms, and AI tools behave inside Somali-language
              online spaces — and what that means for safety, public information,
              and rights.
            </p>
            <p>
              The work is independent, evidence-led, and built for policymakers,
              platforms, journalists, civil society, and Somali-speaking users
              themselves.
            </p>
            <div className="redesign-hero-cta-row">
              <Link
                href="#focus"
                className="focus-ring redesign-cta-primary"
              >
                Read the research focus
              </Link>
              <Link
                href="#engage"
                className="focus-ring redesign-cta-secondary"
              >
                Work with Afka
              </Link>
            </div>
          </div>

          <aside className="redesign-hero-index" aria-label="What Afka studies">
            <p className="redesign-eyebrow">In this issue</p>
            <ul className="redesign-hero-index-list">
              {heroFocus.map((item) => (
                <li key={item.id}>
                  <span className="redesign-roman">{item.id}.</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="redesign-hero-index-footnote">
              <span>Independent · Non-partisan</span>
              <span>Public-interest research</span>
            </div>
          </aside>
        </motion.div>

        <div className="redesign-hero-baseline" aria-hidden="true" />
      </div>
    </section>
  );
}
