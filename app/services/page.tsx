import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { Sectors } from "@/components/sectors";
import {
  approach,
  products,
  productsIntro,
  services,
  servicesHero,
  servicesIntro,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: servicesIntro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesHero.eyebrow}
        title={
          <>
            {servicesHero.titleLead}{" "}
            <span className="italic font-light">{servicesHero.titleEmphasis}</span>
          </>
        }
        intro={servicesHero.intro}
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <StaggerList
            as="ol"
            className="space-y-px bg-rule/70 border-y hairline border-y-rule/70"
          >
            {services.map((service, i) => (
              <StaggerItem
                key={service.id}
                className="bg-bg py-10 md:py-14 px-2 md:px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-4">
                    <span className="eyebrow text-accent">
                      {String(i + 1).padStart(2, "0")} · Service
                    </span>
                    <h3 className="display text-[clamp(1.6rem,2.6vw,2.25rem)] mt-3">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
                      {service.detail}
                    </p>
                  </div>

                  <div className="md:col-span-7 md:col-start-6">
                    <p className="eyebrow mb-4">What this looks like</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                      {service.capabilities.map((capability) => (
                        <li
                          key={capability.title}
                          className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className="mt-2 block h-px w-3 bg-accent flex-shrink-0"
                          />
                          <span>
                            <span className="font-medium text-ink">
                              {capability.title}
                            </span>
                            {": "}
                            {capability.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="bg-bg-elevated border-y hairline border-y-rule/60">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
            <Reveal className="md:col-span-4">
              <p className="eyebrow mb-5">Products</p>
              <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
                Digital products.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6">
              <p className="text-[1rem] leading-relaxed text-ink-soft">
                {productsIntro}
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-8 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
              >
                View all products
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <StaggerList
            as="ol"
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule/70"
          >
            {products.map((product, i) => (
              <StaggerItem key={product.id} className="bg-bg p-7 md:p-9">
                <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[clamp(1.25rem,1.8vw,1.5rem)] mt-4 mb-3">
                  {product.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {product.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <p className="eyebrow mb-5">How we engage</p>
              <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
                A three-step engagement model.
              </h2>
            </Reveal>

            <StaggerList as="ol" className="md:col-span-8 space-y-10">
              {approach.map((step) => (
                <StaggerItem
                  key={step.number}
                  className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-t hairline border-t-rule/70 pt-6"
                >
                  <span className="display text-[2.4rem] text-accent leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="display text-[1.5rem] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[1rem] leading-relaxed text-ink-soft max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      <Sectors />
      <CallToAction />
    </>
  );
}
