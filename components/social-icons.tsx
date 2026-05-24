type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 8.5H16V5h-2.5C11.57 5 10 6.57 10 8.5V11H7v3.5h3V21h3.5v-6.5H17l.5-3.5h-3.5V9.5c0-.55.45-1 1-1z" />
    </svg>
  );
}

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

export function SocialIcon({
  network,
  className,
}: {
  network: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[network];
  return <Icon className={className} />;
}
