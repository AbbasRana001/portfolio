"use client";

import { useState } from "react";
import { heroCopy } from "@/content/hero";

// Deliberately composed illustration; these coordinates are not observations.
const marks = [[88,280],[105,245],[124,302],[143,210],[157,259],[180,185],[192,235],[211,162],[231,206],[249,135],[268,175],[286,112],[302,149],[324,94],[346,130],[365,70]];

type LensState = "raw" | "features" | "model";

const lensTransforms: Record<LensState, { dx: number; dy: number; emphasis: boolean }> = {
  raw: { dx: 0, dy: 0, emphasis: false },
  features: { dx: 0, dy: 0, emphasis: true },
  model: { dx: 0, dy: 0, emphasis: false },
};

export function DataStudy() {
  const copy = heroCopy.visualization;
  const [lens, setLens] = useState<LensState>("raw");
  const controls: { id: LensState; label: string }[] = [
    { id: "raw", label: copy.raw },
    { id: "features", label: copy.features },
    { id: "model", label: copy.model },
  ];
  return <figure className="data-study">
    <div className="study-meta"><span>{copy.index}</span><span aria-hidden="true">↗</span></div>
    <div className="study-controls" role="group" aria-label="Data Lens mode">
      {controls.map(control => <button key={control.id} type="button" aria-pressed={lens === control.id} onClick={() => setLens(control.id)}>{control.label}</button>)}
    </div>
    <svg className={`study-graphic study-${lens}`} viewBox="0 0 480 420" role="img" aria-labelledby="study-title study-description">
      <title id="study-title">{copy.title}</title>
      <desc id="study-description">{copy.description}</desc>
      <g className="study-guides" fill="none">
        {[100,180,260,340].map(y => <path key={y} d={`M56 ${y}H406`} />)}
        {[86,166,246,326,406].map(x => <path key={x} d={`M${x} 52V340`} />)}
      </g>
      <path className="study-axis" fill="none" d="M56 52V340H420" />
      <path className="study-line" pathLength="1" fill="none" d="M78 300C148 284 164 206 221 191S312 116 376 86" />
      <g className="study-points">{marks.map(([x,y],i) => {
        const trendY = 324 - ((x - 78) * .79);
        const featureShift = i % 3 === 0 ? -10 : i % 3 === 1 ? 5 : 0;
        const transform = lensTransforms[lens];
        const dy = lens === "model" ? trendY - y : lens === "features" ? featureShift : transform.dy;
        const emphasis = lens === "features" && i % 3 === 0;
        return <circle key={i} cx={x} cy={y} r={emphasis ? 5.5 : i % 4 === 0 ? 5 : 3.5}
          style={{ transform: `translate(${transform.dx}px, ${dy}px)` }} className={`${i % 4 === 0 ? "study-point-secondary" : ""}${emphasis ? " study-point-emphasis" : ""}`} />;
      })}</g>
      <g className="study-labels"><text x="56" y="29">{copy.input}</text><text x="420" y="370" textAnchor="end">{copy.axisX}</text><text transform="translate(25 205) rotate(-90)">{copy.axisY}</text></g>
      <g className="study-projection"><path d="M56 399H420" />{marks.map(([x],i) => <path key={i} d={`M${x} 393v12`} />)}</g>
      <text className="study-labels" x="56" y="380">{copy.output}</text>
    </svg>
    <figcaption><span>{copy.title}</span><small>{copy.caption}</small></figcaption>
  </figure>;
}
