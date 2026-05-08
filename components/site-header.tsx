"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { nav } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

const panelVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease, when: "afterChildren" },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
};

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b hairline border-b-rule/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <Wordmark />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-9">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.86rem] tracking-tight transition-colors duration-200 ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span className="relative inline-block">
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-[0.86rem] font-medium text-bg bg-ink rounded-full px-4 py-2 hover:bg-accent transition-colors duration-300"
        >
          Speak with us
          <span aria-hidden className="translate-y-[-1px]">→</span>
        </Link>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border hairline border-rule/80 text-ink transition-colors duration-300 hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <span className="relative h-4 w-4" aria-hidden>
            <motion.span
              className="absolute left-0 top-1 block h-px w-4 bg-current origin-center"
              animate={menuOpen ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              className="absolute left-0 top-2 block h-px w-4 bg-current"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2, ease }}
            />
            <motion.span
              className="absolute left-0 top-3 block h-px w-4 bg-current origin-center"
              animate={menuOpen ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute inset-x-0 top-full backdrop-blur-md bg-bg/95 border-b hairline border-b-rule/60 shadow-[0_24px_40px_-32px_oklch(0.2_0.02_260_/_0.18)]"
          >
            <nav aria-label="Mobile primary" className="mx-6 py-6">
              <ul className="space-y-1">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`group flex items-center justify-between py-3 text-[1.45rem] leading-none transition-colors duration-200 ${
                          active ? "text-accent" : "text-ink hover:text-accent"
                        }`}
                      >
                        <span className="display">{item.label}</span>
                        <span
                          aria-hidden
                          className="text-[1rem] text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent motion-reduce:transition-none"
                        >
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div variants={itemVariants} className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-[0.92rem] font-medium text-bg hover:bg-accent transition-colors duration-300"
                >
                  Speak with us
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
