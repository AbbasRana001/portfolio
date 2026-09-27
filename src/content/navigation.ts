import type { NavigationItem } from "@/types/portfolio";
import { experiences } from "@/content/experience";
import { hasVisibleContact } from "@/content/profile";

// Enable each item only when its matching homepage section is implemented.
export const navigation: NavigationItem[] = [
  { label: "Projects", href: "/#projects", enabled: true },
  { label: "Profile", href: "/#about", enabled: true },
  { label: "Lab Notes", href: "/#lab-notes", enabled: true },
  { label: "Experience", href: "/#experience", enabled: experiences.some(experience => experience.visible) },
  { label: "Contact", href: "/#contact", enabled: hasVisibleContact() },
];

export const navigationCopy = {
  home: "Portfolio home — initials placeholder",
  brandLabel: "AI / ML",
  label: "Main navigation",
  open: "Open navigation",
  close: "Close navigation",
  menu: "Navigation",
  resume: "Resume",
  unavailable: "Coming soon",
  note: "Browse the selected work, profile, lab notes and professional record.",
};
