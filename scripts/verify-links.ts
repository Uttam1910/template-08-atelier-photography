/**
 * Internal-link validation, run against the production build output.
 *
 * Walks every prerendered HTML file in .next/server/app, collects internal
 * hrefs, and fails if any of them points at a route the build did not produce.
 * Also asserts one <h1> per page and the presence of the core landmarks.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { projects } from "../src/content/projects";

const BUILD_DIR = join(process.cwd(), ".next", "server", "app");

const VALID_ROUTES = new Set([
  "/",
  "/work",
  "/studio",
  "/services",
  "/contact",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
  "/icon.svg",
  "/opengraph-image.png",
  ...projects.map((project) => `/work/${project.slug}`),
]);

function collectHtml(dir: string, found: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      collectHtml(path, found);
    } else if (entry.endsWith(".html")) {
      found.push(path);
    }
  }
  return found;
}

const failures: string[] = [];

if (!statSync(BUILD_DIR, { throwIfNoEntry: false })?.isDirectory()) {
  process.stderr.write("link validation failed: run `npm run build` first\n");
  process.exit(1);
}

// Next.js ships its own bare global-error shell; it is not one of our pages.
const pages = collectHtml(BUILD_DIR).filter(
  (page) => !page.endsWith(`${sep}_global-error.html`),
);
if (pages.length === 0) {
  process.stderr.write("link validation failed: no prerendered HTML found\n");
  process.exit(1);
}

let linkCount = 0;

for (const page of pages) {
  const label = `/${relative(BUILD_DIR, page).split(sep).join("/").replace(/\.html$/, "")}`.replace(
    /^\/index$/,
    "/",
  );
  const html = readFileSync(page, "utf8");

  // Structure
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) failures.push(`${label}: expected exactly one <h1>, found ${h1Count}`);
  if (!/<main[\s>]/.test(html)) failures.push(`${label}: no <main> landmark`);
  if (!/<header[\s>]/.test(html)) failures.push(`${label}: no <header> landmark`);
  if (!/<footer[\s>]/.test(html)) failures.push(`${label}: no <footer> landmark`);
  if (!/rel="canonical"/.test(html)) failures.push(`${label}: no canonical link`);
  if (!/property="og:title"/.test(html)) failures.push(`${label}: no OpenGraph title`);

  // Heading order
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((match) => Number(match[1]));
  let previous = 0;
  for (const level of levels) {
    if (previous !== 0 && level > previous + 1) {
      failures.push(`${label}: heading jumps from h${previous} to h${level}`);
      break;
    }
    previous = level;
  }

  // Internal links
  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1] as string;
    if (href.startsWith("/_next/")) continue;
    const normalised = href.length > 1 && href.endsWith("/") ? href.slice(0, -1) : href;
    linkCount += 1;
    if (!VALID_ROUTES.has(normalised)) {
      failures.push(`${label}: broken internal link ${href}`);
    }
  }
}

if (failures.length > 0) {
  const unique = [...new Set(failures)];
  process.stderr.write(`\nlink validation failed (${unique.length}):\n`);
  for (const failure of unique) process.stderr.write(`  ✗ ${failure}\n`);
  process.exit(1);
}

process.stdout.write(
  `links ok — ${pages.length} prerendered pages, ${linkCount} internal links, all resolve\n`,
);
