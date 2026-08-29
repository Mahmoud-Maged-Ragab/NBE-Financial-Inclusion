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

export function KenyaFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="60" height="12" fill="#000000" />
      <rect y="12" width="60" height="2" fill="#fff" />
      <rect y="14" width="60" height="12" fill="#bb0000" />
      <rect y="26" width="60" height="2" fill="#fff" />
      <rect y="28" width="60" height="12" fill="#006600" />
      {/* Simplified Maasai shield and spears */}
      <g transform="translate(30 20)">
        <line
          x1="-16"
          y1="-11"
          x2="16"
          y2="11"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <line
          x1="16"
          y1="-11"
          x2="-16"
          y2="11"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <path
          d="M0 -9.5 C4.6 -9.5 6.8 -7.2 6.8 -4 C6.8 -1 5.5 0.5 5.5 3 C5.5 6 3 9.5 0 11 C-3 9.5 -5.5 6 -5.5 3 C-5.5 0.5 -6.8 -1 -6.8 -4 C-6.8 -7.2 -4.6 -9.5 0 -9.5 Z"
          fill="#fff"
        />
        <path
          d="M0 -8 C3.8 -8 5.6 -6.1 5.6 -3.6 C5.6 -1 4.5 0.5 4.5 2.8 C4.5 5.4 2.6 8.3 0 9.6 C-2.6 8.3 -4.5 5.4 -4.5 2.8 C-4.5 0.5 -5.6 -1 -5.6 -3.6 C-5.6 -6.1 -3.8 -8 0 -8 Z"
          fill="#bb0000"
        />
        <rect x="-5.6" y="-1.3" width="11.2" height="2.6" fill="#000" />
        <line x1="0" y1="-8" x2="0" y2="9.6" stroke="#000" strokeWidth="0.5" />
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
