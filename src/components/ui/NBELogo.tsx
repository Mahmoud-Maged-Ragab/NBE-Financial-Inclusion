import Image from "next/image";

/** Intrinsic dimensions of the asset in /public. */
const NBE_LOGO = {
  src: "/National_Bank_of_Egypt.svg.webp",
  width: 3840,
  height: 1018,
} as const;

interface NBELogoProps {
  /** Localised alternative text, e.g. "National Bank of Egypt logo". */
  alt: string;
  /** Rendered height; width follows the asset's own ratio. */
  size?: "sm" | "md" | "lg";
  /**
   * Places the mark on a white panel. The logo is green and orange, so it
   * needs a light ground to stay legible — and recolouring a bank's mark
   * would be a misuse of it.
   */
  plate?: boolean;
  className?: string;
}

const HEIGHTS = {
  sm: "h-7",
  md: "h-9",
  lg: "h-12",
} as const;

/**
 * The National Bank of Egypt lockup, from the asset already in /public.
 * Used for project attribution only — not as a decorative element.
 */
export function NBELogo({
  alt,
  size = "md",
  plate = false,
  className = "",
}: NBELogoProps) {
  const image = (
    <Image
      src={NBE_LOGO.src}
      alt={alt}
      width={NBE_LOGO.width}
      height={NBE_LOGO.height}
      sizes="(max-width: 640px) 200px, 280px"
      className={`${HEIGHTS[size]} w-auto max-w-full`}
    />
  );

  if (!plate) {
    return <span className={`inline-flex ${className}`}>{image}</span>;
  }

  return (
    <span
      className={`inline-flex items-center rounded-lg bg-white px-3.5 py-2.5 ${className}`}
    >
      {image}
    </span>
  );
}
