import type { FeatureFlags, SiteConfig } from "@/types/portfolio";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = configuredSiteUrl?.startsWith("https://") ? configuredSiteUrl as SiteConfig["url"] : null;

export const siteConfig: SiteConfig = {
  name: "Abbas Rana",
  title: "Abbas Rana — AI, Machine Learning & Data Science",
  description: "Portfolio of Abbas Rana, a Computer Science student focused on artificial intelligence, machine learning, data science, and applied software systems.",
  // Configure NEXT_PUBLIC_SITE_URL with the real HTTPS production origin when available.
  url: siteUrl,
  language: "en",
  keywords: ["Artificial Intelligence", "Machine Learning", "Data Science"],
  allowIndexing: true,
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
