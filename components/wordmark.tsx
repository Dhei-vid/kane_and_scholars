import Link from "next/link";
import { site } from "@/lib/site-data";

export function Wordmark({ subdued = false }: { subdued?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <span
        className={`display text-[1.35rem] leading-none ${
          subdued ? "text-ink-soft" : "text-ink"
        }`}
      >
        Kane
      </span>
      <span
        aria-hidden
        className="text-[0.85rem] italic font-display text-accent translate-y-[-1px]"
      >
        &amp;
      </span>
      <span
        className={`display text-[1.35rem] leading-none ${
          subdued ? "text-ink-soft" : "text-ink"
        }`}
      >
        Scholars
      </span>
    </Link>
  );
}
