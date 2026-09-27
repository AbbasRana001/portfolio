import type { CSSProperties } from "react";
import { heroCopy } from "@/content/hero";

type Observation = {
  x: number;
  y: number;
  moveX: number;
  moveY: number;
  tone?: "blue" | "orange";
};

const observations: readonly Observation[] = [
  { x: 61, y: 318, moveX: 89, moveY: -128 }, { x: 89, y: 119, moveX: 81, moveY: 31 },
  { x: 112, y: 241, moveX: 68, moveY: -11, tone: "orange" }, { x: 141, y: 76, moveX: 59, moveY: 94 },
  { x: 168, y: 348, moveX: 42, moveY: -98 }, { x: 192, y: 189, moveX: 33, moveY: 11, tone: "blue" },
  { x: 218, y: 282, moveX: 17, moveY: -42 }, { x: 244, y: 132, moveX: 6, moveY: 48 },
  { x: 269, y: 365, moveX: -9, moveY: -100 }, { x: 296, y: 213, moveX: -26, moveY: -3 },
  { x: 321, y: 91, moveX: -36, moveY: 69, tone: "orange" }, { x: 344, y: 297, moveX: -49, moveY: -52 },
  { x: 370, y: 156, moveX: -95, moveY: 69 }, { x: 396, y: 346, moveX: -96, moveY: -156 },
  { x: 421, y: 242, moveX: -111, moveY: 13, tone: "blue" }, { x: 448, y: 62, moveX: -68, moveY: 88 },
  { x: 474, y: 194, moveX: -69, moveY: -9 }, { x: 499, y: 318, moveX: -74, moveY: -93 },
  { x: 522, y: 109, moveX: -77, moveY: 66, tone: "blue" }, { x: 548, y: 265, moveX: -88, moveY: -10 },
  { x: 575, y: 166, moveX: -90, moveY: 39 }, { x: 598, y: 348, moveX: -98, moveY: -188, tone: "orange" },
  { x: 79, y: 388, moveX: 436, moveY: -143 }, { x: 631, y: 71, moveX: -101, moveY: 119 },
  { x: 613, y: 228, moveX: -63, moveY: 52 }, { x: 35, y: 201, moveX: 425, moveY: 19 },
  { x: 335, y: 401, moveX: 255, moveY: -226, tone: "blue" }, { x: 269, y: 39, moveX: 331, moveY: 221 },
  { x: 410, y: 401, moveX: 10, moveY: -101 },
];

function pointStyle(point: Observation, index: number): CSSProperties {
  return {
    "--settled-x": `${point.moveX}px`,
    "--settled-y": `${point.moveY}px`,
    "--delay": `${index * -0.14}s`,
  } as CSSProperties;
}

/** Editorial SVG study of observations resolving into learned structure. */
export function DataStudy() {
  const copy = heroCopy.visualization;

  return <figure className="data-study">
    <svg className="study-field" viewBox="0 0 640 430" role="img" aria-labelledby="study-title study-description">
      <title id="study-title">{copy.title}</title>
      <desc id="study-description">{copy.description}</desc>
      <g className="study-grid-fragments" aria-hidden="true">
        <path d="M31 92h92M31 112h54M472 334h118M530 314h60M94 397v-62M114 397v-38M548 109V43M570 76V43" />
      </g>
      <g className="study-relationship-field" aria-hidden="true">
        <path d="M156 222 181 177 214 212 238 164 273 197 304 159" />
        <path d="M326 222 357 185 391 214 421 169 454 202 488 151" />
        <path d="M174 254 204 227 233 246M397 244 429 216 460 234" />
      </g>
      <path className="study-boundary study-boundary-soft" aria-hidden="true" d="M69 304C149 241 209 272 279 241s111-101 198-78 84 77 121 31" />
      <path className="study-boundary" aria-hidden="true" d="M62 326C143 258 208 291 281 255s111-105 197-80 86 81 125 28" />
      <g className="study-observations" aria-hidden="true">
        {observations.map((point, index) => <circle key={`${point.x}-${point.y}`} className={`study-point${point.tone ? ` study-point-${point.tone}` : ""}`} cx={point.x} cy={point.y} r={index % 4 === 0 ? 5 : 3.8} style={pointStyle(point, index)} />)}
      </g>
      <g className="study-regions" aria-hidden="true">
        <path d="M123 209c21-53 92-68 139-22 34 34 21 92-32 111-57 21-123-27-107-89Z" />
        <path d="M360 177c45-55 157-45 218 29 35 44-11 107-99 99-83-8-142-75-119-128Z" />
      </g>
    </svg>
  </figure>;
}
