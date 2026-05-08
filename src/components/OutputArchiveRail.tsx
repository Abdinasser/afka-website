"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { ResearchSurface } from "@/components/ResearchSurface";
import type { ResearchOutput } from "@/data/site";

type OutputArchiveRailProps = {
  items: ResearchOutput[];
};

export function OutputArchiveRail({ items }: OutputArchiveRailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const reducedMotion = useReducedMotion();
  const useSidewaysScroll = isDesktop && !reducedMotion;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0.08, 0.92], [0, -travel]);
  const progressScale = useTransform(scrollYProgress, [0.08, 0.92], [0.08, 1]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    function measure() {
      const currentViewport = viewportRef.current;
      const currentTrack = trackRef.current;

      if (!currentViewport || !currentTrack) {
        return;
      }

      setTravel(Math.max(0, currentTrack.scrollWidth - currentViewport.clientWidth));
    }

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function updateViewportMode() {
      setIsDesktop(mediaQuery.matches);
    }

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);

    return () => mediaQuery.removeEventListener("change", updateViewportMode);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop && viewportRef.current) {
      viewportRef.current.scrollLeft = 0;
    }
  }, [isDesktop]);

  return (
    <div ref={sectionRef} className="output-sideways-stage">
      <div className="output-sideways-sticky">
        <div
          ref={viewportRef}
          className="output-sideways-viewport"
          data-reduced-motion={reducedMotion ? "true" : undefined}
          aria-label="Research output formats"
        >
          <motion.div
            ref={trackRef}
            className="output-sideways-track"
            style={useSidewaysScroll ? { x } : undefined}
          >
            {items.map((item, index) => (
              <motion.article
                key={item.title}
                className="output-sideways-card"
                initial={reducedMotion ? false : { opacity: 0, y: 34, rotate: -1.2 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.055,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.34 }}
              >
                <ResearchSurface
                  className="output-publication-card flex h-full flex-col p-6 sm:p-7"
                  accent={index === 0}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="rounded-full border border-[var(--line)] bg-[rgba(200,232,237,0.42)] px-3 py-1 text-[0.68rem] font-semibold uppercase text-[var(--deep-teal)]">
                      {item.label}
                    </p>
                    <span className="text-[0.68rem] font-semibold uppercase text-[rgba(13,31,34,0.38)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 max-w-sm font-serif-display text-[1.85rem] leading-tight text-[var(--deep-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-10">
                    <span className="block h-px w-full bg-[var(--line)]" />
                    <p className="mt-4 text-xs font-semibold uppercase text-[rgba(13,31,34,0.48)]">
                      {item.label === "Future Tools" ? "Knowledge Product" : "Research Output"}
                    </p>
                  </div>
                </ResearchSurface>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="h-px overflow-hidden bg-[rgba(10,92,107,0.16)]">
            <motion.span
              className="block h-full origin-left bg-[var(--deep-teal)]"
              style={useSidewaysScroll ? { scaleX: progressScale } : { scaleX: 1 }}
            />
          </div>
          <p className="text-xs font-semibold uppercase text-[rgba(13,31,34,0.48)]">
            {isDesktop ? "Scroll to move through the archive" : "Swipe through the archive"}
          </p>
        </div>
      </div>
    </div>
  );
}
