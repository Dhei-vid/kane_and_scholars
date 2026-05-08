import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { nav, site } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline border-t-rule/60 mt-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-5">
            <Wordmark />
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              An advisory practice for leadership teams navigating growth,
              regulatory change, and the operational realities of building a
              durable people function.
            </p>
            <p className="text-[0.78rem] tracking-wide text-ink-muted">
              Registered in England &amp; Wales · Company No. 14582033
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <p className="eyebrow">Get in touch</p>
            <a
              href={`mailto:${site.email}`}
              className="block text-[1.05rem] font-display text-ink hover:text-accent transition-colors"
            >
              {site.email}
            </a>
            <p className="text-[0.92rem] text-ink-soft">{site.phone}</p>
            <p className="text-[0.92rem] text-ink-soft leading-relaxed">
              {site.address}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t hairline border-t-rule/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[0.78rem] text-ink-muted tracking-wide">
            © {year} {site.name} Ltd. All rights reserved.
          </p>
          <p className="text-[0.78rem] text-ink-muted tracking-wide">
            Designed and delivered in London.
          </p>
        </div>
      </div>
    </footer>
  );
}
