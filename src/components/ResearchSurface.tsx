"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { surfaceHover } from "@/lib/motion";

type ResearchSurfaceProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark";
  accent?: boolean;
};

export function ResearchSurface({
  accent = false,
  children,
  className = "",
  id,
  tone = "light"
}: ResearchSurfaceProps) {
  const reducedMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const surface = event.currentTarget;
    const rect = surface.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    surface.style.setProperty("--surface-x", `${x.toFixed(2)}%`);
    surface.style.setProperty("--surface-y", `${y.toFixed(2)}%`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--surface-x", "50%");
    event.currentTarget.style.setProperty("--surface-y", "42%");
  }

  return (
    <motion.div
      className={`research-surface ${className}`}
      data-accent={accent ? "true" : undefined}
      data-tone={tone}
      id={id}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      whileHover={reducedMotion ? undefined : surfaceHover}
      style={
        {
          "--surface-x": "50%",
          "--surface-y": "42%"
        } as CSSProperties
      }
    >
      {children}
    </motion.div>
  );
}
