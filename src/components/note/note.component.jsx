import { useState, useEffect } from "react";
import { NoteArea } from "./note.styles";
import { NoteContainer } from "./note.styles";
import { ContextMenuTrigger } from "react-contextmenu";
import { NoteContextMenu } from "components/note-context-menu/note-menu.component";
import lightOrDark from "utils/contrast";

export const NoteComponent = ({ id, setNoteData, noteData, note, name }) => {
  const [lock, setLock] = useState(note.isLock);
  const [pin, setPin] = useState(note.pin);
  const [colors, setColors] = useState(note.color);
  const [text, setText] = useState(note.textValue);

  const changeText = (e) => {
    const newData = noteData.map((note) => {
      if (note.id === id) {
        note.textValue = e.target.value;
      }
      return note;
    });
    setText(e.target.value);
    setNoteData(newData);
  };

  const [xAndY, setXAndY] = useState(() => {
    const saved = localStorage.getItem(`${name}-xAndY-${id}`);
    const initialValue = JSON.parse(saved);
    return initialValue || { x: 20, y: 20 };
  });

  const [widthAndHeight, setWidthAndHeight] = useState(() => {
    const saved = localStorage.getItem(`${name}-widthAndHeight-${id}`);
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        width: 272,
        height: 272,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem(`${name}-xAndY-${id}`, JSON.stringify(xAndY));
  }, [id, xAndY, name]);

  useEffect(() => {
    localStorage.setItem(
      `${name}-widthAndHeight-${id}`,
      JSON.stringify(widthAndHeight),
    );
  }, [id, widthAndHeight, name]);

  return (
    <>
      <ContextMenuTrigger holdToDisplay={-1} id={`note-${id}`}>
        <NoteContainer
          color={colors}
          minWidth="272"
          minHeight="100"
          maxWidth="350"
          maxHeight="350"
          dragGrid={[30, 30]}
          enableResizing={!lock}
          disableDragging={pin || !lock}
          size={{ width: widthAndHeight.width, height: widthAndHeight.height }}
          position={{ x: xAndY.x, y: xAndY.y }}
          onDragStop={(e, d) => {
            setXAndY({
              x:
                d.x < 0
                  ? 20
                  : d.x > window.innerWidth - widthAndHeight.width
                  ? window.innerWidth - widthAndHeight.width - 20
                  : d.x,
              y: d.y < 0 ? 20 : d.y,
            });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setWidthAndHeight({
              width: ref.style.width,
              height: ref.style.height,
            });
          }}
        >
          {lock ? (
            <NoteArea
              type="text"
              value={text}
              color={colors}
              textColor={lightOrDark(colors)}
              disabled
            />
          ) : (
            <NoteArea
              type="text"
              color={colors}
              textColor={lightOrDark(colors)}
              value={text}
              onChange={(e) => {
                changeText(e);
              }}
            />
          )}
        </NoteContainer>
      </ContextMenuTrigger>
      <NoteContextMenu
        noteId={id}
        setNoteData={setNoteData}
        noteData={noteData}
        lock={lock}
        setLock={setLock}
        pin={pin}
        setPin={setPin}
        setColors={setColors}
        colors={colors}
        name={name}
      />
    </>
  );
};
