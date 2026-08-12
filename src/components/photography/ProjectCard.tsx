import Link from "next/link";
import type { Project } from "@/content/types";
import type { FrameRatio } from "./Frame";
import { Frame } from "./Frame";

export interface ProjectCardProps {
  project: Project;
  ratio?: FrameRatio;
  sizes?: string;
  priority?: boolean;
  /** Index shown as an editorial folio number, e.g. "03". */
  index?: number;
}

export function ProjectCard({
  project,
  ratio = "portrait",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
  index,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}`} className="block">
        <Frame
          artwork={project.cover}
          ratio={ratio}
          sizes={sizes}
          priority={priority}
          className="transition-opacity duration-500 group-hover:opacity-85"
        />
        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="text-heading transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          {typeof index === "number" ? (
            <span className="eyebrow shrink-0">{String(index).padStart(2, "0")}</span>
          ) : null}
        </div>
        <p className="mt-3 text-sm text-muted">
          {project.category} — {project.location} — {project.year}
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{project.summary}</p>
      </Link>
    </article>
  );
}
