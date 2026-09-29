import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Certifications } from "@/components/certifications/certifications";
import { Education } from "@/components/education/education";
import { Experience } from "@/components/experience/experience";
import { LabNotes } from "@/components/research/lab-notes";

export default function HomePage() {
  return <><Hero /><Projects /><About /><LabNotes /><Experience /><Education /><Certifications /><Contact /></>;
}
