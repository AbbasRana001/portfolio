import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { labNotes, labNotesCopy } from "@/content/research";
import type { ResearchItem } from "@/types/portfolio";
import "./lab-notes.css";

function LabNote({ note }: { note: ResearchItem }) {
  return <article className="lab-note" tabIndex={0} aria-labelledby={`lab-note-${note.id}`}>
    <div className="lab-note-meta-row">
      <p className="lab-note-identifier">{note.identifier}</p>
      <p className="lab-note-status"><span>{labNotesCopy.status}</span>{note.status}</p>
    </div>
    <div className="lab-note-main">
      <h3 id={`lab-note-${note.id}`}>{note.title}</h3>
      <p className="lab-note-description">{note.shortDescription}</p>
      {note.topics.length > 0 && <div className="lab-note-topics">
        <p>{labNotesCopy.topics}</p>
        <ul>{note.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      </div>}
    </div>
  </article>;
}

export function LabNotes() {
  return <Section id="lab-notes" aria-labelledby="lab-notes-heading" className="lab-notes-section">
    <SectionHeading id="lab-notes-heading" eyebrow={labNotesCopy.eyebrow} title={labNotesCopy.heading} description={labNotesCopy.intro} />
    <div className="lab-notes-list">
      {labNotes.map(note => <LabNote key={note.id} note={note} />)}
    </div>
  </Section>;
}
