import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "",
  initials: "Muhammad Abbas Rana",
  eyebrow: "AI · MACHINE LEARNING · DATA SCIENCE",
  // TODO: Replace this explicitly marked sample headline with your own words.
  headline: "I build intelligent systems\nfrom data to deployment.",
  heroIsPlaceholder: false,
  shortBio: "Computer Science student working toward machine learning, data science and applied AI through analytical projects, model-focused study and production software systems.",
  biography: [
    "My work currently sits across data analysis, machine learning foundations and software systems. I use projects to move from understanding data and patterns to building software that can support real applications.",
    "I am now focusing more deeply on machine learning, artificial intelligence and data science, with an emphasis on building stronger technical and research foundations.",
  ],
  aboutIsPlaceholder: false,
  email: "abbasrana0204@gmail.com",
  showEmailInHero: false,
  githubUsername: null,
  socialLinks: [
    { label: "GitHub", platform: "github", url: "https://github.com/AbbasRana001", showInHero: true },
    {
      label: "LinkedIn",
      platform: "linkedin",
      url: "https://www.linkedin.com/in/muhammadabbasrana",
      contactLabel: "linkedin.com/in/muhammadabbasrana",
      openInNewTab: true,
      showInHero: false,
    },
  ],
  resumeUrl: "/documents/Abbas-Rana-Resume.pdf",
  resumeViewerUrl: "/resume",
  currentlyLearning: [],
  quickFacts: [],
  statistics: [], // Real values only. showStats defaults to false.
  contactVisible: true,
  contactHeading: "Let's connect.",
  contactDescription: "Open to relevant opportunities, collaboration, research, or discussion.",
};

/** Contact copy is meaningful on its own; supplied destinations add the contact index. */
export function hasVisibleContact() {
  return profile.contactVisible && Boolean(
    profile.contactHeading?.trim()
    || profile.contactDescription?.trim()
    || profile.contactAvailability?.trim()
    || profile.email
    || profile.socialLinks.some(link => link.url.trim())
    || profile.resumeUrl,
  );
}

export const aboutCopy = {
  eyebrow: "03 / PROFILE",
  heading: "Building from the foundations.",
  placeholderLabel: "Draft introduction · review pending",
  directionHeading: "Where I'm heading",
  // Direction is not a claim of proficiency or completed study.
  direction: ["Artificial Intelligence", "Machine Learning", "Data Science"],
  directionNote: "A direction to grow into, grounded in practical project work.",
  learningHeading: "Currently focused on",
  factsHeading: "A little context",
};
