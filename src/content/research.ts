import type { ResearchItem } from "@/types/portfolio";

// These are open directions, not completed studies or published research.
// Replace them with specific notebooks, experiments, coursework, papers or preprints
// only when those records exist.
export const labNotes: ResearchItem[] = [
  {
    id: "hateshield", identifier: "LN.01",
    title: "HateShield: Hate Speech Detection for Urdu",
    type: "Current Study", status: "Building",
    shortDescription: "How should hate speech be annotated and detected when a language is written in two scripts and code-switched? Building a corpus in native Urdu and Roman Urdu, writing an annotation guideline from scratch, and designing a multi-task detector around hate type, target, severity and stance toward quoted hate.",
    topics: ["Urdu and Roman Urdu", "Code-switching", "Corpus construction", "Annotation and agreement", "Counter-speech and stance"],
  },
  {
    id: "zero-shot-moderation", identifier: "LN.02",
    title: "Zero-shot moderation with a System One model",
    type: "Experiment", status: "Published",
    shortDescription: "TypeSafe's JEV, a System One model used zero-shot, against logistic regression and DistilBERT on toxic-comment classification, under a frozen protocol. Archived on Zenodo; not peer-reviewed.",
    topics: ["Zero-shot classification", "System One models", "Probability calibration", "Human-review budgets", "Frozen evaluation protocol"],
    date: "Oct 2026",
  },
  {
    id: "wqu-labs", identifier: "LN.03",
    title: "Data Science and Deep Learning Labs, WQU",
    type: "Coursework", status: "Studying",
    shortDescription: "WorldQuant University's project-based Applied Data Science Lab (8 projects) and Deep Learning Fundamentals Lab (two units of 6 projects), both in progress. The path runs from data wrangling, regression and model selection to training neural networks and CNNs in PyTorch.",
    topics: ["Neural networks", "Convolutional networks", "Model selection", "Statistical experiments"],
  },
];

export const labNotesCopy = {
  eyebrow: "04 / LAB NOTES",
  heading: "Current questions.",
  intro: "What I’m building and testing now.",
  status: "Status",
  topics: "Topics",
  link: "Open note",
};
