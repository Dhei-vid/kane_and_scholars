import type { Metadata } from "next";
import { CallToAction } from "@/components/cta";
import { Founder } from "@/components/founder";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { mission, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kane & Scholars is a London-based advisory practice delivering people, payroll, and project solutions for organisations navigating growth and change.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An advisory practice built around{" "}
            <span className="italic font-light">delivery</span>.
          </>
        }
        intro="Kane & Scholars is a London-based advisory practice. We deliver disciplined people, payroll, and project solutions for organisations operating across multiple jurisdictions — combining strategic clarity with hands-on execution."
      />

      <Founder showCta={false} />

      <section className="border-b hairline border-b-rule/60">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow mb-5">Mission &amp; vision</p>
              <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
                Why we exist.
              </h2>
            </Reveal>

            <StaggerList as="div" className="md:col-span-7 space-y-10">
              <StaggerItem
                as="div"
                className="border-t hairline border-t-rule/70 pt-6"
              >
                <p className="eyebrow text-accent mb-3">Mission</p>
                <p className="display text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink">
                  {mission.mission}
                </p>
              </StaggerItem>
              <StaggerItem
                as="div"
                className="border-t hairline border-t-rule/70 pt-6"
              >
                <p className="eyebrow text-accent mb-3">Vision</p>
                <p className="display text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink">
                  {mission.vision}
                </p>
              </StaggerItem>
            </StaggerList>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mb-14 md:mb-20">
            <p className="eyebrow mb-5">Our values</p>
            <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
              What we hold to.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
              Six commitments that shape how we work — visible in every
              engagement, not just on the wall.
            </p>
          </Reveal>

          <StaggerList
            as="ol"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/70"
          >
            {values.map((value, i) => (
              <StaggerItem key={value.title} className="bg-bg p-7 md:p-9">
                <div className="flex items-start gap-5">
                  <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[1.4rem] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                      {value.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
