import type { ProjectMetric } from "@/types/portfolio";
import { projectsCopy } from "@/content/projects";

export function ProjectMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  const measured = metrics.filter(metric => metric.label.trim() && metric.value.trim());
  if (!measured.length) return null;
  return <dl className="project-metrics" aria-label={projectsCopy.metrics}>
    {measured.map(metric => <div key={metric.label}>
      <dt>{metric.label}</dt>
      <dd><strong>{metric.value}</strong>{metric.context && <span>{metric.context}</span>}</dd>
    </div>)}
  </dl>;
}
