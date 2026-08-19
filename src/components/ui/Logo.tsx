/**
 * Site mark: three ascending columns joined by a connecting node.
 * Reads as growth plus connection — the two ideas the site is about.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Financial Inclusion in Egypt"
    >
      <rect width="32" height="32" rx="8" fill="var(--color-brand-700)" />
      <rect x="8" y="18" width="3.5" height="7" rx="1.2" fill="#fff" opacity="0.75" />
      <rect x="14.25" y="14" width="3.5" height="11" rx="1.2" fill="#fff" opacity="0.88" />
      <rect x="20.5" y="10" width="3.5" height="15" rx="1.2" fill="#fff" />
      <path
        d="M9.75 15.5 L16 11.5 L22.25 7.5"
        fill="none"
        stroke="var(--color-gold-400)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22.25" cy="7.5" r="2.1" fill="var(--color-gold-400)" />
    </svg>
  );
}
