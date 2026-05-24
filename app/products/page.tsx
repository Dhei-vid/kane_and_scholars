import type { Metadata } from "next";
import { CallToAction } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { products, productsIntro } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description: productsIntro,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Digital tools for{" "}
            <span className="italic font-light">growth</span>.
          </>
        }
        intro={productsIntro}
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <StaggerList
            as="ol"
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule/70"
          >
            {products.map((product, i) => (
              <StaggerItem key={product.id} className="bg-bg p-7 md:p-9">
                <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-[clamp(1.35rem,2vw,1.65rem)] mt-4 mb-3">
                  {product.title}
                </h2>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {product.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="border-t hairline border-t-rule/60">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-[1rem] leading-relaxed text-ink-soft">
              Looking for hands-on advisory and delivery? Explore our{" "}
              <a
                href="/services"
                className="font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
              >
                services
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
