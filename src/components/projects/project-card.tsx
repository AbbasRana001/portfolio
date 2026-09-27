import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import { projectsConfig, projectsCopy } from "@/content/projects";
import type { Project } from "@/types/portfolio";
import { ProjectMedia } from "./project-media";
import { ProjectMetrics } from "./project-metrics";

export function ProjectCard({ project, reverse = false, variant = "editorial" }: { project: Project; reverse?: boolean; variant?: "editorial" | "filtered" | "archive" }) {
  const featuredLayout = variant === "editorial" && project.featured;
  const links = [
    { label: projectsCopy.caseStudy, href: project.caseStudyUrl },
    { label: projectsCopy.github, href: project.github },
    { label: projectsCopy.liveDemo, href: project.liveDemo },
  ].filter(link => link.href?.trim());
  const summary = project.homepageSummary ?? project.shortDescription;
  const tags = (project.homepageTags ?? project.tags).slice(0, projectsConfig.homepageTagLimit);
  const keyMetric = project.metrics?.filter(metric => metric.label.trim() && metric.value.trim()).slice(0, 1);

  return <article aria-labelledby={`project-${project.slug}`} className={`project-card ${featuredLayout ? "project-card-featured" : ""} ${featuredLayout && reverse ? "project-card-reverse" : ""} ${variant === "filtered" ? "project-card-filtered" : ""} ${variant === "archive" ? "project-card-archive" : ""}`}>
    <Surface className="project-card-surface">
      <ProjectMedia project={project} />
      <div className="project-card-content">
        <div className="project-meta"><p className="eyebrow">{project.category}</p>{featuredLayout && <span>{projectsCopy.featured}</span>}</div>
        {project.status === "placeholder" && <Badge tone="accent">{projectsCopy.placeholder}</Badge>}
        <h3 id={`project-${project.slug}`} className="project-title">{project.title}</h3>
        {summary && <p className="project-description">{summary}</p>}
        {keyMetric && <ProjectMetrics metrics={keyMetric} />}
        {tags.length > 0 && <ul className="project-tags" aria-label={projectsCopy.technologies}>{tags.map(tag => <li key={tag}><Badge>{tag}</Badge></li>)}</ul>}
        {links.length > 0 && <div className="project-links">{links.map(link => <ButtonLink key={link.label} href={link.href!} variant="secondary" aria-label={`${link.label}: ${project.title}`}>{link.label}<span aria-hidden="true">↗</span></ButtonLink>)}</div>}
      </div>
    </Surface>
  </article>;
}
