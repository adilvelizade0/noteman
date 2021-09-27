import { useState, useEffect } from "react";
import { AddNoteBtn } from "components/buttons/addNoteBtn.component";
import { NoteComponent } from "components/note/note.component";
import { ProjectManagerComponent } from "components/project-manager/projectManager.component";

export const ProjectComponent = ({ name, pathObj }) => {
  const [noteData, setNoteData] = useState(() => {
    const saved = localStorage.getItem(`${name}-noteData`);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem(`${name}-noteData`, JSON.stringify(noteData));
  }, [noteData, name]);

  return (
    <>
      <AddNoteBtn noteData={noteData} setNoteData={setNoteData} />
      {noteData.map((note) => (
        <NoteComponent
          key={note.id}
          id={note.id}
          setNoteData={setNoteData}
          noteData={noteData}
          note={note}
          name={name}
        />
      ))}
      <ProjectManagerComponent pathObj={pathObj} name={name} />
    </>
  );
};
