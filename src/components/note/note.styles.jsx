import styled from "styled-components";
import { Rnd } from "react-rnd";

const NoteContainer = styled(Rnd)`
  height: 272px;
  width: 272px;
  background-color: ${(props) => (props.color ? props.color : "#ffd600")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08));
  padding: 15px;
  display: flex;
  justify-content: center;
  transition: background-color 0.5ms ease-in-out;
`;

const NoteArea = styled.textarea`
  font-family: "Permanent Marker", cursive;
  font-size: 24px;
  background-color: ${(props) => (props.color ? props.color : "#ffd600")};
  appearance: none;
  color: ${(props) => (props.textColor === "dark" ? "white" : "black")};
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  resize: none;
  transition: background-color 0.5ms ease-in-out;
`;

export { NoteContainer, NoteArea };
