import type { Project, ProjectCategory } from "./types";

/**
 * Fictional commissions. Clients and collaborators are invented for the template.
 *
 * To swap in real photography, add `image` and `imageAlt` to any artwork below —
 * no page or component needs to change.
 */
export const projects: Project[] = [
  {
    slug: "concrete-light",
    title: "Concrete Light",
    category: "Architecture",
    location: "Porto, Portugal",
    year: 2025,
    client: "Halden & Vance Architects",
    summary:
      "A month photographing a research library as its raw concrete learned to hold the Atlantic light.",
    story: [
      "Halden & Vance spent six years building a library into the side of a granite hill above the Douro. By the time we were invited to photograph it, the building had been open for one winter — long enough for the concrete to lose its newness and for the reading rooms to acquire the small disorder of use.",
      "We wanted to avoid the empty-building photograph. Rather than clearing the desks, we asked the librarians to work as they normally would and built the schedule around the hours the architecture is actually inhabited: early opening, the flat blue of mid-afternoon, and the twenty minutes at closing when the west windows throw the stair into relief.",
      "The final set runs as a walk through the building rather than a catalogue of rooms. It has since been used for the practice's monograph, an exhibition in Lisbon, and the award submission that took the project to a national shortlist.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "The library had already been photographed twice — both times as an empty object, lit for the facade. The practice needed a set that argued for the building as a place to spend a day in, without losing the rigour of the architecture.",
      },
      {
        label: "Approach",
        body: "Four visits across a month, each timed to a different light condition, shot on a technical camera with rising front to keep verticals true. No supplementary lighting anywhere in the building; every frame is daylight as the architects designed it to fall.",
      },
      {
        label: "Result",
        body: "Thirty-two final images, delivered as a sequenced narrative with alternate crops for print and press. The set became the practice's primary reference for the project across the monograph, exhibition and awards submission.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Architecture", name: "Halden & Vance" },
      { role: "Producer", name: "Inês Baptista" },
    ],
    cover: { seed: "concrete-light-cover", tone: "ink" },
    gallery: [
      { seed: "concrete-light-01", caption: "North elevation, first light" },
      { seed: "concrete-light-02", caption: "The stair as it meets the granite" },
      { seed: "concrete-light-03", tone: "accent", caption: "Reading room, mid-afternoon" },
      { seed: "concrete-light-04", caption: "Study carrels on the lower floor" },
      { seed: "concrete-light-05", caption: "Closing hour, west windows" },
    ],
    featured: true,
  },
  {
    slug: "salt-and-sable",
    title: "Salt & Sable",
    category: "Fashion",
    location: "Ostend, Belgium",
    year: 2025,
    client: "Nord Editions",
    summary:
      "A winter outerwear campaign shot on the North Sea coast in three days of genuinely bad weather.",
    story: [
      "Nord Editions build coats for weather most campaigns are careful to avoid. The brief asked for images that looked like the garments had been worn rather than styled — which meant accepting whatever the North Sea offered us in February.",
      "We shot across three days on the beach and the concrete promenade at Ostend, working with a small crew and a schedule loose enough to chase conditions. Two of the strongest frames came from a squall that cost us an hour of the call sheet.",
      "The campaign ran across the brand's winter season in print and out-of-home, with a longer edit released as a small newsprint publication.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "Outerwear is usually photographed in controlled conditions and then made to look weathered. The brand wanted the reverse — real weather, real wear — without the images becoming reportage that failed to show the product.",
      },
      {
        label: "Approach",
        body: "A stripped-back crew of five, natural light only, and a shot list organised by condition rather than by look. Garments were worn in for two days before the first frame so nothing read as showroom-fresh.",
      },
      {
        label: "Result",
        body: "Eighteen campaign images plus a forty-page newsprint edition. The season's lookbook sell-through was the brand's strongest to date, and the newsprint run sold out in the flagship store.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Styling", name: "Margot Feyen" },
      { role: "Production", name: "Studio Kessel" },
    ],
    cover: { seed: "salt-and-sable-cover", tone: "paper" },
    gallery: [
      { seed: "salt-and-sable-01", caption: "Promenade, first morning" },
      { seed: "salt-and-sable-02", tone: "accent", caption: "Squall, day two" },
      { seed: "salt-and-sable-03", caption: "Wool detail, low tide" },
      { seed: "salt-and-sable-04", caption: "The long walk back" },
    ],
    featured: true,
  },
  {
    slug: "maison-verrier",
    title: "Maison Verrier",
    category: "Hospitality",
    location: "Lyon, France",
    year: 2024,
    client: "Maison Verrier",
    summary:
      "Opening photography for a nineteen-room hotel built inside a former glassworks.",
    story: [
      "The building spent a century making bottles and thirty years empty. The conversion kept the furnaces, the overhead cranes and most of the soot, then inserted nineteen rooms as free-standing objects inside the shell.",
      "Hotel photography usually flattens this kind of contrast — everything lit evenly, everything equally warm. We did the opposite, letting the industrial volumes stay dark and cool and reserving warmth for the rooms themselves, so the pictures carry the same sequence a guest experiences walking in.",
      "The set was delivered ten days before opening and has run as the hotel's primary imagery across its own channels, press and two international travel titles.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "Nineteen rooms, three public spaces and a restaurant to cover in four days, on a site still finishing, with a light mix ranging from raw north-facing industrial glazing to candlelight.",
      },
      {
        label: "Approach",
        body: "A tight production plan built room by room around the sun, with a two-person crew handling styling resets so the camera never waited. Minimal supplementary light, used only to hold detail in the deepest parts of the shell.",
      },
      {
        label: "Result",
        body: "Ninety delivered images across rooms, food and architecture, plus a press-ready subset. Picked up by two international travel titles in the opening month.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Interiors", name: "Studio Kessel" },
      { role: "Styling", name: "Camille Roux" },
    ],
    cover: { seed: "maison-verrier-cover", tone: "accent" },
    gallery: [
      { seed: "maison-verrier-01", caption: "The furnace hall, retained" },
      { seed: "maison-verrier-02", caption: "Room 7, morning" },
      { seed: "maison-verrier-03", caption: "Bath, north glazing" },
      { seed: "maison-verrier-04", tone: "ink", caption: "Service stair" },
      { seed: "maison-verrier-05", caption: "Dining room at dusk" },
    ],
    featured: true,
  },
  {
    slug: "hands-that-remember",
    title: "Hands That Remember",
    category: "Portrait",
    location: "Seville, Spain",
    year: 2024,
    client: "The Quarterly Review",
    summary:
      "Twelve portraits of the last working craftspeople on a single Andalusian street.",
    story: [
      "Calle Feria has held workshops for four hundred years. Twelve remain: a guitar maker, two saddlers, a tinsmith, a gilder, and others whose trades have no clean English name. The Quarterly Review commissioned a portrait series before the street's redevelopment.",
      "Each sitting took place in the person's own workshop, at their bench, in whatever light the shop had. Nothing was moved. We spent an afternoon with each subject before making a frame, which is why several of the portraits are of hands rather than faces — by the end it was obvious that was where the story lived.",
      "The series ran as a sixteen-page feature and was later shown as a small exhibition in the neighbourhood, printed at life size so the makers could see themselves at the scale of their own work.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "Twelve subjects who had, almost without exception, never been photographed for publication, in workshops averaging fourteen square metres with a single window.",
      },
      {
        label: "Approach",
        body: "One subject per day. No lighting, no styling, no moving of tools. Long-lens work was avoided entirely — every portrait was made close, at conversational distance, after several hours of not photographing anything.",
      },
      {
        label: "Result",
        body: "A sixteen-page feature and a neighbourhood exhibition of life-size prints. Four of the workshops have since been granted protected-trade status by the city.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Words", name: "Elena Márquez" },
      { role: "Editor", name: "The Quarterly Review" },
    ],
    cover: { seed: "hands-that-remember-cover", tone: "ink" },
    gallery: [
      { seed: "hands-that-remember-01", caption: "The guitar maker, forty-one years at the bench" },
      { seed: "hands-that-remember-02", caption: "Saddler's hands" },
      { seed: "hands-that-remember-03", tone: "accent", caption: "Gilding, afternoon window" },
      { seed: "hands-that-remember-04", caption: "The tinsmith's wall of patterns" },
    ],
    featured: true,
  },
  {
    slug: "kiln",
    title: "Kiln",
    category: "Product",
    location: "Stoke-on-Trent, England",
    year: 2024,
    client: "Lumen Ceramics",
    summary:
      "A tableware launch photographed as a material study rather than a catalogue.",
    story: [
      "Lumen make a single glaze in eleven colours. The problem with photographing them well is that the differences between the colours are real but small, and most product photography would erase exactly the qualities the studio cares about.",
      "We built the shoot around one raking north light and a set of surfaces cut from the same clay body as the pieces themselves. Everything was shot at the same distance and the same angle, so the eleven glazes could be compared honestly across the set.",
      "The result works both as a catalogue and as a wall of images, which is how it was eventually used in the studio's first permanent showroom.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "Eleven glazes whose differences are subtle, a client who considered standard product lighting dishonest, and a launch that needed both e-commerce cutouts and editorial imagery from one shoot.",
      },
      {
        label: "Approach",
        body: "A fixed camera position and a single raking daylight source held constant across two days, so every piece is directly comparable. Backgrounds were cut from the same clay body, unglazed, to give the colours a truthful neighbour.",
      },
      {
        label: "Result",
        body: "A hundred and forty images covering the full range in editorial and catalogue crops, now installed as a full-height image wall in the studio's first showroom.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Set", name: "Atelier" },
      { role: "Client", name: "Lumen Ceramics" },
    ],
    cover: { seed: "kiln-cover", tone: "paper" },
    gallery: [
      { seed: "kiln-01", caption: "Eleven glazes, one light" },
      { seed: "kiln-02", tone: "accent", caption: "Ash glaze, raking north light" },
      { seed: "kiln-03", caption: "Unglazed test tiles" },
      { seed: "kiln-04", caption: "Service for six" },
    ],
  },
  {
    slug: "northbound",
    title: "Northbound",
    category: "Travel",
    location: "Lofoten, Norway",
    year: 2023,
    client: "Fjord & Field",
    summary:
      "Nine days along the Lofoten archipelago in the short light of late January.",
    story: [
      "Fjord & Field wanted images for a slow-travel route that runs the length of the archipelago, and asked for them in the season most visitors avoid. In late January the islands give you about four usable hours a day, all of it low and blue.",
      "We travelled the route as a guest would — the same ferries, the same guesthouses, the same weather — and photographed only what was actually available on the day. Two of the nine days produced nothing at all, which is honest to the season and something the client was willing to publish.",
      "The set anchors the route's guide, its print map and a winter campaign that doubled off-season enquiries.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "Four hours of usable light a day, a fixed nine-day travel window, ferry-dependent logistics and no option to reshoot.",
      },
      {
        label: "Approach",
        body: "Travel light, travel as the guest travels, and accept the weather. A hand-held kit only, one body and two lenses, so nothing was ever left behind because of the forecast.",
      },
      {
        label: "Result",
        body: "Sixty images and a print map, used across the route guide and a winter campaign that doubled off-season enquiries year on year.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Route", name: "Fjord & Field" },
      { role: "Words", name: "Sigrid Aune" },
    ],
    cover: { seed: "northbound-cover", tone: "ink" },
    gallery: [
      { seed: "northbound-01", caption: "Ferry crossing, 10:40" },
      { seed: "northbound-02", caption: "Fishing racks above the road" },
      { seed: "northbound-03", tone: "accent", caption: "The one clear hour, day six" },
      { seed: "northbound-04", caption: "Guesthouse window, Reine" },
      { seed: "northbound-05", caption: "Last ferry south" },
    ],
  },
  {
    slug: "the-long-table",
    title: "The Long Table",
    category: "Editorial",
    location: "Bologna, Italy",
    year: 2023,
    client: "Aperture Review",
    summary:
      "A feature on a canteen that has fed the same market district since 1946.",
    story: [
      "The canteen serves two hundred covers a day from a kitchen the size of a garage, to porters, traders and, increasingly, to the people replacing them. Aperture Review commissioned a feature on what the room holds together.",
      "We photographed four consecutive service periods from inside the kitchen and from the same corner table, so the feature reads as a single day rather than a collection of visits. Nothing was arranged; the only request we made was to be ignored.",
      "The story ran across twelve pages and won the title's photography award for that year.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "A working kitchen with no space to stand in, mixed and unflattering light, and a room where an obvious camera would have changed the behaviour we were there to record.",
      },
      {
        label: "Approach",
        body: "Four services, one small camera, one fixed lens, and three days on site before making a frame. Shooting from the same two positions throughout gave the edit its structure.",
      },
      {
        label: "Result",
        body: "A twelve-page feature and the title's photography award for the year. Prints of two frames now hang in the canteen itself.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Words", name: "Tomas Bergh" },
      { role: "Editor", name: "Aperture Review" },
    ],
    cover: { seed: "the-long-table-cover", tone: "accent" },
    gallery: [
      { seed: "the-long-table-01", caption: "Prep, 06:15" },
      { seed: "the-long-table-02", caption: "The pass" },
      { seed: "the-long-table-03", caption: "Second service" },
      { seed: "the-long-table-04", tone: "ink", caption: "The corner table, closing" },
    ],
  },
  {
    slug: "vigil",
    title: "Vigil",
    category: "Culture",
    location: "Kyoto, Japan",
    year: 2022,
    client: "Nord Editions",
    summary:
      "A night festival documented across three years and one very long evening.",
    story: [
      "The festival happens once a year and lasts a single night. Photographing it properly took three of them, spread across three years, because the first two taught us where not to stand.",
      "The final night was shot almost entirely by lantern and fire. We used no supplementary light at all — partly out of respect for the ceremony, mostly because the light already present is the subject.",
      "The work was published as a limited monograph of sixty images and shown at two festivals of photographic books.",
    ],
    chapters: [
      {
        label: "Challenge",
        body: "A single-night ceremony, extremely low mixed light, dense crowds, and a strong obligation not to interfere with what was happening.",
      },
      {
        label: "Approach",
        body: "Three years of attendance, two of them without publishing anything. Available light only, fast primes, and positions agreed in advance with the organisers so the camera never sat inside the ceremony.",
      },
      {
        label: "Result",
        body: "A sixty-image monograph in a limited run of five hundred, shown at two photobook festivals and now held in three public library collections.",
      },
    ],
    credits: [
      { role: "Photography", name: "Atelier" },
      { role: "Publisher", name: "Nord Editions" },
      { role: "Design", name: "Studio Kessel" },
    ],
    cover: { seed: "vigil-cover", tone: "ink" },
    gallery: [
      { seed: "vigil-01", caption: "First lanterns" },
      { seed: "vigil-02", tone: "accent", caption: "The procession turns" },
      { seed: "vigil-03", caption: "Fire, from the north gate" },
      { seed: "vigil-04", caption: "After, 04:00" },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
).sort() as ProjectCategory[];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Wraps around, so the last project points back to the first. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length] as Project;
}
