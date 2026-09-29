import { Section } from "@/components/layout/section";
import { getVisibleCertifications } from "@/content/certifications";
import { CertificationBrowser } from "./certification-browser";
import "./certifications.css";

export function Certifications() {
  const certifications = getVisibleCertifications();

  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" aria-labelledby="certifications-heading" className="certifications-section">
      <CertificationBrowser certifications={certifications} />
    </Section>
  );
}
