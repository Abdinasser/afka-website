"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { navLinks } from "@/data/site";
import { linkHover, mobileMenuReveal, navReveal } from "@/lib/motion";

function Wordmark() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex shrink-0 items-center rounded-full"
      aria-label="Afka Digital Institute home"
    >
      <Image
        src="/images/afka-wordmark-light.png"
        alt="Afka Digital Institute"
        width={816}
        height={324}
        priority
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.header
      animate="visible"
      className="fixed inset-x-0 top-4 z-[80] px-4 text-[var(--cloud-white)] sm:top-5"
      initial={reducedMotion ? false : "hidden"}
      variants={navReveal}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-fit items-center justify-center"
      >
        <div className="flex min-h-14 items-center gap-2 rounded-full border border-[rgba(244,248,249,0.12)] bg-[rgba(13,31,34,0.72)] px-3 py-2 shadow-[0_22px_70px_rgba(13,31,34,0.22)] backdrop-blur-2xl sm:gap-4 sm:px-4">
          <Wordmark />

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <motion.div
                  key={link.href}
                  whileHover={reducedMotion ? undefined : linkHover}
                >
                  <Link
                    href={link.href}
                    className={`focus-ring block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[rgba(244,248,249,0.1)] text-[var(--cloud-white)]"
                        : "text-[rgba(244,248,249,0.68)] hover:bg-[rgba(244,248,249,0.08)] hover:text-[var(--cloud-white)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(244,248,249,0.12)] bg-[rgba(244,248,249,0.06)] text-[var(--cloud-white)] md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate="visible"
            className="mx-auto mt-3 max-w-[19rem] rounded-[var(--r-pill)] border border-[rgba(244,248,249,0.12)] bg-[rgba(13,31,34,0.9)] p-3 shadow-[0_22px_70px_rgba(13,31,34,0.28)] backdrop-blur-2xl md:hidden"
            exit="exit"
            id="mobile-menu"
            initial={reducedMotion ? false : "hidden"}
            variants={mobileMenuReveal}
          >
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`focus-ring rounded-full px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-[rgba(244,248,249,0.1)] text-[var(--cloud-white)]"
                        : "text-[rgba(244,248,249,0.7)] hover:bg-[rgba(244,248,249,0.08)] hover:text-[var(--cloud-white)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
