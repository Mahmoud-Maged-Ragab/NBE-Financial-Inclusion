"use client";

import { useCallback, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

/**
 * Reveals its children once they scroll into view.
 *
 * The visible state also drives chart entry animations further down the tree,
 * via the `[data-shown="true"]` selectors in globals.css. Users who prefer
 * reduced motion get the final state immediately, handled in CSS.
 *
 * The observer is attached from a ref callback rather than an effect, so setup
 * and teardown follow the element itself.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const [shown, setShown] = useState(false);

  const setNode = useCallback((el: HTMLElement | null) => {
    if (!el) return;

    // If the browser cannot observe, show the content rather than hiding it.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={setNode}
      data-shown={shown}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
