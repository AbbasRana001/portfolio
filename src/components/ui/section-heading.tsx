import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2";
}

export function SectionHeading({ id, eyebrow, title, description, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={id} className={Heading === "h1" ? "type-display" : "type-heading"}>{title}</Heading>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
