import type { SkillGroup } from "@/types/portfolio";

// Drawn only from owner-supplied projects. Keep each practice group’s purpose,
// process and supporting tools together so the presentation can stay data-driven.
export const skillGroups: SkillGroup[] = [
  {
    id: "explore-analyze", index: "01", title: "Explore & Analyze", emphasis: "primary",
    description: "Turn raw information into questions worth pursuing.",
    process: ["Raw data", "Cleaned data", "Patterns"],
    skills: ["Python", "Pandas", "NumPy", "EDA", "Data Cleaning", "Jupyter"].map(name => ({ name, evidence: "demonstrated" as const })),
  },
  {
    id: "model-evaluate", index: "02", title: "Model & Evaluate", emphasis: "primary",
    description: "Shape features and interpret analytical results.",
    process: ["Features", "Model", "Evaluation"],
    skills: ["Feature Engineering", "Statistics"].map(name => ({ name, evidence: "demonstrated" as const })),
  },
  {
    id: "communicate-evidence", index: "03", title: "Communicate Evidence", emphasis: "primary",
    description: "Translate analysis into clear, useful explanations.",
    process: ["Analysis", "Chart", "Insight"],
    skills: ["Matplotlib", "Seaborn", "Microsoft Excel", "Pivot Tables", "Pivot Charts", "Power Pivot", "DAX", "Dashboard Design"].map(name => ({ name, evidence: "demonstrated" as const })),
  },
  {
    id: "build-ship", index: "04", title: "Build & Ship", emphasis: "supporting",
    description: "Move working code toward a running service.",
    process: ["Code", "Container", "CI/CD", "Cloud"],
    skills: ["FastAPI", "Pydantic", "pytest", "Docker", "Docker Compose", "GitHub Actions", "CodeQL", "Docker Hub", "AWS EC2", "Nginx", "systemd"].map(name => ({ name, evidence: "demonstrated" as const })),
  },
];

export const skillsCopy = {
  eyebrow: "04 / PRACTICE",
  heading: "How I work.",
  intro: "A map of the practices I am building through, and the tools that support each one.",
  empty: "Practice areas will appear as verified skills are added.",
};
