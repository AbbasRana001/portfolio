import type { FeatureFlags, SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "AI / ML Portfolio — Foundation",
  title: "AI / ML Portfolio",
  description: "Artificial Intelligence, Machine Learning and Data Science portfolio. Personal introduction pending.",
  url: null, // TODO: Add the real HTTPS production origin before SEO setup.
  language: "en",
  keywords: ["Artificial Intelligence", "Machine Learning", "Data Science"],
  allowIndexing: false, // Keep disabled while placeholder content remains.
  ogImage: null, // TODO: Add an actual image before enabling social metadata.
};

// Reserved for future sections. A flag never overrides an empty collection.
export const features: FeatureFlags = {
  showResearch: false,
  showCertifications: false,
  showGithub: false,
  showConsole: false,
  showStats: false,
};
