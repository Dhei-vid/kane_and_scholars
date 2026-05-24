import { SocialIcon } from "@/components/social-icons";
import { socialLinks } from "@/lib/site-data";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {socialLinks.map((item) => (
        <li key={item.network}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label} (opens in new tab)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline border-rule/80 text-ink-soft hover:text-ink hover:border-accent transition-colors duration-300"
          >
            <SocialIcon
              network={item.network}
              className="h-[1.05rem] w-[1.05rem]"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
