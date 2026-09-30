"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { resumeDataUrl } from "@/lib/resume-routes";

const MobileResume = dynamic(() => import("./mobile-resume").then(module => module.MobileResume), {
  ssr: false,
  loading: () => <p className="resume-viewer-status" role="status">Loading resume…</p>,
});

function decodeResumeData(data: string) {
  const binary = atob(data);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

function DesktopResume({ data }: { data: Uint8Array }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const objectUrl = URL.createObjectURL(new Blob([new Uint8Array(data).buffer], { type: "application/pdf" }));
    frame.src = objectUrl;
    return () => {
      frame.removeAttribute("src");
      URL.revokeObjectURL(objectUrl);
    };
  }, [data]);

  return <iframe ref={frameRef} className="resume-frame" title="Resume PDF" />;
}

/** One resume request serves the native desktop frame and the in-page mobile pages. */
export function ResumeViewer() {
  const [mode, setMode] = useState<"desktop" | "mobile" | null>(null);
  const [data, setData] = useState<Uint8Array>();
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const desktop = matchMedia("(min-width: 64rem)");
    const updateMode = () => setMode(desktop.matches ? "desktop" : "mobile");
    updateMode();
    desktop.addEventListener("change", updateMode);
    return () => desktop.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadResume() {
      try {
        const response = await fetch(resumeDataUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("Resume data request failed");
        const payload: { data?: string } = await response.json();
        if (!payload.data) throw new Error("Resume data was empty");
        setData(decodeResumeData(payload.data));
      } catch {
        if (!controller.signal.aborted) setLoadError(true);
      }
    }

    loadResume();
    return () => controller.abort();
  }, []);

  if (loadError) return <div className="resume-document-viewport"><p className="resume-viewer-status" role="alert">Unable to display the resume. Please try reloading this page.</p></div>;

  return <div className="resume-document-viewport">
    {!data || !mode ? <p className="resume-viewer-status" role="status">Loading resume…</p> : mode === "mobile" ? (
      <MobileResume data={data} />
    ) : <DesktopResume data={data} />}
  </div>;
}
