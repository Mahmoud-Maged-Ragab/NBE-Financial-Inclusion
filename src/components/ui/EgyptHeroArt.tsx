/**
 * Bespoke hero artwork.
 *
 * Left to right the skyline runs from the pyramids, through Cairo's mosques and
 * minarets, to modern towers — with a payment network drawn across the sky and
 * the Nile reflecting it all back. Purely decorative, so it is hidden from
 * assistive technology.
 */
export function EgyptHeroArt({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 150, y: 120, r: 4, gold: false },
    { x: 320, y: 78, r: 5, gold: true },
    { x: 470, y: 150, r: 4, gold: false },
    { x: 620, y: 96, r: 4, gold: false },
    { x: 780, y: 142, r: 5, gold: true },
    { x: 930, y: 84, r: 4, gold: false },
    { x: 1080, y: 138, r: 4, gold: false },
  ];

  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [1, 3],
    [2, 4],
    [4, 6],
  ];

  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041710" />
          <stop offset="55%" stopColor="#06251b" />
          <stop offset="100%" stopColor="#0a3527" />
        </linearGradient>

        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f4634" />
          <stop offset="100%" stopColor="#041710" />
        </linearGradient>

        <linearGradient id="reflectFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <mask id="reflectMask">
          <rect x="0" y="430" width="1200" height="210" fill="url(#reflectFade)" />
        </mask>

        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#c9a548" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9a548" stopOpacity="0" />
        </radialGradient>

        {/* Skyline drawn once, reused for the reflection */}
        <g id="skyline">
          {/* Pyramids */}
          <path d="M40 430 L165 246 L290 430 Z" fill="#0a3527" />
          <path d="M165 246 L290 430 L228 430 Z" fill="#082a1f" />
          <path d="M250 430 L330 312 L410 430 Z" fill="#0a3527" />
          <path d="M330 312 L410 430 L370 430 Z" fill="#082a1f" />

          {/* Minarets and dome */}
          <rect x="512" y="252" width="13" height="178" fill="#0a3527" />
          <path d="M518.5 232 L527 254 L510 254 Z" fill="#0a3527" />
          <rect x="640" y="240" width="13" height="190" fill="#0a3527" />
          <path d="M646.5 220 L655 242 L638 242 Z" fill="#0a3527" />
          <path
            d="M540 430 L540 372 A 43 43 0 0 1 626 372 L626 430 Z"
            fill="#0a3527"
          />
          <rect x="534" y="424" width="98" height="8" fill="#082a1f" />

          {/* Modern towers */}
          <rect x="700" y="300" width="52" height="130" fill="#0a3527" />
          <rect x="762" y="252" width="44" height="178" fill="#0d3d2c" />
          <rect x="816" y="330" width="60" height="100" fill="#0a3527" />
          <rect x="886" y="212" width="40" height="218" fill="#0d3d2c" />
          <rect x="936" y="288" width="56" height="142" fill="#0a3527" />
          <rect x="1002" y="336" width="46" height="94" fill="#0d3d2c" />
          <rect x="1058" y="270" width="50" height="160" fill="#0a3527" />
          <rect x="1118" y="344" width="52" height="86" fill="#0d3d2c" />

          {/* A few lit windows */}
          <g fill="#c9a548" opacity="0.55">
            <rect x="772" y="272" width="6" height="8" />
            <rect x="786" y="296" width="6" height="8" />
            <rect x="772" y="320" width="6" height="8" />
            <rect x="896" y="238" width="6" height="8" />
            <rect x="906" y="272" width="6" height="8" />
            <rect x="896" y="310" width="6" height="8" />
            <rect x="1070" y="298" width="6" height="8" />
            <rect x="1084" y="330" width="6" height="8" />
          </g>
        </g>
      </defs>

      <rect width="1200" height="640" fill="url(#sky)" />

      {/* Ambient glow behind the towers */}
      <ellipse cx="880" cy="400" rx="420" ry="180" fill="url(#glow)" />

      {/* Payment network */}
      <g>
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#4b8c73"
            strokeWidth="1"
            opacity="0.45"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 5}
              fill={n.gold ? "#c9a548" : "#4b8c73"}
              opacity="0.16"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.gold ? "#c9a548" : "#7db39c"}
            />
          </g>
        ))}
      </g>

      {/* Horizon and skyline */}
      <use href="#skyline" />

      {/* The Nile */}
      <rect x="0" y="430" width="1200" height="210" fill="url(#water)" />
      <g mask="url(#reflectMask)">
        <use href="#skyline" transform="translate(0 860) scale(1 -1)" />
      </g>
      <g stroke="#7db39c" strokeWidth="1" opacity="0.22">
        <line x1="0" y1="466" x2="1200" y2="466" />
        <line x1="0" y1="500" x2="1200" y2="500" />
        <line x1="0" y1="540" x2="1200" y2="540" />
        <line x1="0" y1="588" x2="1200" y2="588" />
      </g>
      <line
        x1="0"
        y1="430"
        x2="1200"
        y2="430"
        stroke="#c9a548"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}
