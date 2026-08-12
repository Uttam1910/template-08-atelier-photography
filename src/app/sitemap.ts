import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/studio", priority: 0.7 },
    { path: "/services", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route.path, site.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}`, site.url).toString(),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
