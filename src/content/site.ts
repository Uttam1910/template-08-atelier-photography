/**
 * Global site identity and default SEO copy.
 * Change `url` before deploying — it is used for canonicals, sitemap and OG tags.
 */
export const site = {
  name: "Atelier",
  legalName: "Atelier Photographic Studio",
  url: "https://atelier.example.com",
  locale: "en_GB",
  tagline: "Photography studio for architecture, culture and craft",
  description:
    "Atelier is a photography studio working between Lisbon and Copenhagen, making considered images of architecture, culture and the people who make things by hand.",
  founded: 2014,
  ogImageAlt: "Atelier — photography studio for architecture, culture and craft",
  social: [
    { label: "Instagram", href: "https://instagram.com/atelier.example" },
    { label: "Behance", href: "https://behance.net/atelier.example" },
    { label: "LinkedIn", href: "https://linkedin.com/company/atelier-example" },
  ],
} as const;
