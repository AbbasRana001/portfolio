import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { aboutCopy, profile } from "@/content/profile";
import "./about.css";

export function About() {
  const paragraphs = profile.biography.filter(paragraph => paragraph.trim());
  const learning = profile.currentlyLearning.filter(item => item.trim());
  return (
    <Section id="about" aria-labelledby="about-heading" className="about-section">
      <SectionHeading id="about-heading" eyebrow={aboutCopy.eyebrow} title={aboutCopy.heading} />
      <div className="about-composition">
        <div className="about-narrative">
          {profile.aboutIsPlaceholder && <Badge>{aboutCopy.placeholderLabel}</Badge>}
          {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {profile.quickFacts.length > 0 && <dl className="about-facts" aria-label={aboutCopy.factsHeading}>
            {profile.quickFacts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>}
        </div>
        <div className="about-direction">
          <h3 className="eyebrow">{aboutCopy.directionHeading}</h3>
          <ul className="about-focus-list">{aboutCopy.direction.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="about-direction-note">{aboutCopy.directionNote}</p>
          {learning.length > 0 && <div className="about-learning">
            <h3 className="type-subheading">{aboutCopy.learningHeading}</h3>
            <ul>{learning.map(item => <li key={item}>{item}</li>)}</ul>
          </div>}
        </div>
      </div>
    </Section>
  );
}
