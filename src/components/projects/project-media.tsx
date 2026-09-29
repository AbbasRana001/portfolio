import Image from "next/image";
import type { Project } from "@/types/portfolio";

export function ProjectMedia({ project }: { project: Project }) {
  const coverSrc = `/images/projects/${project.slug}/cover.png`;

  return <div className="project-media">
    <Image src={coverSrc} alt={project.coverAlt} width={960} height={540}
      unoptimized
      sizes={project.featured ? "(min-width: 1024px) 540px, 100vw" : "(min-width: 768px) 540px, 100vw"} />
  </div>;
}
