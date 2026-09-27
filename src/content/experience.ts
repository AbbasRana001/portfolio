import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "digisync-ai-machine-learning-intern",
    role: "AI & Machine Learning Intern",
    organization: "DigiSync Technologies",
    workArrangement: "Remote",
    period: "Jul 2026 — Present",
    descriptionBullets: [
      "Building and structuring RESTful APIs using FastAPI, implementing Pydantic-based validation and async routing for ML-ready backend services.",
      "Containerizing applications with Docker and assisting with cloud deployment workflows on AWS, gaining hands-on exposure to production deployment and post-deployment monitoring practices.",
    ],
    visible: true,
  },
  {
    id: "eximus-computer-science-educator",
    role: "Computer Science Educator",
    organization: "Eximus Education",
    workArrangement: "Part-time, Remote",
    period: "Dec 2025 — Present",
    descriptionBullets: [
      "Helped students under examination preparation achieve top-band grades — A* at A-Level and Grade 9 at GCSE — through structured lesson delivery and targeted exam-technique coaching.",
      "Design lesson plans aligned to UK examination board standards, incorporating tailored exercises to address individual knowledge gaps and build exam confidence.",
    ],
    visible: true,
  },
  {
    id: "self-employed-online-tutor",
    role: "Online Tutor",
    organization: "Self-employed",
    workArrangement: "Remote",
    period: "Jan 2024 — Present",
    descriptionBullets: [
      "Helped all 5 Cambridge IGCSE Computer Science students achieve A* through targeted exam preparation, past-paper practice, and one-to-one conceptual coaching.",
    ],
    visible: true,
  },
];
