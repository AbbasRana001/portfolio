"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { projectsCopy } from "@/content/projects";
import type { ProjectCategory } from "@/types/portfolio";

interface Entry { slug: string; category: ProjectCategory; featured: boolean; card: ReactNode; filteredCard: ReactNode }
/** Cards are composed on the server and passed as slots, not imported by this client. */
export function ProjectFilter({ entries, presentation = "home", filterLabel = projectsCopy.filterLabel }: { entries: Entry[]; presentation?: "home" | "archive"; filterLabel?: string }) {
  const [selected, setSelected] = useState<ProjectCategory | "All">("All");
  const categories = [...new Set(entries.map(entry => entry.category))];
  const visible = entries.filter(entry => selected === "All" || entry.category === selected);
  const featured = visible.filter(entry => entry.featured);
  const additional = visible.filter(entry => !entry.featured);

  function selectCategory(category: ProjectCategory | "All") {
    if (category === selected) return;
    setSelected(category);
  }

  return (
    <div className="project-browser">
      <div className="project-filters" role="group" aria-label={filterLabel}>
        {(["All", ...categories] as const).map(category => (
          <Button key={category} variant="secondary" aria-pressed={selected === category} aria-controls="project-results" onClick={() => selectCategory(category)}>
            {category === "All" ? projectsCopy.all : category}
          </Button>
        ))}
      </div>
      <p className="project-result-count" role="status" aria-live="polite" aria-atomic="true">{projectsCopy.resultsLabel}: {visible.length}</p>
      <div id="project-results" className="project-results">
        <div key={selected} className="project-result-content">
          {presentation === "archive" && visible.length > 0 && <div className="project-archive-grid">
            {visible.map(entry => <div key={entry.slug}>{entry.filteredCard}</div>)}
          </div>}
          {presentation === "home" && selected !== "All" && visible.length > 0 && <div className="project-filtered-list">
            {visible.map(entry => <div key={entry.slug}>{entry.filteredCard}</div>)}
          </div>}
          {presentation === "home" && selected === "All" && featured.length > 0 && <div className="project-featured-list">{featured.map(entry => <div key={entry.slug}>{entry.card}</div>)}</div>}
          {presentation === "home" && selected === "All" && additional.length > 0 && <div className="project-additional">
            {featured.length > 0 && <p className="eyebrow">{projectsCopy.additional}</p>}
            <div className="project-grid">{additional.map(entry => <div key={entry.slug}>{entry.card}</div>)}</div>
          </div>}
          {visible.length === 0 && <div className="projects-empty"><p>{projectsCopy.noMatches}</p><Button variant="secondary" onClick={() => setSelected("All")}>{projectsCopy.reset}</Button></div>}
        </div>
      </div>
    </div>
  );
}
