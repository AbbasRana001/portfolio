/** Content only: no React imports or UI implementation details. */
export type ExternalUrl = `https://${string}`;
export type AssetPath = `/${string}`;
export type ProjectCategory =
  | "AI / ML"
  | "Data Science"
  | "Data Analytics"
  | "Systems";

export interface SocialLink {
  label: string;
  platform: "github" | "linkedin" | "other";
  url: ExternalUrl;
}

export interface ContentImage {
  src: AssetPath;
  alt: string;
  width: number;
  height: number;
}

export interface Statistic {
  label: string;
  value: string;
  context?: string;
}

export interface Profile {
  name: string;
  initials: string;
  eyebrow: string;
  headline: string;
  /** Keep true until the headline and introduction are accurate personal copy. */
  heroIsPlaceholder: boolean;
  shortBio: string;
  biography: string[];
  /** Draft narrative remains visibly marked until reviewed by the owner. */
  aboutIsPlaceholder: boolean;
  location?: string;
  email: string | null;
  githubUsername: string | null;
  socialLinks: SocialLink[];
  resumeUrl: AssetPath | ExternalUrl | null;
  portrait?: ContentImage;
  currentlyLearning: string[];
  quickFacts: { label: string; value: string }[];
  statistics: Statistic[];
  contactHeading: string;
  contactDescription: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  /** Explain evaluation conditions, dataset or baseline when available. */
  context?: string;
}

export interface ProjectCaseStudy {
  dataset?: string;
  exploration?: string;
  methodology?: string;
  evaluation?: string;
  results?: string;
  challenges?: string;
  improvements?: string;
  deployment?: string;
  lessonsLearned?: string;
  images?: ContentImage[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  /** Concise homepage copy; falls back to shortDescription when omitted. */
  homepageSummary?: string;
  /** Optional subset of tags for the homepage; limited by projectsConfig. */
  homepageTags?: string[];
  description: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  /** Draft entries must be excluded from public lists and routes. */
  status: "draft" | "published" | "placeholder";
  problem?: string;
  approach?: string;
  outcome?: string;
  metrics?: ProjectMetric[];
  github?: ExternalUrl;
  liveDemo?: ExternalUrl;
  /** Only set when the destination actually exists; never inferred from slug. */
  caseStudyUrl?: AssetPath | ExternalUrl;
  cover?: ContentImage;
  caseStudy?: ProjectCaseStudy;
}

export interface Skill {
  name: string;
  /** Demonstrated skills can be matched to published project tags; developing skills are owner-declared only. */
  evidence: "demonstrated" | "developing";
  description?: string;
}

export interface SkillGroup {
  id: string;
  index: string;
  title: string;
  emphasis: "primary" | "supporting";
  description?: string;
  /** Short stages rendered as the group’s schematic practice flow. */
  process: string[];
  skills: Skill[];
}

/** Dates use YYYY-MM; a null endDate means ongoing. */
export interface Experience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  description: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  gpa?: string;
  coursework: string[];
  activities: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: ExternalUrl;
  image?: ContentImage;
}

export interface ResearchItem {
  id: string;
  /** Stable editorial identifier displayed with the Lab Note. */
  identifier: string;
  title: string;
  type: "Research Interest" | "Current Study" | "Experiment" | "Paper" | "Coursework" | "Preprint";
  status: "Exploring" | "Studying" | "Building" | "Writing" | "Published";
  shortDescription: string;
  topics: string[];
  link?: ExternalUrl;
  date?: string;
}

export type SectionId = "about" | "projects" | "lab-notes" | "experience" | "contact";

export interface NavigationItem {
  label: string;
  href: `/#${SectionId}`;
  enabled: boolean;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
}

export interface FeatureFlags {
  showResearch: boolean;
  showCertifications: boolean;
  showGithub: boolean;
  showConsole: boolean;
  showStats: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: ExternalUrl | null;
  language: string;
  keywords: string[];
  allowIndexing: boolean;
  ogImage: ContentImage | null;
}
