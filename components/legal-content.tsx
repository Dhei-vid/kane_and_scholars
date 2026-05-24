import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

type LegalContentProps = {
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export function LegalSectionBlock({ title, paragraphs }: LegalSection) {
  return (
    <div className="border-t hairline border-t-rule/70 pt-8 first:border-t-0 first:pt-0">
      <h2 className="display text-[1.35rem] text-ink mb-4">{title}</h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function LegalContent({ lastUpdated, sections }: LegalContentProps) {
  return (
    <section>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <p className="text-[0.78rem] tracking-wide text-ink-muted mb-10">
          Last updated: {lastUpdated}
        </p>
        <div className="max-w-3xl space-y-10 text-[0.98rem] leading-relaxed text-ink-soft">
          {sections.map((section) => (
            <LegalSectionBlock key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalContactNote({ children }: { children: ReactNode }) {
  return (
    <section className="border-t hairline border-t-rule/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-16">
        <p className="max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
          {children}
        </p>
      </div>
    </section>
  );
}
