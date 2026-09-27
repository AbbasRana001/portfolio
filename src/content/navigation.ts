import type { NavigationItem } from "@/types/portfolio";
import { experiences } from "@/content/experience";

// Enable each item only when its matching homepage section is implemented.
export const navigation: NavigationItem[] = [
  { label: "Projects", href: "/#projects", enabled: true },
  { label: "Profile", href: "/#about", enabled: true },
  { label: "Experience", href: "/#experience", enabled: experiences.some(experience => experience.visible) },
  { label: "Lab Notes", href: "/#lab-notes", enabled: true },
  { label: "Contact", href: "/#contact", enabled: false },
];

export const navigationCopy = {
  home: "Portfolio home — initials placeholder",
  brandLabel: "AI / ML",
  label: "Main navigation",
  open: "Open navigation",
  close: "Close navigation",
  menu: "Navigation",
  resume: "Resume",
  resumeUnavailable: "Resume not added yet",
  unavailable: "Coming soon",
  note: "Projects, Profile and Lab Notes are available. Other sections are coming in the next stages.",
};
