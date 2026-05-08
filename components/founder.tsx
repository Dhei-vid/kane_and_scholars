import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { founder } from "@/lib/site-data";

type FounderProps = {
  showCta?: boolean;
};

export function Founder({ showCta = true }: FounderProps) {
  return (
    <section className="border-y hairline border-y-rule/60 bg-bg-elevated">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-5">Founder &amp; principal</p>
            <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
              {founder.name}
            </h2>
            <p className="mt-2 text-[0.95rem] text-ink-soft italic">
              {founder.role}
            </p>

            <figure className="mt-10 max-w-md">
              <blockquote className="display text-[1.55rem] leading-snug text-ink">
                <span className="text-accent" aria-hidden>
                  &ldquo;
                </span>
                Strategy is necessary, but it does not deliver itself. My
                role is to ensure the work holds — through clear structure,
                shared accountability, and informed decision-making.
                <span className="text-accent" aria-hidden>
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="mt-5 text-[0.85rem] tracking-wide text-ink-muted">
                — {founder.name}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            delay={0.1}
            className="md:col-span-7 md:pl-12 md:border-l hairline md:border-l-rule/70"
          >
            <div className="space-y-6 text-[1.02rem] leading-relaxed text-ink-soft max-w-2xl">
              {founder.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {founder.credentials.map((item) => (
                <div
                  key={item.label}
                  className="border-t hairline border-t-rule/70 pt-4"
                >
                  <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                    {item.label}
                  </dt>
                  <dd className="display text-[1.85rem] mt-2 text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {showCta && (
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-12 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
              >
                Read more about her journey
                <span aria-hidden>→</span>
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
