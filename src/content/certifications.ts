import type { Certification } from "@/types/portfolio";

// TODO: Add only certifications you have earned.
export const certifications: Certification[] = [
  {
    id: "machine-learning-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI · Stanford Online",
    issueDate: "September 30, 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/ORJC3QPZ53TS",
    image: {
      src: "/certifications/machine-learning-specialization.png",
      alt: "Certificate for Machine Learning Specialization issued by DeepLearning.AI and Stanford Online.",
      width: 2100,
      height: 1600,
    },
    certificateFile: "/certifications/machine-learning-specialization.pdf",
    order: 1,
    visible: true,
  },
  {
    id: "unsupervised-learning_recommenders_reinforcement-learning",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI · Stanford Online",
    issueDate: "September 30, 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/O1W2IZ229RZI",
    image: {
      src: "/certifications/unsupervised-learning_recommenders_reinforcement-learning.png",
      alt: "Certificate for Unsupervised Learning, Recommenders, Reinforcement Learning issued by DeepLearning.AI and Stanford Online.",
      width: 2200,
      height: 1700,
    },
    certificateFile: "/certifications/unsupervised-learning_recommenders_reinforcement-learning.pdf",
    order: 2,
    visible: true,
  },
  {
    id: "advanced-learning-algorithms",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI · Stanford Online",
    issueDate: "September 19, 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LCOXE3TP6A4X",
    image: {
      src: "/certifications/advanced-learning-algorithms.png",
      alt: "Certificate for Advanced Learning Algorithms issued by DeepLearning.AI and Stanford Online.",
      width: 2200,
      height: 1700,
    },
    certificateFile: "/certifications/advanced-learning-algorithms.pdf",
    order: 3,
    visible: true,
  },
  {
    id: "supervised-machine-learning-regression-classification",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI · Stanford Online",
    issueDate: "February 3, 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/QG680FKWFVNO",
    image: {
      src: "/certifications/supervised-machine-learning.png",
      alt: "Certificate for Supervised Machine Learning: Regression and Classification issued by DeepLearning.AI and Stanford Online.",
      width: 2200,
      height: 1700,
    },
    certificateFile: "/certifications/supervised-machine-learning.pdf",
    order: 4,
    visible: true,
  },
];

export function getVisibleCertifications() {
  return certifications.filter(certification => certification.visible).toSorted((left, right) => left.order - right.order);
}

export const certificationsCopy = {
  eyebrow: "07 / CERTIFICATIONS",
  heading: "Certifications",
  verify: "Verify credential",
  viewCertificate: "View certificate",
  issued: "Issued",
  credentialId: "Credential ID",
};
