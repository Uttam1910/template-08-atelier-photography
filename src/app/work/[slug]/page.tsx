import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Frame } from "@/components/photography/Frame";
import { getNextProject, getProject, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "This project could not be found.",
      path: `/work/${slug}`,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

/** Gallery entries alternate between full-bleed and paired columns. */
const GALLERY_RATIOS = ["wide", "portrait", "tall", "landscape", "cinema"] as const;

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const next = getNextProject(project.slug);
  const meta = [
    { label: "Client", value: project.client },
    { label: "Discipline", value: project.category },
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
  ];

  return (
    <article>
      <header className="border-b border-line">
        <Container size="wide">
          <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-7">
              <p className="eyebrow rise">{project.category}</p>
              <h1 className="rise rise-1 mt-7 text-title">{project.title}</h1>
              <p className="rise rise-2 mt-7 max-w-xl text-lead text-muted">
                {project.summary}
              </p>
            </div>
            <div className="rise rise-2 lg:col-span-5 lg:pl-8">
              <dl className="grid grid-cols-2 gap-y-7 border-t border-line pt-8">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="eyebrow">{item.label}</dt>
                    <dd className="mt-2.5 text-sm">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>

        <Container size="wide">
          <Frame
            artwork={project.cover}
            ratio="cinema"
            priority
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="rise rise-3 mb-16 lg:mb-24"
          />
        </Container>
      </header>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="eyebrow lg:col-span-3 lg:pt-2">The commission</h2>
            <div className="space-y-6 text-lead text-muted lg:col-span-8">
              {project.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <h2 className="eyebrow">How it was made</h2>
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {project.chapters.map((chapter) => (
              <div key={chapter.label} className="reveal border-t border-line pt-7">
                <h3 className="font-display text-2xl tracking-tight">{chapter.label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{chapter.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <h2 className="eyebrow">Sequence</h2>
          <div className="mt-10 space-y-16 lg:space-y-24">
            {project.gallery.map((artwork, index) => {
              const wide = index % 3 === 0;
              return (
                <figure
                  key={artwork.seed}
                  className={`reveal ${wide ? "" : "mx-auto max-w-3xl"}`}
                >
                  <Frame
                    artwork={artwork}
                    ratio={GALLERY_RATIOS[index % GALLERY_RATIOS.length]!}
                    sizes={wide ? "(min-width: 1024px) 90vw, 100vw" : "(min-width: 1024px) 48rem, 100vw"}
                  />
                  {artwork.caption ? (
                    <figcaption className="mt-4 flex gap-4 text-sm text-muted">
                      <span className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</span>
                      <span>{artwork.caption}</span>
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-14">
        <Container size="wide">
          <h2 className="eyebrow">Credits</h2>
          <dl className="mt-8 grid gap-y-6 sm:grid-cols-3">
            {project.credits.map((credit) => (
              <div key={credit.role}>
                <dt className="text-sm text-muted">{credit.role}</dt>
                <dd className="mt-1.5 font-display text-xl tracking-tight">{credit.name}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <nav aria-label="Project navigation" className="py-16 lg:py-24">
        <Container size="wide">
          <Link href={`/work/${next.slug}`} className="group block">
            <p className="eyebrow">Next project</p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-title transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </h2>
                <p className="mt-4 text-sm text-muted">
                  {next.category} — {next.location} — {next.year}
                </p>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                strokeWidth={1}
              />
            </div>
          </Link>
        </Container>
      </nav>
    </article>
  );
}
