import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with a Kane & Scholars consultant about your people, payroll, or transformation priorities.",
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  { label: "Office", value: site.address },
  { label: "Response time", value: site.responseTime },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s start the{" "}
            <span className="italic font-light">conversation</span>.
          </>
        }
        intro="Whether you need interim support, project delivery, or a long-term advisory partner, we'd be glad to understand what you're working on."
      />

      <section>
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <Reveal className="md:col-span-5">
              <aside>
                <p className="eyebrow mb-6">Direct channels</p>

                <StaggerList
                  as="div"
                  className="divide-y hairline divide-rule/70 border-y hairline border-y-rule/70"
                >
                  {channels.map((channel) => (
                    <StaggerItem
                      as="div"
                      key={channel.label}
                      className="grid grid-cols-3 gap-4 py-5 items-baseline"
                    >
                      <p className="text-[0.78rem] tracking-[0.18em] uppercase text-ink-muted">
                        {channel.label}
                      </p>
                      <p className="col-span-2 text-[1rem] text-ink">
                        {"href" in channel && channel.href ? (
                          <a
                            href={channel.href}
                            className="hover:text-accent transition-colors"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          channel.value
                        )}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerList>

                <p className="mt-10 text-[0.95rem] leading-relaxed text-ink-soft max-w-sm">
                  Most engagements begin with a short, confidential
                  conversation. Share as much or as little as you&rsquo;d like
                  — we&rsquo;ll take it from there.
                </p>
              </aside>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-7">
              <p className="eyebrow mb-6">Send a message</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
