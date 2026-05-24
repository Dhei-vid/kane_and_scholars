import Link from "next/link";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { services, servicesIntro } from "@/lib/site-data";

type ServicesProps = {
  showCta?: boolean;
};

export function Services({ showCta = true }: ServicesProps) {
  return (
    <section>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-5">Our practice</p>
            <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
              Services that scale with you
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft max-w-sm">
              {servicesIntro}
            </p>

            {showCta && (
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
              >
                See full capability detail
                <span aria-hidden>→</span>
              </Link>
            )}
          </Reveal>

          <StaggerList
            as="ol"
            className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule/70"
          >
            {services.map((service, index) => (
              <StaggerItem
                key={service.id}
                className="bg-bg p-7 md:p-9 group relative"
              >
                <div className="flex items-start gap-5">
                  <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="display text-[1.45rem] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute right-7 top-7 w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors duration-300"
                />
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
}
