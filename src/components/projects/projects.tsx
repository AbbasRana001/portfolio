import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { projects, projectsConfig, projectsCopy } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import "./projects.css";

export function Projects() {
  const visible = projects.filter(project => project.status === "published" ||
    (project.status === "placeholder" && projectsConfig.showPlaceholders));
  let featuredIndex = 0;
  const entries = visible.map(project => ({
    slug: project.slug,
    category: project.category,
    featured: project.featured,
    card: <ProjectCard project={project} reverse={project.featured && featuredIndex++ % 2 === 1} />,
    filteredCard: <ProjectCard project={project} variant="filtered" />,
  }));

  return (
    <Section id="projects" aria-labelledby="projects-heading" className="projects-section">
      <SectionHeading id="projects-heading" eyebrow={projectsCopy.eyebrow} title={projectsCopy.heading} description={projectsCopy.intro} />
      {visible.some(project => project.status === "placeholder") && <p className="projects-preview-note">{projectsCopy.previewNote}</p>}
      {entries.length ? <ProjectFilter entries={entries} /> : (
        <Surface className="projects-empty">
          <h3 className="type-subheading">{projectsCopy.emptyTitle}</h3>
          <p>{projectsCopy.emptyDescription}</p>
        </Surface>
      )}
    </Section>
  );
}
