import type { ProcessStep, Service } from "./types";

export const servicesIntro = {
  eyebrow: "Services",
  title: "Four ways we work",
  lead: "Every commission is quoted individually, but almost all of them arrive in one of these four shapes. Whichever it is, the studio handles art direction, production and post as one piece of work.",
};

export const services: Service[] = [
  {
    slug: "architecture-and-interiors",
    title: "Architecture & Interiors",
    summary: "Buildings photographed as places, on the light they were designed for.",
    description:
      "We photograph completed buildings and interiors for architects, developers and interior studios. Work is planned around the sun rather than the calendar, which usually means several short visits instead of one long one. Verticals are corrected in camera on a technical body, and we light as little as the building allows.",
    deliverables: [
      "Site recce and light study",
      "Multi-visit shoot schedule",
      "Retouched masters plus press and awards crops",
      "Usage cleared for monograph, press and submissions",
    ],
    artwork: { seed: "service-architecture", tone: "ink" },
  },
  {
    slug: "editorial-and-documentary",
    title: "Editorial & Documentary",
    summary: "Long-form stories for magazines, publishers and cultural institutions.",
    description:
      "Commissioned features, essays and book projects. These are the jobs where the schedule is measured in days on the ground rather than hours on set, and where the edit matters as much as the frames. We work closely with picture editors from the brief onwards and deliver a sequenced story, not a contact sheet.",
    deliverables: [
      "Research and access planning",
      "Field production, single or multi-leg",
      "Sequenced edit with alternates",
      "Captioning and rights documentation",
    ],
    artwork: { seed: "service-editorial", tone: "paper" },
  },
  {
    slug: "brand-and-campaign",
    title: "Brand & Campaign",
    summary: "Seasonal campaigns and brand libraries built to last more than one season.",
    description:
      "Campaign and lookbook photography for fashion, hospitality and design brands, plus the quieter library work that keeps a brand looking consistent between campaigns. We prefer real locations and available light, and we build shot lists that cover the full range of crops a modern brand actually needs.",
    deliverables: [
      "Concept and art direction",
      "Casting, location and crew production",
      "Campaign, lookbook and library imagery",
      "Master files in campaign, social and print crops",
    ],
    artwork: { seed: "service-brand", tone: "accent" },
  },
  {
    slug: "product-and-still-life",
    title: "Product & Still Life",
    summary: "Objects, materials and craft, photographed with the same care they were made with.",
    description:
      "Studio-based work for makers, ceramicists, furniture designers and small manufacturers. The emphasis is on material truth — colour, surface and weight — which usually means daylight, consistent camera geometry across a range, and backgrounds chosen from the object's own material family.",
    deliverables: [
      "Set design and surface sourcing",
      "Consistent geometry across a full range",
      "Editorial and catalogue crops from one shoot",
      "Colour-managed masters with reference targets",
    ],
    artwork: { seed: "service-product", tone: "paper" },
  },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "A call and a written brief. We agree what the images are for, where they will live, how long they need to last, and what would make the commission a failure. Quotes follow within two working days.",
  },
  {
    step: "02",
    title: "Recce & art direction",
    body: "For most work we visit before we shoot. Light is studied at the hours we intend to use it, locations are confirmed, and a shot list is written and shared. Nothing on the day should be a surprise.",
  },
  {
    step: "03",
    title: "Shoot",
    body: "Small crews, tight schedules and as little supplementary lighting as the subject allows. You get a same-day selection of unretouched frames so decisions never wait on post.",
  },
  {
    step: "04",
    title: "Edit & delivery",
    body: "We sequence rather than dump. Delivery is a considered edit with alternates, retouched masters, the crops your channels need, and written usage terms. Two rounds of revisions are included.",
  },
];

export const servicesCta = {
  title: "Tell us what you're making",
  body: "A sentence about the project and a rough date is enough to start. We quote every commission individually and will say so early if we are not the right studio for it.",
  action: { href: "/contact", label: "Start a conversation" },
};
