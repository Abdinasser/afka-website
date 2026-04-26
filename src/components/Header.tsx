"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/data/site";

function Wordmark() {
  return (
    <a
      href="#top"
      className="focus-ring flex items-center rounded-sm"
      aria-label="Afka Digital Institute home"
    >
      <Image
        src="/images/afka-logo-light-transparent.png"
        alt="Afka Digital Institute"
        width={260}
        height={124}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[rgba(23,35,49,0.86)] text-white shadow-[0_14px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10"
      >
        <Wordmark />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[var(--sand)] lg:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/8 text-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/12 bg-[var(--ink)] px-5 py-5 shadow-sm lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="focus-ring rounded-sm px-1 py-3 text-base font-medium text-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="focus-ring mt-3 inline-flex min-h-12 items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Get in Touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
