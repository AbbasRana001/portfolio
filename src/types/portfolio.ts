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
  /** Optional readable destination shown in the Contact chapter. */
  contactLabel?: string;
  /** Opens this external contact destination in a separate tab when true. */
  openInNewTab?: boolean;
  /** Controls whether this destination is shown with the Hero social links. */
  showInHero?: boolean;
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
  /** Keeps contact-only email addresses out of the Hero social links when false. */
  showEmailInHero?: boolean;
  githubUsername: string | null;
  socialLinks: SocialLink[];
  resumeUrl: AssetPath | ExternalUrl | null;
  /** In-site viewer used by normal portfolio Resume actions. */
  resumeViewerUrl: AssetPath;
  portrait?: ContentImage;
  currentlyLearning: string[];
  quickFacts: { label: string; value: string }[];
  statistics: Statistic[];
  /** Controls whether the lower-page Contact chapter is rendered. */
  contactVisible: boolean;
  contactHeading: string;
  contactDescription?: string;
  contactAvailability?: string;
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
}

export interface Project {
  slug: string;
  title: string;
  /** Accessible description for the slug-derived project cover. */
  coverAlt: string;
  shortDescription: string;
  /** Concise homepage copy; falls back to shortDescription when omitted. */
  homepageSummary?: string;
  /** Optional subset of tags for the homepage; limited by projectsConfig. */
  homepageTags?: string[];
  description: string;
  category: ProjectCategory;
  tags: string[];
  /** A single selected project may receive the prominent homepage treatment. */
  featured: boolean;
  /** Controls whether a published project is included in the curated homepage selection. */
  showOnHome: boolean;
  /** Controls whether a published project is available in the public archive. */
  visible: boolean;
  /** Lower values are shown first in both the archive and homepage selection. */
  order: number;
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

export interface Experience {
  id: string;
  role: string;
  organization: string;
  /** Human-readable chronology label, such as "Jul 2026 — Present". */
  period: string;
  /** Secondary organization metadata, such as a work arrangement. */
  workArrangement?: string;
  /** Keep individual points structured so the presentation can render a real list. */
  descriptionBullets: string[];
  link?: ExternalUrl;
  /** Hidden entries remain in content but are omitted from the homepage and navigation. */
  visible: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  campus?: string;
  startYear: string;
  endYear?: string;
  /** Human-readable chronology label, such as "2023 — 2027". */
  displayPeriod: string;
  cgpa?: string;
  focusAreas?: string[];
  relevantCoursework?: string[];
  visible: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: ExternalUrl;
  /** A supplied certificate image, including truthful, useful alternative text. */
  image: ContentImage;
  /** Optional local original certificate, separate from official verification. */
  certificateFile?: AssetPath;
  /** Lower values establish the list and initial active-preview order. */
  order: number;
  /** Hidden credentials remain in centralized content without appearing publicly. */
  visible: boolean;
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

export type SectionId = "about" | "projects" | "lab-notes" | "experience" | "education" | "certifications" | "contact";

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
