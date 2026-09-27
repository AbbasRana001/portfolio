import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { getHomepageProjects, getVisibleProjects, projectsCopy } from "@/content/projects";
import { ProjectBrowser } from "./project-browser";
import "./projects.css";

export function Projects() {
  const homepageProjects = getHomepageProjects();
  const archiveProjects = getVisibleProjects();

  return (
    <Section id="projects" aria-labelledby="projects-heading" className="projects-section">
      <SectionHeading id="projects-heading" eyebrow={projectsCopy.eyebrow} title={projectsCopy.heading} description={projectsCopy.intro} />
      {homepageProjects.some(project => project.status === "placeholder") && <p className="projects-preview-note">{projectsCopy.previewNote}</p>}
      {homepageProjects.length ? <>
        <ProjectBrowser projects={homepageProjects} />
        {archiveProjects.length > 0 && <ButtonLink href="/projects" variant="secondary" className="projects-archive-link">{projectsCopy.viewAll}<span aria-hidden="true">→</span></ButtonLink>}
      </> : (
        <Surface className="projects-empty">
          <h3 className="type-subheading">{projectsCopy.emptyTitle}</h3>
          <p>{projectsCopy.emptyDescription}</p>
        </Surface>
      )}
    </Section>
  );
}
