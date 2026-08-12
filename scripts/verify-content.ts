/**
 * Content validation.
 *
 * Checks the shape and quality of everything under src/content so a bad edit
 * fails the build rather than shipping a broken page.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { contact } from "../src/content/contact";
import { home } from "../src/content/home";
import { footerNav, primaryNav } from "../src/content/navigation";
import { projects } from "../src/content/projects";
import { process as processSteps, services } from "../src/content/services";
import { site } from "../src/content/site";
import { clients, disciplines, studio } from "../src/content/studio";
import type { Artwork } from "../src/content/types";

const failures: string[] = [];
const CONTENT_DIR = join(process.cwd(), "src", "content");
const KNOWN_ROUTES = new Set([
  "/",
  "/work",
  "/studio",
  "/services",
  "/contact",
  ...projects.map((project) => `/work/${project.slug}`),
]);

function check(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

// --- Site ------------------------------------------------------------------
check(site.name.length > 0, "site.name is empty");
check(/^https:\/\//.test(site.url), "site.url must be an absolute https URL");
check(
  site.description.length >= 80 && site.description.length <= 300,
  `site.description should be 80–300 characters (is ${site.description.length})`,
);

// --- Navigation ------------------------------------------------------------
for (const item of [...primaryNav, ...footerNav]) {
  check(KNOWN_ROUTES.has(item.href), `navigation points at unknown route: ${item.href}`);
  check(item.label.length > 0, `navigation item ${item.href} has no label`);
}

// --- Projects --------------------------------------------------------------
check(projects.length === 8, `expected 8 projects, found ${projects.length}`);

const slugs = new Set<string>();
const seeds = new Map<string, string>();

function checkArtwork(artwork: Artwork, where: string) {
  check(artwork.seed.length > 0, `${where}: artwork has no seed`);
  check(
    !seeds.has(artwork.seed),
    `${where}: duplicate artwork seed "${artwork.seed}" (also on ${seeds.get(artwork.seed)})`,
  );
  seeds.set(artwork.seed, where);
  if (artwork.image !== undefined) {
    check(
      artwork.image.startsWith("/"),
      `${where}: artwork.image must be a root-relative path`,
    );
    check(
      typeof artwork.imageAlt === "string",
      `${where}: artwork with an image must also set imageAlt`,
    );
  }
}

for (const project of projects) {
  const where = `project "${project.slug}"`;
  check(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug),
    `${where}: slug must be lowercase kebab-case`,
  );
  check(!slugs.has(project.slug), `${where}: duplicate slug`);
  slugs.add(project.slug);

  check(project.title.length > 0, `${where}: missing title`);
  check(project.client.length > 0, `${where}: missing client`);
  check(project.location.includes(","), `${where}: location should be "City, Country"`);
  check(
    project.year >= 2000 && project.year <= new Date().getFullYear(),
    `${where}: year ${project.year} is out of range`,
  );
  check(
    project.summary.length >= 40 && project.summary.length <= 200,
    `${where}: summary should be 40–200 characters (is ${project.summary.length})`,
  );
  check(project.story.length >= 2, `${where}: needs at least 2 story paragraphs`);
  check(
    project.chapters.length >= 3,
    `${where}: needs at least 3 chapters (challenge/approach/result)`,
  );
  check(project.credits.length >= 2, `${where}: needs at least 2 credits`);
  check(
    project.gallery.length >= 3 && project.gallery.length <= 5,
    `${where}: gallery must hold 3–5 entries (has ${project.gallery.length})`,
  );

  checkArtwork(project.cover, `${where} cover`);
  project.gallery.forEach((artwork, index) => {
    checkArtwork(artwork, `${where} gallery[${index}]`);
    check(
      typeof artwork.caption === "string" && artwork.caption.length > 0,
      `${where} gallery[${index}]: missing caption`,
    );
  });
}

check(
  projects.filter((project) => project.featured).length >= 3,
  "at least 3 projects should be featured for the homepage",
);

// --- Services --------------------------------------------------------------
check(services.length === 4, `expected 4 services, found ${services.length}`);
for (const service of services) {
  const where = `service "${service.slug}"`;
  check(service.summary.length > 0, `${where}: missing summary`);
  check(service.description.length >= 120, `${where}: description is too thin`);
  check(service.deliverables.length >= 3, `${where}: needs at least 3 deliverables`);
  checkArtwork(service.artwork, `${where} artwork`);
}
check(processSteps.length === 4, `expected 4 process steps, found ${processSteps.length}`);

// --- Studio ----------------------------------------------------------------
check(studio.story.length >= 3, "studio.story needs at least 3 paragraphs");
check(studio.philosophy.items.length === 4, "studio.philosophy needs 4 items");
check(studio.capabilities.items.length >= 6, "studio.capabilities needs at least 6 items");
check(studio.facts.length >= 4, "studio.facts needs at least 4 entries");
check(clients.length >= 8, "at least 8 selected clients expected");
check(new Set(clients).size === clients.length, "duplicate client names");
check(disciplines.length === 4, "expected 4 disciplines");
checkArtwork(studio.portrait, "studio portrait");

// --- Home ------------------------------------------------------------------
check(home.hero.title.length >= 2, "home hero title needs at least 2 lines");
check(home.hero.actions.length === 2, "home hero needs exactly 2 actions");
for (const action of home.hero.actions) {
  check(KNOWN_ROUTES.has(action.href), `home hero action points at unknown route: ${action.href}`);
}
checkArtwork(home.hero.artwork, "home hero artwork");
checkArtwork(home.intro.artwork, "home intro artwork");

// --- Contact ---------------------------------------------------------------
check(contact.channels.length >= 2, "contact needs at least 2 channels");
check(contact.locations.length >= 1, "contact needs at least 1 location");
check(
  /does not|nothing|sends nothing/i.test(contact.form.demoNotice),
  "contact form must state clearly that nothing is sent",
);
check(contact.form.subjects.length >= 3, "contact form needs at least 3 subject options");
for (const channel of contact.channels) {
  if (channel.href?.startsWith("mailto:")) {
    check(
      channel.value.endsWith(".example"),
      `contact channel "${channel.label}" should use a reserved .example address in the template`,
    );
  }
}

// --- Copy hygiene ----------------------------------------------------------
const BANNED = [/lorem ipsum/i, /\bTODO\b/, /\bFIXME\b/, /dolor sit amet/i];
for (const file of readdirSync(CONTENT_DIR)) {
  const source = readFileSync(join(CONTENT_DIR, file), "utf8");
  for (const pattern of BANNED) {
    check(!pattern.test(source), `src/content/${file} contains banned copy: ${pattern}`);
  }
}

// --- Report ----------------------------------------------------------------
if (failures.length > 0) {
  process.stderr.write(`\ncontent validation failed (${failures.length}):\n`);
  for (const failure of failures) process.stderr.write(`  ✗ ${failure}\n`);
  process.exit(1);
}

process.stdout.write(
  `content ok — ${projects.length} projects, ${services.length} services, ${seeds.size} artworks, ${clients.length} clients\n`,
);
