import type { Metadata } from "next";
import { CallToAction } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { Sectors } from "@/components/sectors";
import { approach, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Integrated people, payroll, and project services. Six disciplines delivered as a single practice.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Integrated people, payroll &amp;{" "}
            <span className="italic font-light">project</span> solutions.
          </>
        }
        intro="Six disciplines, delivered as a single practice. Each engagement is scoped to your operating model and accountable for measurable outcomes — not just deliverables."
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
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {service.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className="mt-2 block h-px w-3 bg-accent flex-shrink-0"
                          />
                          <span>{capability}</span>
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
