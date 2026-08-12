/**
 * Route validation.
 *
 * Asserts that every route the content and navigation reference has a matching
 * file in src/app, and that the metadata routes are all present.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/content/projects";

const APP = join(process.cwd(), "src", "app");

const REQUIRED_FILES = [
  "layout.tsx",
  "page.tsx",
  "not-found.tsx",
  "globals.css",
  "sitemap.ts",
  "robots.ts",
  "manifest.ts",
  "opengraph-image.tsx",
  "icon.svg",
  "work/page.tsx",
  "work/[slug]/page.tsx",
  "studio/page.tsx",
  "services/page.tsx",
  "contact/page.tsx",
];

const failures: string[] = [];

for (const file of REQUIRED_FILES) {
  if (!existsSync(join(APP, file))) failures.push(`missing src/app/${file}`);
}

if (projects.length === 0) {
  failures.push("no projects, so /work/[slug] would prerender nothing");
}

if (failures.length > 0) {
  process.stderr.write(`\nroute validation failed (${failures.length}):\n`);
  for (const failure of failures) process.stderr.write(`  ✗ ${failure}\n`);
  process.exit(1);
}

process.stdout.write(
  `routes ok — ${REQUIRED_FILES.length} required files, ${projects.length} project pages\n`,
);
