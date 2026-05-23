"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type MotionStyle
} from "motion/react";

import {
  cardReveal,
  heroTextReveal,
  motionViewport,
  sectionReveal,
  staggerParent,
  textReveal
} from "@/lib/motion";

type RevealKind = "section" | "text" | "hero" | "card";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  kind?: RevealKind;
};

type MotionSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
};

type MotionFooterProps = HTMLMotionProps<"footer"> & {
  children: ReactNode;
};

type SoftParallaxProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
};

type ScrollDepthProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
  fade?: boolean;
  scale?: boolean;
};

const revealVariants = {
  section: sectionReveal,
  text: textReveal,
  hero: heroTextReveal,
  card: cardReveal
};

export function MotionSection({
  children,
  className = "",
  ...props
}: MotionSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reducedMotion ? false : "hidden"}
      variants={sectionReveal}
      viewport={motionViewport}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionFooter({
  children,
  className = "",
  ...props
}: MotionFooterProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.footer
      className={className}
      initial={reducedMotion ? false : "hidden"}
      variants={sectionReveal}
      viewport={motionViewport}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.footer>
  );
}

export function Reveal({
  children,
  className = "",
  kind = "section",
  ...props
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      variants={revealVariants[kind]}
      viewport={motionViewport}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      variants={staggerParent}
      viewport={motionViewport}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div className={className} variants={cardReveal} {...props}>
      {children}
    </motion.div>
  );
}

export function SoftParallax({
  children,
  className = "",
  distance = 18,
  style,
  ...props
}: SoftParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const motionStyle = (reducedMotion ? style : { ...style, y }) as MotionStyle;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={motionStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollDepth({
  children,
  className = "",
  distance = 42,
  fade = false,
  scale = false,
  style,
  ...props
}: ScrollDepthProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [distance, 0, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.42, 1, 1, 0.62]);
  const depthScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.975, 1, 0.985]);
  const motionStyle = reducedMotion
    ? style
    : ({
        ...style,
        y,
        opacity: fade ? opacity : style?.opacity,
        scale: scale ? depthScale : style?.scale
      } as MotionStyle);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={motionStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
}
