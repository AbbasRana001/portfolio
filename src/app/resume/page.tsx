import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ResumeViewer } from "@/components/resume/resume-viewer";
import { profile } from "@/content/profile";
import "./resume.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Abbas Rana, a Computer Science student focused on artificial intelligence, machine learning, and data science.",
};

export default function ResumePage() {
  if (!profile.resumeUrl) return null;

  return <section className="resume-section" aria-labelledby="resume-heading">
    <Container width="narrow">
      <div className="resume-heading-row">
        <h1 id="resume-heading" className="type-heading">Resume</h1>
      </div>
      <ResumeViewer />
    </Container>
  </section>;
}
