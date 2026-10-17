import type { Project } from "@/types/portfolio";

// Factual summaries supplied by the owner. Add media and links only when available.
export const projects: Project[] = [
  {
    slug: "policyjev",
    title: "PolicyJEV: Evaluating Moderation Models",
    coverAlt: "Line chart of rare-label recall on the test set against the share of traffic sent to human review (1%, 2%, 5%, 10%, 20%) for logistic regression, DistilBERT and JEV, with 95% intervals. JEV is highest at 1% and 2% (about 0.31 and 0.46), close to logistic regression at 5%, and below both baselines from 10%.",
    homepageSummary: "Zero-shot TypeSafe JEV against logistic regression and DistilBERT on 63,978 held-out toxic comments, under a protocol frozen before test scoring. The zero-shot model ranked lowest on average precision.",
    homepageTags: ["Python", "scikit-learn", "PyTorch", "FastAPI"],
    shortDescription: "A comparison, run under a frozen protocol, of zero-shot TypeSafe JEV against TF-IDF logistic regression and fine-tuned DistilBERT on the Jigsaw Toxic Comment Classification test set, plus a three-way moderation policy (allow, human review, action) and a FastAPI and React console.",
    description: "A frozen-protocol comparison of zero-shot and trained models for toxic-comment moderation, with an archived, citable record.",
    category: "AI / ML",
    featured: true,
    showOnHome: true,
    visible: true,
    order: 1,
    status: "published",
    github: "https://github.com/AbbasRana001/PolicyJEV",
    caseStudyUrl: "https://doi.org/10.5281/zenodo.23407397",
    problem: "Test whether a zero-shot API that scores text from natural-language questions can rank toxic comments as well as trained models, and what happens when its probabilities drive a three-way moderation policy.",
    approach: "Freeze the protocol, question set, calibrators and validation thresholds in git before any test scoring. Compare TF-IDF logistic regression, fine-tuned DistilBERT and zero-shot JEV on 63,978 held-out Jigsaw comments across six labels, using paired bootstrap intervals. Add an allow, review or action policy with thresholds fitted on validation data, and evaluate it on the test set.",
    outcome: "JEV ranked below both trained models on mean average precision. At a small review budget (1% and 2% of traffic) it caught more rare-label comments, but those budgets were not pre-specified, and at 10% and 20% both baselines had higher recall. Every system missed some of its validation targets on test, and I did not establish why.",
    metrics: [{ label: "Mean average precision", value: "0.527 vs 0.677", context: "JEV vs fine-tuned DistilBERT on 63,978 held-out comments; logistic regression scored 0.583." }],
    tags: ["Python", "scikit-learn", "PyTorch", "Hugging Face Transformers", "FastAPI", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "mexico-real-estate-price-analysis",
    title: "Mexico Real Estate Price Analysis",
    coverAlt: "Conceptual illustration of property size versus price and regional variation. Scatter marks and regional cells are illustrative, not observed data or actual geographic boundaries.",
    homepageSummary: "Exploring how size and location relate to residential property prices across Mexico.",
    homepageTags: ["Python", "Pandas", "Seaborn", "Jupyter"],
    shortDescription: "Exploratory analysis of Mexican residential property listings investigating whether property prices are influenced more by property size or location.",
    description: "Exploratory analysis of size, location and residential property prices in Mexico.",
    category: "Data Science",
    featured: false,
    showOnHome: true,
    visible: true,
    order: 2,
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
    order: 3,
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
    order: 4,
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

