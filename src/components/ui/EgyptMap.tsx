"use client";

import { useState } from "react";

export interface MapRegion {
  id: "delta" | "valley" | "frontier";
  name: string;
  character: string;
  description: string;
  barriers: string[];
}

export interface MapLabels {
  alt: string;
  regionsLabel: string;
  barriersHeading: string;
  caption: string;
  delta: string;
  easternDesert: string;
  westernDesert: string;
  sinai: string;
  upperEgypt: string;
}

export function EgyptMap({
  regions,
  labels,
}: {
  regions: MapRegion[];
  labels: MapLabels;
}) {
  const [active, setActive] = useState<MapRegion["id"]>("valley");
  const region = regions.find((r) => r.id === active) ?? regions[0];

  const fill = (id: string, base: string, on: string) =>
    active === id ? on : base;

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
      <div className="mx-auto w-full max-w-[300px] lg:mx-0">
        {/* The map itself keeps a fixed orientation in both languages. */}
        <svg
          viewBox="0 0 400 430"
          className="chart-plot h-auto w-full"
          role="img"
          aria-label={labels.alt}
        >
          {/* Country body — desert */}
          <g
            onClick={() => setActive("frontier")}
            className="cursor-pointer"
            aria-hidden="true"
          >
            <path
              d="M60 70 L120 58 L170 48 L225 56 L258 74 L268 120 L292 175 L318 240 L340 310 L350 372 L60 372 Z"
              fill={fill("frontier", "#eceae2", "#e0d9c2")}
              stroke="var(--color-ink-300)"
              strokeWidth="1.5"
              className="transition-colors duration-300"
            />
            {/* Sinai */}
            <path
              d="M268 74 L332 64 L338 96 L300 146 L278 108 Z"
              fill={fill("frontier", "#eceae2", "#e0d9c2")}
              stroke="var(--color-ink-300)"
              strokeWidth="1.5"
              className="transition-colors duration-300"
            />
          </g>

          {/* Nile valley — inhabited strip */}
          <g
            onClick={() => setActive("valley")}
            className="cursor-pointer"
            aria-hidden="true"
          >
            <path
              d="M206 366 C198 310 192 250 187 196 C184 156 180 126 177 100"
              fill="none"
              stroke={fill("valley", "#7db39c", "#1a5943")}
              strokeWidth="16"
              strokeLinecap="round"
              className="transition-colors duration-300"
            />
            <ellipse
              cx="203"
              cy="352"
              rx="15"
              ry="26"
              fill={fill("valley", "#7db39c", "#1a5943")}
              className="transition-colors duration-300"
            />
          </g>

          {/* Delta */}
          <g
            onClick={() => setActive("delta")}
            className="cursor-pointer"
            aria-hidden="true"
          >
            <path
              d="M177 104 L134 60 L222 56 Z"
              fill={fill("delta", "#7db39c", "#1a5943")}
              className="transition-colors duration-300"
            />
          </g>

          {/* The river itself */}
          <path
            d="M206 366 C198 310 192 250 187 196 C184 156 180 126 177 100 L150 62"
            fill="none"
            stroke="#2b6cb0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
            aria-hidden="true"
          />

          <g
            fontSize="11"
            fill="var(--color-ink-600)"
            aria-hidden="true"
            className="pointer-events-none"
          >
            <text x="186" y="40" textAnchor="middle">
              {labels.delta}
            </text>
            <text x="248" y="230" textAnchor="middle">
              {labels.easternDesert}
            </text>
            <text x="108" y="230" textAnchor="middle">
              {labels.westernDesert}
            </text>
            <text x="330" y="122" textAnchor="middle">
              {labels.sinai}
            </text>
            <text x="152" y="300" textAnchor="middle">
              {labels.upperEgypt}
            </text>
          </g>
        </svg>

        <p className="mt-3 text-xs leading-relaxed text-ink-500">
          {labels.caption}
        </p>
      </div>

      <div>
        <div
          role="tablist"
          aria-label={labels.regionsLabel}
          className="flex flex-wrap gap-2"
        >
          {regions.map((r) => (
            <button
              key={r.id}
              role="tab"
              type="button"
              aria-selected={active === r.id}
              onClick={() => setActive(r.id)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                active === r.id
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-ink-200 bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
            {region.character}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink-900">
            {region.name}
          </h3>
          <p className="mt-3 leading-relaxed text-pretty text-ink-700">
            {region.description}
          </p>
          <p className="mt-5 text-sm font-medium text-ink-900">
            {labels.barriersHeading}
          </p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {region.barriers.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm text-ink-600">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
