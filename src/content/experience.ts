import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "digisync-ai-machine-learning-intern",
    role: "AI & ML Engineering Intern",
    organization: "DigiSync Technologies",
    workArrangement: "Full-time, Remote",
    period: "Jul 2026 — Oct 2026",
    descriptionBullets: [
      "●	Trained and tuned ensemble and classification models (Random Forest, Gradient Boosting, Logistic Regression) in scikit-learn using automated preprocessing pipelines and GridSearchCV, benchmarking via Stratified k-Fold cross-validation, ROC-AUC, and Macro-F1.",
      "●  Built a FastAPI service with async routing, Pydantic validation, and pytest suites, automating containerized CI/CD delivery to AWS EC2 via Docker and GitHub Actions (Ruff, CodeQL, SSH).",
      "●  Hardened the production AWS EC2 Linux host with an Nginx HTTPS reverse proxy, systemd service management, UFW firewall rules, and automated cron health monitoring",
    ],
    visible: true,
  },
  {
    "id": "eximus-computer-science-educator",
    "role": "Computer Science Educator",
    "organization": "Eximus Education (London, UK)",
    "workArrangement": "Part-time, Remote",
    "period": "Dec 2025 — Present",
    "descriptionBullets": [
      "●	Instruct AQA A-Level and GCSE Computer Science students in algorithms, data structures, and programming, guiding a 6-student cohort to 5 A* and 1 A grades (100% A*/A attainment).",
      "●	Design lesson plans, pseudocode walkthroughs, and diagnostic exercises tailored to UK examination board standards to address individual knowledge gaps and strengthen algorithmic problem-solving."
    ],
    "visible": true
  },
  {
    "id": "self-employed-online-tutor",
    "role": "Independent Computer Science & IT Tutor",
    "organization": "Self-Employed",
    "workArrangement": "Remote",
    "period": "Jan 2024 — Present",
    "descriptionBullets": [
      "●	Mentor international students across Cambridge IGCSE Computer Science and International A-Level Information Technology via one-to-one conceptual coaching and past-paper drills, maintaining a 100% A* achievement record (4 IGCSE CS, 1 A-Level IT)."
    ],
    "visible": true
  },
];
