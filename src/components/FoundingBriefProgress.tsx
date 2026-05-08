"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

export function FoundingBriefProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-[var(--deep-teal)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
