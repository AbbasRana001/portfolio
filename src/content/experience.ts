import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "digisync-ai-machine-learning-intern",
    role: "AI & ML Engineering Intern",
    organization: "DigiSync Technologies",
    workArrangement: "Full-time, Remote",
    period: "Jul 2026 — Oct 2026",
    descriptionBullets: [
      "●	Trained and tuned classification models (Random Forest, Gradient Boosting, Logistic Regression) via scikit-learn pipelines and GridSearchCV, evaluating across Stratified k-Fold splits using ROC-AUC and Macro-F1.",
      "●  Built a RESTful FastAPI service with async routing, Pydantic validation, and pytest suites, automating containerized CI/CD delivery to AWS EC2 via Docker and GitHub Actions (Ruff, CodeQL, SSH).",
      "●  Configured and hardened the production Linux server with an Nginx HTTPS reverse proxy, UFW security rules, systemd service units, and automated cron health monitoring.",
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
      "●	Instruct AQA A-Level Computer Science students in algorithms, data structures, and programming, guiding a 6-student cohort to 100% A*/A attainment (5 A*, 1 A).",
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
      "●	Mentor students in Cambridge IGCSE Computer Science and A-Level Information Technology via one-to-one conceptual coaching and exam preparation, achieving 100% A* attainment (4 IGCSE CS, 1 A-Level IT)."
    ],
    "visible": true
  },
];
