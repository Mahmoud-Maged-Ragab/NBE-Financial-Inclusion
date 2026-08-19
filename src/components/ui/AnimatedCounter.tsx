"use client";

import { useCallback, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Duration in milliseconds. */
  duration?: number;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const format = (n: number, decimals: number) =>
  n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Counts up to `value` when scrolled into view.
 *
 * The server renders the final value, so the correct number is present without
 * JavaScript and in the accessibility tree. The reset to zero happens in a ref
 * callback during commit, which runs before paint — so there is no flash of the
 * final value, and no hydration mismatch.
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}: AnimatedCounterProps) {
  const frame = useRef<number | undefined>(undefined);
  const [display, setDisplay] = useState(value);

  const setNode = useCallback(
    (el: HTMLSpanElement | null) => {
      if (!el) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Leave the rendered final value in place.
      if (reduced || typeof IntersectionObserver === "undefined") return;

      setDisplay(0);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer.disconnect();

            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setDisplay(value * easeOutCubic(progress));
              if (progress < 1) frame.current = requestAnimationFrame(tick);
            };
            frame.current = requestAnimationFrame(tick);
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
        if (frame.current !== undefined) cancelAnimationFrame(frame.current);
      };
    },
    [value, duration],
  );

  return (
    <span ref={setNode} className={`tabular ${className}`}>
      {prefix}
      {format(display, decimals)}
      {suffix}
    </span>
  );
}
