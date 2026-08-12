import type { Metadata } from "next";
import { site } from "@/content/site";

export interface PageSeo {
  title: string;
  description: string;
  /** Absolute path, e.g. "/work". */
  path: string;
}

/**
 * Single source of truth for per-page metadata: title, description, canonical,
 * OpenGraph and Twitter cards all derive from the same three values.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: `${title} — ${site.name}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
    },
  };
}
