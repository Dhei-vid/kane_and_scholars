import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-9 md:col-start-1">
            <Reveal immediate>
              <div className="flex items-center gap-3 mb-10">
                <span aria-hidden className="block w-10 h-px bg-accent/80" />
                <p className="eyebrow text-accent">
                  Advisory · London &amp; Lagos
                </p>
              </div>
            </Reveal>

            <Reveal immediate delay={0.1}>
              <h1 className="display text-[clamp(2.6rem,7.2vw,5.75rem)]">
                People, payroll, and{" "}
                <span className="italic font-light">change</span>
                <span className="text-accent">—</span>
                <br className="hidden md:block" />
                delivered with precision.
              </h1>
            </Reveal>

            <Reveal immediate delay={0.2}>
              <p className="mt-10 max-w-xl text-[1.05rem] md:text-[1.1rem] leading-relaxed text-ink-soft">
                Kane &amp; Scholars partners with organisations navigating
                growth, complexity, and transformation. We deliver disciplined
                people, payroll, and project solutions — combining strategic
                clarity with hands-on execution across jurisdictions.
              </p>
            </Reveal>

            <Reveal immediate delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-ink text-bg rounded-full px-6 py-3 text-[0.92rem] font-medium hover:bg-accent transition-colors duration-300"
                >
                  Speak with a consultant
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
                >
                  Explore our services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={0.35}
            className="md:col-span-3 md:pt-3 md:border-l hairline md:border-l-rule/70 md:pl-8"
          >
            <aside>
              <p className="eyebrow mb-3">Trusted by</p>
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                Leadership teams across fintech, professional services, and
                growth-stage organisations.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                    Established
                  </dt>
                  <dd className="display text-[1.6rem] mt-1">2018</dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                    Engagements
                  </dt>
                  <dd className="display text-[1.6rem] mt-1">120+</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-rule/60"
      />
    </section>
  );
}
