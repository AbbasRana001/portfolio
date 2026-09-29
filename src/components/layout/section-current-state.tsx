"use client";

import { useEffect } from "react";

/** Decorative enhancement only: section content never depends on this state. */
export function SectionCurrentState() {
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main > section.section-space[id]")];
    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.toggleAttribute("data-current", entry.isIntersecting));
    }, { rootMargin: "-28% 0px -58% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
