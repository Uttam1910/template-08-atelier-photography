import type { Artwork } from "./types";

export const home = {
  hero: {
    eyebrow: "Photography studio — Lisbon & Copenhagen",
    title: ["Pictures of", "things made", "carefully"],
    lead: "Atelier photographs architecture, culture and craft for architects, publishers and brands who would rather be described honestly than flattered.",
    actions: [
      { href: "/work", label: "Selected work" },
      { href: "/contact", label: "Commission the studio" },
    ],
    artwork: { seed: "home-hero", tone: "ink" } satisfies Artwork,
    meta: [
      { label: "Founded", value: "2014" },
      { label: "Commissions", value: "40 a year" },
      { label: "Countries", value: "19" },
    ],
  },
  featured: {
    eyebrow: "Selected work",
    title: "Recent commissions",
    lead: "Four projects from the last two years. The full archive runs to eight.",
    action: { href: "/work", label: "All work" },
  },
  intro: {
    eyebrow: "The studio",
    title: "Six people, forty commissions a year, and a strong preference for going back twice.",
    body: [
      "We began in 2014 with a commission to photograph a boatyard that was closing. It took eleven visits over four months — ten more than the budget allowed, and exactly the right number.",
      "That set the terms for everything since. Small crews, available light, and schedules built around the hours a place is worth photographing rather than the hours a studio is usually booked for.",
    ],
    action: { href: "/studio", label: "About the studio" },
    artwork: { seed: "home-intro", tone: "paper" } satisfies Artwork,
  },
  disciplines: {
    eyebrow: "Disciplines",
    title: "What we photograph",
    action: { href: "/services", label: "Services & process" },
  },
  cta: {
    eyebrow: "Commissions",
    title: "Tell us what you're making.",
    body: "We take roughly forty commissions a year and quote each one individually. A sentence about the project and a rough date is enough to start.",
    action: { href: "/contact", label: "Start a conversation" },
    secondary: { href: "mailto:studio@atelier.example", label: "studio@atelier.example" },
  },
};
