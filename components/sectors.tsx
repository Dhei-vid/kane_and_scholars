import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { sectors } from "@/lib/site-data";

export function Sectors() {
  return (
    <section className="border-b hairline border-b-rule/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-4">Sectors we serve</p>
            <h2 className="display text-[clamp(1.65rem,3vw,2.25rem)]">
              Where our work lands.
            </h2>
          </Reveal>

          <StaggerList
            className="md:col-span-8 flex flex-wrap gap-x-3 gap-y-3"
            amount={0.3}
          >
            {sectors.map((sector, i) => (
              <StaggerItem
                key={sector}
                className="flex items-center gap-3 text-[1rem] md:text-[1.05rem] text-ink-soft"
              >
                {i > 0 && (
                  <span aria-hidden className="text-rule">
                    /
                  </span>
                )}
                <span className="hover:text-ink transition-colors">
                  {sector}
                </span>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
}
