import "App.css";
import { useState, useEffect } from "react";
import { NoteComponent } from "components/note/note.component";

function App() {
  const [noteData, setNoteData] = useState(() => {
    const saved = localStorage.getItem("noteData");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          id: 1,
          color: "#FF634E",
          textValue: "Hi My Name is Adil",
          pin: false,
          isLock: true,
        },
        {
          id: 2,
          color: "#ffd600",
          textValue: "Hi My Name is Steve",
          pin: false,
          isLock: true,
        },
        {
          id: 3,
          color: "#fff",
          textValue: "Hi My Name is Jack",
          pin: false,
          isLock: true,
        },
        {
          id: 4,
          color: "#222",
          textValue: "Hi My Name is Jack",
          pin: false,
          isLock: true,
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("noteData", JSON.stringify(noteData));
  }, [noteData]);

  return (
    <>
      <div className="App">
        {noteData.map((note) => (
          <NoteComponent
            key={note.id}
            id={note.id}
            color={note.color}
            setNoteData={setNoteData}
            noteData={noteData}
            note={note}
          />
        ))}
      </div>
    </>
  );
}

export default App;
