import { ContextMenu } from "react-contextmenu";
import styled from "styled-components";

const NoteMenuContainer = styled(ContextMenu)`
  /* border: 1px solid black; */
  z-index: 1;
  width: 200px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px,
    rgb(67 90 111 / 47%) 0px 8px 10px -4px;
`;

export { NoteMenuContainer };
