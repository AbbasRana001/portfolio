
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import "./projects.css";

interface ProjectBrowserProps {
  projects: Project[];
  homepageProjects?: Project[];
  presentation?: "home" | "archive";
  filterLabel?: string;
}

/** Shared server-side card composition for the curated selection and full archive. */
export function ProjectBrowser({
  projects,
  homepageProjects = projects,
  presentation = "home",
  filterLabel,
}: ProjectBrowserProps) {
  const featuredSlug =
    presentation === "home"
      ? homepageProjects.find(project => project.featured)?.slug
      : undefined;

  const entries = projects.map(project => {
    const featured = project.slug === featuredSlug;

    const homepageProject = featured
      ? project
      : { ...project, featured: false };

    return {
      slug: project.slug,
      category: project.category,
      featured,
      card: <ProjectCard project={homepageProject} />,
      filteredCard: (
        <ProjectCard
          project={project}
          variant={presentation === "archive" ? "archive" : "filtered"}
        />
      ),
    };
  });

  const homepageSlugs = new Set(
    homepageProjects.map(project => project.slug)
  );

  const homepageEntries = entries.filter(entry =>
    homepageSlugs.has(entry.slug)
  );

  return (
    <ProjectFilter
      entries={entries}
      homepageEntries={homepageEntries}
      presentation={presentation}
      filterLabel={filterLabel}
    />
  );
}
