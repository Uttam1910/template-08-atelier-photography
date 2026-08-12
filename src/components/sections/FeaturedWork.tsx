import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/photography/ProjectCard";
import { featuredProjects } from "@/content/projects";
import { home } from "@/content/home";

export function FeaturedWork() {
  const { featured } = home;

  return (
    <section className="border-b border-line py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow={featured.eyebrow}
          title={featured.title}
          lead={featured.lead}
          align="between"
          action={<ActionLink href={featured.action.href}>{featured.action.label}</ActionLink>}
        />

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={`reveal ${index % 2 === 1 ? "sm:mt-20" : ""}`}
            >
              <ProjectCard
                project={project}
                index={index + 1}
                ratio={index % 2 === 1 ? "tall" : "portrait"}
                sizes="(min-width: 640px) 45vw, 100vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
