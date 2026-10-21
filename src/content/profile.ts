import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "",
  initials: "Muhammad Abbas Rana",
  eyebrow: "AI · MACHINE LEARNING · DATA SCIENCE",
  // TODO: Replace this explicitly marked sample headline with your own words.
  headline: "I build intelligent systems\nfrom data to deployment.",
  heroIsPlaceholder: false,
  shortBio: "Final-year Computer Science student at COMSATS University Islamabad, Lahore, working on NLP and machine learning, from model evaluation to deployed software.",
  biography: [
    "I got into machine learning through building things, but what holds my attention now is the part that comes after the model trains: can you trust it? That means asking whether annotators actually agree on what a label means, whether a model’s probabilities mean anything, and whether the results survive when the data changes",
    "Right now I’m chasing those questions in NLP, through hate speech detection for Urdu and Roman Urdu, and I’m working toward getting this research published.",
  ],
  aboutIsPlaceholder: false,
  email: "abbasrana0204@gmail.com",
  showEmailInHero: false,
  githubUsername: null,
  socialLinks: [
    { label: "GitHub", platform: "github", url: "https://github.com/AbbasRana001", showInHero: true },
    { label: "ORCID", platform: "other", url: "https://orcid.org/0009-0000-7585-7509", contactLabel: "orcid.org/0009-0000-7585-7509", openInNewTab: true, showInHero: false },
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
  direction: ["Trustworthy Machine Learning", "Evaluation & Data Quality", "Natural Language Processing"],
  directionNote: "Questions I'm working on through project and research work.",
  learningHeading: "Currently focused on",
  factsHeading: "A little context",
};
