"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { certificationsCopy } from "@/content/certifications";
import type { Certification } from "@/types/portfolio";

function CredentialMetadata({ certification }: { certification: Certification }) {
  return (
    <dl className="certification-metadata">
      <div>
        <dt>{certificationsCopy.issued}</dt>
        <dd>{certification.issueDate}</dd>
      </div>
      {certification.credentialId && <div>
        <dt>{certificationsCopy.credentialId}</dt>
        <dd>{certification.credentialId}</dd>
      </div>}
    </dl>
  );
}

function CredentialActions({ certification }: { certification: Certification }) {
  if (!certification.credentialUrl) return null;

  return (
    <div className="certification-actions">
      {certification.credentialUrl && <ButtonLink href={certification.credentialUrl} variant="secondary" target="_blank" rel="noopener noreferrer"
        aria-label={`${certificationsCopy.verify}: ${certification.title} (opens in a new tab)`}>{certificationsCopy.verify}<span aria-hidden="true">↗</span></ButtonLink>}
    </div>
  );
}

function CertificatePreview({ certification, active = false }: { certification: Certification; active?: boolean }) {
  return (
    <figure className={`certificate-preview${active ? " certificate-preview-active" : ""}`}>
      <Image src={certification.image.src} alt={certification.image.alt} width={certification.image.width} height={certification.image.height} sizes="(min-width: 64rem) min(54vw, 48rem), 100vw" />
    </figure>
  );
}

export function CertificationBrowser({ certifications }: { certifications: Certification[] }) {
  const [activeId, setActiveId] = useState(certifications[0]?.id);
  const activeCertification = certifications.find(certification => certification.id === activeId) ?? certifications[0];

  return (
    <>
      <div className="certifications-heading">
        <p className="eyebrow">{certificationsCopy.eyebrow}</p>
        <h2 id="certifications-heading" className="type-heading">{certificationsCopy.heading}</h2>
      </div>

      <div className="certifications-desktop">
        <ol className="certification-index" aria-label={certificationsCopy.heading} tabIndex={0}>
          {certifications.map((certification, index) => <li key={certification.id}>
            <button type="button" className="certification-selector" aria-pressed={certification.id === activeCertification.id}
              onClick={event => {
                setActiveId(certification.id);
                event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
              }}>
              <span className="certification-selector-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="certification-selector-copy">
                <strong>{certification.title}</strong>
                <span>{certification.issuer}</span>
                <span className="certification-selector-metadata">
                  <span>{certification.issueDate}</span>
                  {certification.credentialId && <span>{certification.credentialId}</span>}
                </span>
              </span>
            </button>
          </li>)}
        </ol>

        <article className="certification-active" aria-live="polite">
          <CertificatePreview certification={activeCertification} active />
          <div className="certification-active-details">
            <CredentialActions certification={activeCertification} />
          </div>
        </article>
      </div>

      <ol className="certification-mobile-list">
        {certifications.map(certification => <li key={certification.id} className="certification-mobile-card">
          <CertificatePreview certification={certification} />
          <div className="certification-mobile-details">
            <p className="eyebrow">{certification.issuer}</p>
            <h3>{certification.title}</h3>
            <CredentialMetadata certification={certification} />
            <CredentialActions certification={certification} />
          </div>
        </li>)}
      </ol>
    </>
  );
}
