import type { NavItem } from "./types";

export const primaryNav: NavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/** Repeated in the footer so the site is fully navigable without JavaScript. */
export const footerNav: NavItem[] = [
  { href: "/", label: "Index" },
  ...primaryNav,
];
