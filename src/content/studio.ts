import type { Artwork, Discipline, StudioFact } from "./types";

export const studio = {
  eyebrow: "Studio",
  title: "A small studio, working slowly, on purpose",
  lead: "Atelier was founded in Lisbon in 2014 and has kept a second base in Copenhagen since 2019. We are six people, we take roughly forty commissions a year, and we turn down more than we accept.",
  story: [
    "The studio began with a single commission photographing a boatyard that was about to close. It took eleven visits over four months, which was ten more than the budget allowed and exactly the right number. That job set the terms for everything since: go more than once, stay longer than is comfortable, and photograph the thing as it actually is.",
    "We work across architecture, culture, craft and the brands that sit close to all three. What connects them is not a subject but a temperament — an interest in things that were made carefully, and a preference for describing them honestly rather than improving them.",
    "In practice that means small crews, natural light wherever it is possible, and a schedule built around the hours a place is worth photographing rather than the hours a studio is usually booked for. It also means we are unhurried about the edit. A commission is not finished when the shooting stops.",
  ],
  portrait: { seed: "studio-portrait", tone: "ink" } satisfies Artwork,
  philosophy: {
    eyebrow: "Philosophy",
    title: "Four things we hold to",
    items: [
      {
        title: "Go back",
        description:
          "The first visit tells you where to stand. Almost nothing we are proud of was made on a single trip, and our schedules are written to allow for that.",
      },
      {
        title: "Use the light that's there",
        description:
          "We light only when a subject cannot otherwise be described. Available light is slower and less controllable, and it is the reason the work looks like the place.",
      },
      {
        title: "Don't tidy the truth",
        description:
          "Rooms in use, weather that arrived, hands that show the work. We remove things from a frame when they mislead, not when they complicate.",
      },
      {
        title: "The edit is the work",
        description:
          "A hundred good frames are not a story. We deliver sequences, and we spend as long shaping them as we spend making them.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "What the studio handles in-house",
    items: [
      "Art direction and shot planning",
      "Location scouting and recce",
      "Technical camera architecture work",
      "Studio still life and material sets",
      "Field production across Europe",
      "Colour-managed retouching",
      "Sequencing and photo editing",
      "Print production and press liaison",
    ],
  },
  facts: [
    { label: "Founded", value: "2014" },
    { label: "Based", value: "Lisbon & Copenhagen" },
    { label: "Studio", value: "Six people" },
    { label: "Commissions", value: "~40 a year" },
    { label: "Countries worked in", value: "19" },
    { label: "Longest commission", value: "3 years" },
  ] satisfies StudioFact[],
};

export const disciplines: Discipline[] = [
  {
    title: "Architecture",
    description:
      "Completed buildings and interiors, photographed over several visits on the light they were designed for.",
  },
  {
    title: "Culture & documentary",
    description:
      "Long-form stories for magazines, publishers and institutions, made with access and patience.",
  },
  {
    title: "Craft & product",
    description:
      "Material-honest studio work for makers, with consistent geometry across a full range.",
  },
  {
    title: "Brand & campaign",
    description:
      "Seasonal campaigns and the quieter library imagery that holds a brand together between them.",
  },
];

/** Fictional clients, invented for this template. */
export const clients = [
  "Halden & Vance",
  "Nord Editions",
  "Maison Verrier",
  "Studio Kessel",
  "Aperture Review",
  "Fjord & Field",
  "Lumen Ceramics",
  "The Quarterly Review",
  "Casa Palma",
  "Norrland Hotels",
];

export const clientStrip = {
  eyebrow: "Selected clients",
  title: "Commissioned by",
};
