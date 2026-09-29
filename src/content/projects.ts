import type { Project } from "@/types/portfolio";

// Factual summaries supplied by the owner. Add media and links only when available.
export const projects: Project[] = [
  {
    slug: "mexico-real-estate-price-analysis",
    title: "Mexico Real Estate Price Analysis",
    coverAlt: "Conceptual illustration of property size versus price and regional variation. Scatter marks and regional cells are illustrative, not observed data or actual geographic boundaries.",
    homepageSummary: "Exploring how size and location relate to residential property prices across Mexico.",
    homepageTags: ["Python", "Pandas", "Seaborn", "Jupyter"],
    shortDescription: "Exploratory analysis of Mexican residential property listings investigating whether property prices are influenced more by property size or location.",
    description: "Exploratory analysis of size, location and residential property prices in Mexico.",
    category: "Data Science",
    featured: true,
    showOnHome: true,
    visible: true,
    order: 1,
    status: "published",
    github: "https://github.com/AbbasRana001/Mexico-Real-Estate-Price-Analysis",
    problem: "Determine whether Mexican residential property prices are better explained by property size or geographic location.",
    approach: "Clean and combine property datasets, resolve currency and coordinate issues, and filter outliers using quantiles. Visualize patterns, analyze national and state-level Pearson correlations, engineer price per square meter, and compare within-state and between-state variance.",
    outcome: "Size and price show a moderate positive national relationship, with large state-level variation. Neither size nor location alone fully explains value; substantial within-state variation suggests missing property-level factors.",
    metrics: [{ label: "Pearson r", value: "≈ 0.46", context: "National property size/price correlation, not predictive accuracy." }],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    slug: "call-center-performance-analysis",
    title: "Call Center Performance Analysis",
    coverAlt: "Conceptual cover artwork for the Call Center Performance Analysis project; not a dashboard screenshot or source data.",
    homepageSummary: "An interactive Excel dashboard for exploring call activity, customer satisfaction and representative performance.",
    homepageTags: ["Microsoft Excel", "Power Pivot", "DAX"],
    shortDescription: "Interactive Excel analysis of call-center performance using Pivot Tables, Power Pivot, DAX, KPIs, and dashboard-based employee comparisons.",
    description: "An interactive Excel dashboard for exploring call-center activity and representative performance.",
    category: "Data Analytics",
    featured: false,
    showOnHome: true,
    visible: true,
    order: 2,
    status: "published",
    github: "https://github.com/AbbasRana001/call-center-analysis",
    problem: "Analyze call-center activity, customer satisfaction, purchase behavior, and representative performance.",
    approach: "Prepare data; build Pivot Tables, Pivot Charts, Power Pivot models and DAX calculations. Create KPI summaries with interactive employee-level filtering and comparisons.",
    outcome: "A dashboard for exploring call volume, customer ratings, purchase amounts, customer happiness, and representative-level performance.",
    tags: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Power Pivot", "DAX", "Dashboard Design"],
  },
  {
    slug: "fastapi-task-manager",
    title: "FastAPI Task Manager",
    coverAlt: "Conceptual cover artwork for the FastAPI Task Manager project; not an application screenshot or source data.",
    homepageSummary: "A containerized task API with automated testing, security scanning and deployment to AWS EC2.",
    homepageTags: ["FastAPI", "Docker", "GitHub Actions", "AWS EC2"],
    shortDescription: "A FastAPI REST service packaged with Docker and delivered through an automated CI/CD pipeline to AWS EC2.",
    description: "A supporting engineering project combining a task-management API with testing, containerization, security scanning and deployment.",
    category: "Systems",
    featured: false,
    showOnHome: true,
    visible: true,
    order: 3,
    status: "published",
    github: "https://github.com/AbbasRana001/fastapi-task-manager",
    problem: "Build a small task-management API with a production-style testing, containerization, security, and deployment workflow.",
    approach: "Build CRUD endpoints with Pydantic validation and pytest tests. Containerize with Docker and Compose; automate linting, CodeQL scanning, Docker Hub publishing and EC2 deployment with GitHub Actions. Run with systemd behind Nginx and HTTPS.",
    outcome: "A working REST API with automated linting, security scanning, testing, container build, image publishing, and deployment.",
    tags: ["Python", "FastAPI", "Pydantic", "pytest", "Docker", "Docker Compose", "GitHub Actions", "CodeQL", "Docker Hub", "AWS EC2", "Nginx", "systemd"],
  },
];

export const projectsConfig = {
  // Drafts stay hidden; keep optional layout placeholders off for real content.
  showPlaceholders: false,
  // The homepage remains a curated selection even as the archive grows.
  homepageProjectLimit: 6,
  homepageTagLimit: 4,
};

function isPublicProject(project: Project) {
  return project.visible && (project.status === "published" || (project.status === "placeholder" && projectsConfig.showPlaceholders));
}

/** Complete, ordered source for the public archive. */
export function getVisibleProjects() {
  return projects.filter(isPublicProject).toSorted((left, right) => left.order - right.order);
}

/** Curated, ordered source for the homepage; the archive remains unbounded. */
export function getHomepageProjects() {
  return getVisibleProjects().filter(project => project.showOnHome).slice(0, projectsConfig.homepageProjectLimit);
}

export const projectsCopy = {
  eyebrow: "02 / SELECTED WORK",
  heading: "From questions to evidence.",
  intro: "A space for AI, machine learning and data science work: the problem, the method and the evidence behind each result.",
  previewNote: "Development preview — placeholder entries demonstrate the layout, not completed projects.",
  placeholder: "Placeholder / not real work",
  featured: "Featured case study",
  additional: "More projects",
  viewAll: "View all projects",
  archiveHeading: "Projects",
  archiveFilterLabel: "Filter the project archive by category",
  filterLabel: "Filter projects by category",
  all: "All",
  resultsLabel: "Entries shown",
  emptyTitle: "Project case studies are on the way.",
  emptyDescription: "Verified project details have not been added yet. Check back for the problem, approach and results behind the work.",
  noMatches: "No projects match this category.",
  reset: "Show all projects",
  problem: "Problem",
  approach: "Approach",
  outcome: "Outcome",
  metrics: "Measured results",
  technologies: "Technologies",
  caseStudy: "View Case Study",
  github: "GitHub",
  liveDemo: "Live Demo",
};

