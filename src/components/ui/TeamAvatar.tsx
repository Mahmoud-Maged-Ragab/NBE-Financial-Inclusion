"use client";

import Image from "next/image";
import { useState } from "react";
import { UserRound } from "lucide-react";

interface TeamAvatarProps {
  /** Path under `/public`, e.g. `/team/member-1.jpg`. */
  src: string;
  /** The member's name, used as the photo's alternative text. */
  alt: string;
  sizes: string;
}

/**
 * A member portrait that cannot break the card: if the file is missing, the
 * path is wrong, or the image fails to load, a neutral avatar takes its place
 * rather than a broken image.
 *
 * Fills its parent, so the parent supplies the frame and `position: relative`.
 */
export function TeamAvatar({ src, alt, sizes }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (src.trim() === "" || failed) {
    return (
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-brand-50"
      >
        <UserRound strokeWidth={1.25} className="size-16 text-brand-200" />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
  );
}
