import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";

export function CallToAction() {
  return (
    <section className="bg-ink text-bg relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-bg/60 mb-5">Start the conversation</p>
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-bg">
              Ready to discuss your{" "}
              <span className="italic font-light">requirements</span>?
            </h2>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-bg/75">
              Our consultants are ready to understand your challenges and
              deliver practical solutions. Most engagements begin with a
              short, confidential conversation.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="md:col-span-5 md:pl-10 md:border-l hairline md:border-l-bg/15 space-y-6"
          >
            <div>
              <p className="eyebrow text-bg/50">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="block mt-1 display text-[1.35rem] text-bg hover:text-accent-soft transition-colors"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-bg/50">Phone</p>
              <p className="mt-1 text-[1.05rem] text-bg/90">{site.phone}</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 bg-bg text-ink rounded-full px-6 py-3 text-[0.92rem] font-medium hover:bg-accent-soft transition-colors duration-300"
            >
              Book an introductory call
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
