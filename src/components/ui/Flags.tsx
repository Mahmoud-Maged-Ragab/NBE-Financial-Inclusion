/**
 * Simplified national flags drawn inline, so no external image is needed and
 * both render crisply at any size. Decorative — each is paired with the country
 * name in text.
 */

export function EgyptFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="60" height="13.34" fill="#ce1126" />
      <rect y="13.34" width="60" height="13.33" fill="#fff" />
      <rect y="26.67" width="60" height="13.33" fill="#000" />
      {/* Simplified Eagle of Saladin */}
      <g fill="#c09300" transform="translate(30 20)">
        <path d="M0 -5.2 L1.5 -2.4 L4.6 -2.4 L2.2 -0.5 L3.1 2.4 L0 0.7 L-3.1 2.4 L-2.2 -0.5 L-4.6 -2.4 L-1.5 -2.4 Z" />
        <rect x="-2.6" y="2.9" width="5.2" height="1.2" rx="0.5" />
      </g>
      <rect
        width="60"
        height="40"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function IndiaFlag({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="60" height="13.34" fill="#ff9933" />
      <rect y="13.34" width="60" height="13.33" fill="#fff" />
      <rect y="26.67" width="60" height="13.33" fill="#138808" />
      {/* Ashoka Chakra */}
      <g transform="translate(30 20)">
        <circle r="5.8" fill="none" stroke="#000080" strokeWidth="0.9" />
        <circle r="1.1" fill="#000080" />
        {spokes.map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="0"
            x2="0"
            y2="-5.8"
            stroke="#000080"
            strokeWidth="0.4"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
      <rect
        width="60"
        height="40"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="1"
      />
    </svg>
  );
}
