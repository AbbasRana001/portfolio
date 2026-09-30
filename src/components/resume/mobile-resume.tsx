"use client";

import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy, type RenderTask } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

function ResumePage({ pdf, pageNumber }: { pdf: PDFDocumentProxy; pageNumber: number }) {
  const containerRef = useRef<HTMLLIElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [accessibleText, setAccessibleText] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(entries => {
      const nextWidth = Math.round(entries[0].contentRect.width);
      if (nextWidth > 0) setWidth(previous => previous === nextWidth ? previous : nextWidth);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!width) return;
    let cancelled = false;
    let renderTask: RenderTask | undefined;

    async function renderPage() {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;
        const baseViewport = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: width / baseViewport.width });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2.5);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) throw new Error("Canvas is unavailable");
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        renderTask = page.render({ canvas, canvasContext: context, viewport, transform: [outputScale, 0, 0, outputScale, 0, 0] });
        await renderTask.promise;
        if (cancelled) return;
        setReady(true);
        const content = await page.getTextContent();
        if (!cancelled) setAccessibleText(content.items.map(item => "str" in item ? item.str : "").join(" "));
      } catch (cause) {
        if (!cancelled && !(cause instanceof Error && cause.name === "RenderingCancelledException")) setError(true);
      }
    }

    renderPage();
    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [pdf, pageNumber, width]);

  return <li ref={containerRef} className="resume-mobile-page" aria-label={`Resume page ${pageNumber} of ${pdf.numPages}`}>
    {error ? <p className="resume-viewer-status" role="alert">Unable to render resume page {pageNumber}.</p> : <>
      {!ready && <p className="resume-viewer-status" role="status">Rendering page {pageNumber}…</p>}
      <canvas ref={canvasRef} aria-hidden="true" />
      <p className="sr-only">Page {pageNumber} of {pdf.numPages}. {accessibleText || "Resume page rendering."}</p>
    </>}
  </li>;
}

export function MobileResume({ data }: { data: Uint8Array }) {
  const [pdf, setPdf] = useState<PDFDocumentProxy>();
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const task = getDocument({ data: new Uint8Array(data) });
    task.promise.then(document => {
      if (!cancelled) setPdf(document);
    }).catch(() => { if (!cancelled) setError(true); });
    return () => {
      cancelled = true;
      void task.destroy();
    };
  }, [data]);

  if (error) return <p className="resume-viewer-status" role="alert">Unable to render the resume. Please try reloading this page.</p>;
  if (!pdf) return <p className="resume-viewer-status" role="status">Loading resume…</p>;

  return <ol className="resume-mobile-pages" aria-label="Resume pages">
    {Array.from({ length: pdf.numPages }, (_, index) => <ResumePage key={index + 1} pdf={pdf} pageNumber={index + 1} />)}
  </ol>;
}
