import React from "react";
import {
  Menu,
  CogIcon,
  PinIcon,
  TrashIcon,
  LockIcon,
  UnlockIcon,
  UnpinIcon,
  SelectMenu,
  Position,
  Dialog,
} from "evergreen-ui";
import { NoteMenuContainer, DeleteMessage } from "./note-menu.styles";
import { MenuItem } from "react-contextmenu";

export const NoteContextMenu = ({
  noteId,
  setNoteData,
  noteData,
  lock,
  setLock,
  pin,
  setPin,
  setColors,
  colors,
  name,
}) => {
  const [selected, setSelected] = React.useState(null);
  const [isShown, setIsShown] = React.useState(false);

  const deleteNote = () => {
    const newData = noteData.filter((note) => note.id !== noteId);
    localStorage.removeItem(`${name}-xAndY-${noteId}`);
    localStorage.removeItem(`${name}-widthAndHeight-${noteId}`);
    setNoteData(newData);
  };

  const lockNote = (e) => {
    const newData = noteData.map((note) => {
      if (note.id === noteId) {
        note.isLock = !lock;
      }
      return note;
    });

    setNoteData(newData);
    setLock(!lock);
  };

  const pinNote = (e) => {
    const newData = noteData.map((note) => {
      if (note.id === noteId) {
        note.pin = !pin;
      }
      return note;
    });

    setNoteData(newData);
    setPin(!pin);
  };

  const onSelectColor = (value) => {
    setSelected(value);
    setColors(value.toLowerCase());

    const newData = noteData.map((note) => {
      if (note.id === noteId) {
        note.color = value.toLowerCase();
      }
      return note;
    });
    console.log(newData);
    setNoteData(newData);
  };

  return (
    <>
      <NoteMenuContainer preventHideOnContextMenu={true} id={`note-${noteId}`}>
        <Menu>
          <Menu.Group>
            <MenuItem
              onClick={(e) => {
                lockNote(e);
              }}
            >
              <Menu.Item icon={!lock ? LockIcon : UnlockIcon}>
                {!lock ? "Lock" : "Unlock"}
              </Menu.Item>
            </MenuItem>

            <MenuItem preventClose={true}>
              <SelectMenu
                width={200}
                height={231}
                closeOnSelect={true}
                title="Select Color"
                options={[
                  "Black",
                  "White",
                  "Red",
                  "Orange",
                  "Purple",
                  "Blue",
                  "Grey",
                ].map((label) => ({ label, value: label }))}
                selected={selected}
                hasFilter={false}
                hasTitle={false}
                position={Position.BOTTOM_LEFT}
                onSelect={(item) => {
                  onSelectColor(item.value);
                }}
              >
                <Menu.Item icon={CogIcon}>Colors</Menu.Item>
              </SelectMenu>
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                pinNote(e);
              }}
            >
              <Menu.Item icon={!pin ? PinIcon : UnpinIcon}>
                {pin ? "Unpin" : "Pin"}
              </Menu.Item>
            </MenuItem>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                setIsShown(true);
              }}
            >
              <Menu.Item icon={TrashIcon} intent="danger">
                Delete...
              </Menu.Item>
            </MenuItem>
          </Menu.Group>
        </Menu>
      </NoteMenuContainer>
      <Dialog
        isShown={isShown}
        hasHeader={false}
        intent="danger"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Delete"
        onConfirm={deleteNote}
        width={400}
        topOffset={200}
      >
        <DeleteMessage>
          Are you sure you want to delete this note?
        </DeleteMessage>
      </Dialog>
    </>
  );
};
