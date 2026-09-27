import type { ResearchItem } from "@/types/portfolio";

// These are open directions, not completed studies or published research.
// Replace them with specific notebooks, experiments, coursework, papers or preprints
// only when those records exist.
export const labNotes: ResearchItem[] = [
  {
    id: "machine-learning-direction",
    identifier: "ML.01",
    title: "Machine Learning",
    type: "Research Interest",
    status: "Exploring",
    shortDescription: "How can feature choices and evaluation shape a useful baseline model?",
    topics: ["Feature Engineering", "Statistics"],
  },
  {
    id: "data-science-direction",
    identifier: "DS.02",
    title: "Data Science",
    type: "Research Interest",
    status: "Exploring",
    shortDescription: "How can cleaning and exploration make data ready for clear, defensible analysis?",
    topics: ["Data Cleaning", "EDA", "Matplotlib", "Seaborn"],
  },
  {
    id: "artificial-intelligence-direction",
    identifier: "AI.03",
    title: "Artificial Intelligence",
    type: "Research Interest",
    status: "Exploring",
    shortDescription: "Which focused AI problem should become the next area of study?",
    topics: ["Problem Framing"],
  },
];

export const labNotesCopy = {
  eyebrow: "04 / LAB NOTES",
  heading: "Current questions.",
  intro: "Working directions, research interests and experiments still taking shape.",
  status: "Status",
  topics: "Topics",
  link: "Open note",
};
