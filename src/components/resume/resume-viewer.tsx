"use client";

import { useEffect, useState } from "react";
import { resumeDataUrl } from "@/lib/resume-routes";

function decodeResumeData(data: string) {
  const binary = atob(data);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

/** Creates one local PDF Blob URL; no public PDF URL is used during normal viewing. */
export function ResumeViewer() {
  const [blobUrl, setBlobUrl] = useState<string>();
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let objectUrl: string | undefined;

    async function loadResume() {
      try {
        const response = await fetch(resumeDataUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("Resume data request failed");
        const payload: { data?: string } = await response.json();
        if (!payload.data) throw new Error("Resume data was empty");
        const blob = new Blob([decodeResumeData(payload.data)], { type: "application/pdf" });
        objectUrl = URL.createObjectURL(blob);
        setBlobUrl(objectUrl);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") setLoadError(true);
      }
    }

    loadResume();
    return () => {
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  if (loadError) return <div className="resume-document-viewport"><p className="resume-viewer-status" role="alert">Unable to display the resume.</p></div>;

  return <div className="resume-document-viewport">
    {!blobUrl ? <p className="resume-viewer-status" role="status">Loading resume…</p> : (
      <iframe className="resume-frame" src={blobUrl} title="Resume PDF" />
    )}
  </div>;
}
