import Link from "next/link";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { insights } from "@/lib/site-data";

export function Insights() {
  const [feature, ...rest] = insights.slice(0, 4);

  return (
    <section>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">Insights &amp; perspectives</p>
              <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
                Field notes on people, delivery, and change.
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
            >
              All perspectives →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <Reveal className="md:col-span-7">
            <article className="group">
              <Link href="/insights" className="block">
                <div className="aspect-[16/10] bg-accent-soft rounded-sm overflow-hidden relative">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, oklch(0.93 0.025 100) 0%, oklch(0.86 0.04 90) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end p-8">
                    <span className="display italic text-[8rem] leading-none text-ink/15 select-none">
                      01
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <p className="eyebrow text-accent">{feature.category}</p>
                  <span aria-hidden className="text-rule">
                    ·
                  </span>
                  <p className="text-[0.78rem] tracking-wide text-ink-muted">
                    {feature.date}
                  </p>
                </div>
                <h3 className="display text-[clamp(1.6rem,2.4vw,2.1rem)] mt-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
                  {feature.excerpt}
                </p>
                <p className="mt-5 text-[0.78rem] tracking-wide text-ink-muted">
                  {feature.readTime}
                </p>
              </Link>
            </article>
          </Reveal>

          <StaggerList className="md:col-span-5 divide-y hairline divide-rule/70 border-t hairline border-t-rule/70">
            {rest.map((post, i) => (
              <StaggerItem key={post.id} className="py-7 group">
                <Link href="/insights" className="block">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="eyebrow text-accent">{post.category}</p>
                        <span aria-hidden className="text-rule">
                          ·
                        </span>
                        <p className="text-[0.72rem] tracking-wide text-ink-muted">
                          {post.readTime}
                        </p>
                      </div>
                      <h3 className="display text-[1.25rem] leading-snug group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="text-ink-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
}
