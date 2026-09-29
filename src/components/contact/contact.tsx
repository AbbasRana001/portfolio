import { Section } from "@/components/layout/section";
import { hasVisibleContact, profile } from "@/content/profile";
import "./contact.css";

export function Contact() {
  if (!hasVisibleContact()) return null;

  const socialLinks = profile.socialLinks.filter(link => link.url.trim());
  const contactMethodCount = Number(Boolean(profile.email)) + socialLinks.length + Number(Boolean(profile.resumeUrl));
  const hasContactMethods = contactMethodCount > 0;

  return (
    <Section id="contact" aria-labelledby="contact-heading" className="contact-section">
      <p className="eyebrow">08 / CONTACT</p>
      <div className={`contact-layout${hasContactMethods ? ` contact-layout--methods-${contactMethodCount}` : " contact-layout--intro-only"}`}>
        <div className="contact-introduction">
          <h2 id="contact-heading" className="contact-title">{profile.contactHeading}</h2>
          {profile.contactDescription && <p className="contact-description">{profile.contactDescription}</p>}
          {profile.contactAvailability && <p className="contact-availability">{profile.contactAvailability}</p>}
        </div>
        {hasContactMethods && (
          <dl className="contact-index">
            {profile.email && (
              <div className="contact-item">
                <dt>Email</dt>
                <dd><a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">→</span></a></dd>
              </div>
            )}
            {socialLinks.map(link => (
              <div key={link.url} className="contact-item">
                <dt>{link.label}</dt>
                <dd><a href={link.url}>{link.label}<span aria-hidden="true">→</span></a></dd>
              </div>
            ))}
            {profile.resumeUrl && (
              <div className="contact-item">
                <dt>Resume</dt>
                <dd><a href={profile.resumeViewerUrl} aria-label="View resume (opens the resume viewer)">View resume<span aria-hidden="true">→</span></a></dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </Section>
  );
}
