export interface GlossaryTerm {
  t: string;
  b: string;
}

/**
 * Plain-language definitions, one line each.
 *
 * A description list rather than cards, because that is what it is — and it
 * keeps the visual weight low so the page does not read as a textbook.
 */
export function Glossary({ terms }: { terms: GlossaryTerm[] }) {
  return (
    <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {terms.map((term) => (
        <div
          key={term.t}
          className="border-s-2 border-gold-400/70 ps-4 transition-colors duration-300 hover:border-brand-600"
        >
          <dt className="text-base font-semibold text-ink-900">{term.t}</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-600">
            {term.b}
          </dd>
        </div>
      ))}
    </dl>
  );
}
