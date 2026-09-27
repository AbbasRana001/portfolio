import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/content/education";
import "./education.css";

export function Education() {
  const visibleEducation = education.filter(record => record.visible);

  if (visibleEducation.length === 0) return null;

  return (
    <Section id="education" aria-labelledby="education-heading" className="education-section">
      <SectionHeading id="education-heading" eyebrow="06 / EDUCATION" title="Academic record." />
      <ol className="education-list">
        {visibleEducation.map(record => (
          <li key={record.id} className="education-record">
            <div className="education-primary">
              <h3>{record.degree}</h3>
              <p className="education-institution">{record.institution}</p>
              {record.campus && <p className="education-campus">{record.campus}</p>}
            </div>
            <dl className="education-metadata">
              <div>
                <dt>Period</dt>
                <dd>{record.displayPeriod}</dd>
              </div>
              {record.cgpa && (
                <div>
                  <dt>CGPA</dt>
                  <dd>{record.cgpa}</dd>
                </div>
              )}
            </dl>
            {record.focusAreas && record.focusAreas.length > 0 && (
              <p className="education-focus"><span>Relevant focus:</span> {record.focusAreas.join(" / ")}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
