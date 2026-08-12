/**
 * Content model for Atelier.
 *
 * Every piece of editable copy in this template is typed here and authored in the
 * sibling files. Components never hard-code marketing copy.
 *
 * IMAGES
 * ------
 * Anything visual is described by an `Artwork`. To use a real photograph, set
 * `image` (a path under /public) and `imageAlt`. When `image` is absent, the
 * <Frame /> component renders a deterministic local SVG plate instead, so the
 * repository runs with no external image dependency.
 */

export type ArtworkTone = "paper" | "ink" | "accent";

export interface Artwork {
  /** Path to a real image under /public, e.g. "/images/work/porto-01.jpg". */
  image?: string;
  /** Required whenever `image` is set. Empty string marks a decorative image. */
  imageAlt?: string;
  /** Stable seed used to pick the fallback plate composition. */
  seed: string;
  /** Optional art-direction hint for the fallback plate. */
  tone?: ArtworkTone;
  /** Short caption rendered under project gallery entries. */
  caption?: string;
}

export type ProjectCategory =
  | "Architecture"
  | "Fashion"
  | "Editorial"
  | "Hospitality"
  | "Portrait"
  | "Culture"
  | "Product"
  | "Travel";

export interface ProjectChapter {
  label: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  client: string;
  /** One-line summary used in listings, cards and meta descriptions. */
  summary: string;
  /** Two or three paragraphs of editorial storytelling. */
  story: string[];
  /** Challenge / approach / result, or an equivalent editorial breakdown. */
  chapters: ProjectChapter[];
  /** Credits shown alongside the project metadata. */
  credits: { role: string; name: string }[];
  cover: Artwork;
  gallery: Artwork[];
  featured?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  artwork: Artwork;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface Discipline {
  title: string;
  description: string;
}

export interface StudioFact {
  label: string;
  value: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
}

export interface StudioLocation {
  city: string;
  lines: string[];
  hours: string;
}
