import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { site, telHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with a Kane & Scholars consultant about your people, payroll, or transformation priorities.",
};

type ChannelLink = { value: string; href: string };
type Channel =
  | { label: string; links: readonly ChannelLink[] }
  | { label: string; value: string };

const channels: readonly Channel[] = [
  {
    label: "Email",
    links: site.emails.map((email) => ({
      value: email,
      href: `mailto:${email}`,
    })),
  },
  {
    label: "Phone",
    links: site.phones.map((phone) => ({
      value: phone,
      href: telHref(phone),
    })),
  },
  { label: "Office", value: site.address },
  { label: "Response time", value: site.responseTime },
];

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
                      <div className="col-span-2 text-[1rem] text-ink space-y-1">
                        {"links" in channel ? (
                          channel.links.map((link) => (
                            <p key={link.href}>
                              <a
                                href={link.href}
                                className="hover:text-accent transition-colors"
                              >
                                {link.value}
                              </a>
                            </p>
                          ))
                        ) : (
                          <p>{channel.value}</p>
                        )}
                      </div>
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

      <section className="bg-bg-elevated border-y hairline border-y-rule/60">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <p className="eyebrow mb-4">FAQs</p>
              <h2 className="display text-[clamp(1.65rem,3vw,2.25rem)]">
                Common questions.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                Answers about our services, products, and how we work with
                clients.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
              <FaqList limit={4} showViewAllLink />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
