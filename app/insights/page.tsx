import type { Metadata } from "next";
import { CallToAction } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { StaggerItem, StaggerList } from "@/components/reveal";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives on people, delivery, and organisational change from Kane & Scholars.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Field notes on people, delivery &amp;{" "}
            <span className="italic font-light">change</span>.
          </>
        }
        intro="Practical perspectives drawn from engagements with leadership teams navigating growth, regulatory complexity, and workforce transformation."
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
          <StaggerList className="border-t hairline border-t-rule/70">
            {insights.map((post, i) => (
              <StaggerItem
                key={post.id}
                className="border-b hairline border-b-rule/70 py-10 md:py-12"
              >
                <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                  <div className="md:col-span-2">
                    <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:col-span-3">
                    <p className="eyebrow text-accent">{post.category}</p>
                    <p className="mt-2 text-[0.85rem] tracking-wide text-ink-muted">
                      {post.date}
                    </p>
                  </div>

                  <div className="md:col-span-7">
                    <h2 className="display text-[clamp(1.4rem,2.4vw,1.95rem)] leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft max-w-2xl">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-[0.78rem] tracking-wide text-ink-muted">
                      {post.readTime}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
