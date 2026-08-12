import Image from "next/image";
import type { Artwork as ArtworkModel } from "@/content/types";
import { Artwork } from "./Artwork";

/**
 * The single image abstraction used across the site.
 *
 * If the artwork carries an `image`, it is rendered with next/image. If it does
 * not, the deterministic local plate is drawn instead. Pages never need to know
 * which of the two they are getting, so real photography can be dropped into
 * src/content without touching a component.
 */

export type FrameRatio = "square" | "portrait" | "tall" | "landscape" | "wide" | "cinema";

const RATIO_CLASS: Record<FrameRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[3/2]",
  cinema: "aspect-[16/9]",
};

/** Kept in step with RATIO_CLASS so plates are composed for their frame. */
const RATIO_ASPECT: Record<FrameRatio, number> = {
  square: 1,
  portrait: 4 / 5,
  tall: 3 / 4,
  landscape: 4 / 3,
  wide: 3 / 2,
  cinema: 16 / 9,
};

export interface FrameProps {
  artwork: ArtworkModel;
  ratio?: FrameRatio;
  /** Passed to next/image; ignored by the fallback plate. */
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function Frame({
  artwork,
  ratio = "portrait",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: FrameProps) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-surface ${RATIO_CLASS[ratio]} ${className}`}
    >
      {artwork.image ? (
        <Image
          src={artwork.image}
          alt={artwork.imageAlt ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Artwork
          seed={artwork.seed}
          tone={artwork.tone}
          aspect={RATIO_ASPECT[ratio]}
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
