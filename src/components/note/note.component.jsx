import { useState, useEffect } from "react";
import { NoteArea } from "./note.styles";
import { NoteContainer } from "./note.styles";
import { ContextMenuTrigger } from "react-contextmenu";
import { NoteContextMenu } from "components/note-context-menu/note-menu.component";
import lightOrDark from "utils/contrast";

export const NoteComponent = ({ id, color, setNoteData, noteData, note }) => {
  const [lock, setLock] = useState(note.isLock);
  const [pin, setPin] = useState(note.pin);
  const [colors, setColors] = useState(color);

  const [xAndY, setXAndY] = useState(() => {
    const saved = localStorage.getItem(`xAndY-${id}`);
    const initialValue = JSON.parse(saved);
    return initialValue || { x: 20, y: 20 };
  });

  const [widthAndHeight, setWidthAndHeight] = useState(() => {
    const saved = localStorage.getItem(`widthAndHeight-${id}`);
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        width: 272,
        height: 272,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem(`xAndY-${id}`, JSON.stringify(xAndY));
  }, [id, xAndY]);

  useEffect(() => {
    localStorage.setItem(
      `widthAndHeight-${id}`,
      JSON.stringify(widthAndHeight),
    );
  }, [id, widthAndHeight]);

  return (
    <>
      <ContextMenuTrigger holdToDisplay={-1} id={`note-${id}`}>
        <NoteContainer
          color={colors}
          minWidth="272"
          minHeight="100"
          maxWidth="350"
          maxHeight="350"
          dragGrid={[50, 50]}
          enableResizing={!lock}
          disableDragging={pin}
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
              color={colors}
              textColor={lightOrDark(colors)}
              disabled
            />
          ) : (
            <NoteArea
              type="text"
              color={colors}
              textColor={lightOrDark(colors)}
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
      />
    </>
  );
};
