import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { projectsCopy } from "@/content/projects";

export function ProjectMedia({ project }: { project: Project }) {
  return <div className="project-media">
    {project.cover ? <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height}
      sizes={project.featured ? "(min-width: 1024px) 540px, 100vw" : "(min-width: 768px) 540px, 100vw"} /> : (
      <div className="project-media-fallback">
        <svg viewBox="0 0 400 220" aria-hidden="true" fill="none">
          <g className="project-visual-guides">
            <rect x="40" y="30" width="320" height="160" rx="8" />
            <path d="M40 70h320M40 150h320M120 30v160M280 30v160M200 10v200M20 110h360" />
            <circle cx="200" cy="110" r="80" />
          </g>
          <path d="M80 110h72m96 0h72" />
          <rect x="56" y="86" width="48" height="48" rx="8" />
          <rect x="296" y="86" width="48" height="48" rx="8" />
          <path className="project-visual-core" d="m200 54 56 56-56 56-56-56 56-56Z" />
          <path d="m200 88 22 22-22 22-22-22 22-22Z" />
          <circle cx="80" cy="110" r="4" /><circle cx="320" cy="110" r="4" />
        </svg>
        <p>{project.status === "placeholder" ? projectsCopy.mediaPlaceholder : projectsCopy.mediaMissing}</p>
        <span>{projectsCopy.mediaNote}</span>
      </div>
    )}
  </div>;
}
