import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Layout primitives shared by every page.
   ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${muted ? "bg-ink-50" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-lg leading-relaxed text-pretty text-ink-600">
          {description}
        </div>
      ) : null}
    </header>
  );
}

/** Thin gold rule used to separate major ideas. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-16 bg-gold-400/70 ${className}`}
    />
  );
}
