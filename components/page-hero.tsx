import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b hairline border-b-rule/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-9">
            <Reveal immediate>
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden className="block w-10 h-px bg-accent/80" />
                <p className="eyebrow text-accent">{eyebrow}</p>
              </div>
            </Reveal>

            <Reveal immediate delay={0.1}>
              <h1 className="display text-[clamp(2.4rem,6vw,5rem)]">{title}</h1>
            </Reveal>

            {intro && (
              <Reveal immediate delay={0.2}>
                <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.1rem] leading-relaxed text-ink-soft">
                  {intro}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
