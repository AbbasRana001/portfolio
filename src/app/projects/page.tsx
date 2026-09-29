import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ProjectBrowser } from "@/components/projects/project-browser";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { getVisibleProjects, projectsCopy } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected artificial intelligence, data science, data analytics, and systems projects by Abbas Rana.",
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <Section aria-labelledby="projects-archive-heading" className="projects-archive-section">
      <SectionHeading as="h1" id="projects-archive-heading" title={projectsCopy.archiveHeading} />
      {projects.length ? <ProjectBrowser projects={projects} presentation="archive" filterLabel={projectsCopy.archiveFilterLabel} /> : (
        <Surface className="projects-empty">
          <h2 className="type-subheading">{projectsCopy.emptyTitle}</h2>
          <p>{projectsCopy.emptyDescription}</p>
        </Surface>
      )}
    </Section>
  );
}
