"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { mobileMenuReveal, navReveal } from "@/lib/motion";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const redesignNav: NavItem[] = [
  { label: "Mission", href: "#mission" },
  { label: "Focus", href: "#focus" },
  { label: "Outputs", href: "#outputs" },
  { label: "Method", href: "#method" },
  { label: "Audiences", href: "#audiences" },
  { label: "Contact", href: "#engage" }
];

export function RedesignHeader() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.header
      animate="visible"
      className="redesign-header fixed inset-x-0 top-0 z-[80]"
      initial={reducedMotion ? false : "hidden"}
      variants={navReveal}
    >
      <div className="redesign-header-rail">
        <div className="redesign-header-inner">
          <Link
            href="/redesign"
            aria-label="Afka Digital Institute — redesign preview"
            className="focus-ring inline-flex shrink-0 items-center gap-3"
          >
            <Image
              src="/images/afka-wordmark-black.png"
              alt="Afka Digital Institute"
              width={816}
              height={324}
              priority
              className="h-6 w-auto sm:h-7"
            />
            <span className="redesign-issue-chip">Preview · Concept v2</span>
          </Link>

          <nav
            aria-label="Section navigation"
            className="redesign-header-nav"
          >
            {redesignNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring redesign-header-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="redesign-header-cta">
            <Link
              href="/"
              className="focus-ring redesign-link-quiet"
            >
              Live site
            </Link>
            <a
              href="#engage"
              className="focus-ring redesign-cta-pill"
            >
              Work with Afka
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="redesign-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring redesign-header-burger"
          >
            <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="redesign-mobile-menu"
            animate="visible"
            exit="exit"
            initial={reducedMotion ? false : "hidden"}
            variants={mobileMenuReveal}
            className="redesign-mobile-menu"
          >
            <div className="grid gap-1">
              {redesignNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring redesign-mobile-link"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="focus-ring redesign-mobile-link redesign-mobile-link-quiet"
              >
                Return to live site
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
