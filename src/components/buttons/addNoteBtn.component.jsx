import { Button, AnnotationIcon, Popover, Pane, Position } from "evergreen-ui";
import React from "react";
import styled from "styled-components";

const AddBtn = styled(Button)`
  position: fixed;
  top: 30px;
  right: 20px;
`;

const ColorBox = styled.span`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 50%;
  border: 2px solid #cfdff8;
  cursor: pointer;
  margin: 3px;
`;

export const AddNoteBtn = ({ noteData, setNoteData }) => {
  const addNewNote = (color) => {
    const newNote = {
      id: noteData.length + 1,
      color,
      textValue: "",
      pin: false,
      isLock: true,
    };
    const newNoteData = [...noteData, newNote];
    setNoteData(newNoteData);
  };
  return (
    <>
      <Popover
        isShown={noteData.length >= 5 ? false : null}
        content={
          <Pane
            height={50}
            display="flex"
            alignItems="center"
            padding={10}
            justifyContent="space-around"
          >
            <ColorBox
              color="orange"
              onClick={() => {
                addNewNote("#FFA500");
              }}
            />
            <ColorBox
              color="black"
              onClick={() => {
                addNewNote("#000000");
              }}
            />
            <ColorBox
              color="red"
              onClick={() => {
                addNewNote("#FF0000");
              }}
            />
            <ColorBox
              color="purple"
              onClick={() => {
                addNewNote("#800080");
              }}
            />
            <ColorBox
              color="blue"
              onClick={() => {
                addNewNote("#0000FF");
              }}
            />
            <ColorBox
              color="grey"
              onClick={() => {
                addNewNote("#808080");
              }}
            />
            <ColorBox
              color="white"
              onClick={() => {
                addNewNote("#FFFFFF");
              }}
            />
          </Pane>
        }
        position={Position.BOTTOM_RIGHT}
      >
        <AddBtn
          size="large"
          appearance="primary"
          isActive={noteData.length >= 5 ? false : true}
          iconBefore={AnnotationIcon}
        >
          Add Note
        </AddBtn>
      </Popover>
    </>
  );
};
