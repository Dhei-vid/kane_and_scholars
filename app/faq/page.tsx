import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/cta";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { faqHero } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: faqHero.intro,
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow={faqHero.eyebrow}
        title={
          <>
            {faqHero.titleLead}{" "}
            <span className="italic font-light">{faqHero.titleEmphasis}</span>
          </>
        }
        intro={faqHero.intro}
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <p className="eyebrow mb-4">Still unsure?</p>
              <h2 className="display text-[clamp(1.65rem,3vw,2.25rem)]">
                We&rsquo;re happy to help.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                If your question isn&rsquo;t covered here, reach out and we will
                point you in the right direction.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
              >
                Contact us
                <span aria-hidden>→</span>
              </Link>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
