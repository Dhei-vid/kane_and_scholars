import { Reveal, StaggerItem, StaggerList } from "@/components/reveal";
import { team, teamIntro } from "@/lib/site-data";

export function Team() {
  return (
    <section className="border-b hairline border-b-rule/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-5">{teamIntro.eyebrow}</p>
          <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">
            {teamIntro.title}
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
            {teamIntro.intro}
          </p>
        </Reveal>

        <StaggerList
          as="ul"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule/70 list-none"
        >
          {team.map((member, i) => (
            <StaggerItem key={member.id} className="bg-bg p-7 md:p-9">
              <span className="text-[0.78rem] font-mono text-ink-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-[clamp(1.25rem,1.8vw,1.45rem)] mt-5 mb-3">
                {member.role}
              </h3>
              {member.expertise && (
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  <span className="text-ink-muted">Expertise in </span>
                  {member.expertise}
                </p>
              )}
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
