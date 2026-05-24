import Link from "next/link";
import { faqs } from "@/lib/site-data";

type FaqListProps = {
  limit?: number;
  showViewAllLink?: boolean;
};

export function FaqList({ limit, showViewAllLink = false }: FaqListProps) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div>
      <div className="divide-y hairline divide-rule/70 border-y hairline border-y-rule/70">
        {items.map((faq) => (
          <details key={faq.id} className="group py-5 md:py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.02rem] md:text-[1.05rem] text-ink [&::-webkit-details-marker]:hidden">
              <span className="font-medium leading-snug">{faq.question}</span>
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border hairline border-rule/80 text-[1.1rem] leading-none text-ink-muted transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft pr-2 md:pr-10">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      {showViewAllLink && limit && limit < faqs.length && (
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 mt-8 text-[0.92rem] font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
        >
          View all FAQs
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
