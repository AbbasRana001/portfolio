import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/experience";
import "./experience.css";

export function Experience() {
  const visibleExperiences = experiences.filter(experience => experience.visible);

  if (visibleExperiences.length === 0) return null;

  return (
    <Section id="experience" aria-labelledby="experience-heading" className="experience-section">
      <SectionHeading id="experience-heading" eyebrow="05 / EXPERIENCE" title="Professional chronology." />
      <ol className="experience-list">
        {visibleExperiences.map(experience => (
          <li key={experience.id} className="experience-entry">
            <p className="experience-period">{experience.period}</p>
            <div className="experience-content">
              <h3>{experience.role}</h3>
              <p className="experience-organization">
                {experience.organization}
                {experience.workArrangement && <span> · {experience.workArrangement}</span>}
              </p>
              {experience.descriptionBullets.length > 0 && (
                <ul className="experience-description">
                  {experience.descriptionBullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
