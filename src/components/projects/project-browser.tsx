import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import "./projects.css";

interface ProjectBrowserProps {
  projects: Project[];
  presentation?: "home" | "archive";
  filterLabel?: string;
}

/** Shared server-side card composition for the curated selection and full archive. */
export function ProjectBrowser({ projects, presentation = "home", filterLabel }: ProjectBrowserProps) {
  const featuredSlug = presentation === "home" ? projects.find(project => project.featured)?.slug : undefined;
  const entries = projects.map(project => {
    const featured = project.slug === featuredSlug;
    const homepageProject = featured ? project : { ...project, featured: false };

    return {
      slug: project.slug,
      category: project.category,
      featured,
      card: <ProjectCard project={homepageProject} />,
      filteredCard: <ProjectCard project={project} variant={presentation === "archive" ? "archive" : "filtered"} />,
    };
  });

  return <ProjectFilter entries={entries} presentation={presentation} filterLabel={filterLabel} />;
}
