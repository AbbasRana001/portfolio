import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { About } from "@/components/about/about";
import { LabNotes } from "@/components/research/lab-notes";

export default function HomePage() {
  return <><Hero /><Projects /><About /><LabNotes /></>;
}
