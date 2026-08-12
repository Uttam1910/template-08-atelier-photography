import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCta } from "@/components/sections/ContactCta";
import { ProjectCard } from "@/components/photography/ProjectCard";
import { Container } from "@/components/ui/Container";
import { projectCategories, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Eight selected commissions in architecture, fashion, editorial, hospitality, portrait, culture, product and travel photography.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Eight commissions, made between 2022 and 2025."
        lead="A cross-section of the studio's work. Each project includes the brief, the approach and the sequence as it was delivered."
        aside={
          <div>
            <h2 className="eyebrow">Disciplines</h2>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {projectCategories.map((category) => (
                <li key={category} className="after:ml-4 after:content-['/'] last:after:content-['']">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <h2 className="sr-only">All projects</h2>
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.slug} className={`reveal ${index % 3 === 1 ? "lg:mt-16" : ""}`}>
                <ProjectCard
                  project={project}
                  index={index + 1}
                  ratio={index % 3 === 1 ? "tall" : "portrait"}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
