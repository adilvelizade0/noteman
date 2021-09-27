import styled from "styled-components";
import AddFolder from "../../assets/addFolder.svg";
import BlueFolder from "../../assets/bluFolder.svg";
import PinkFolder from "../../assets/pinkFolder.svg";

const ProjectFoldersContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const ProjectFolderAdd = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12),
    0px 4px 8px rgba(14, 31, 53, 0.08);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 20px;
  cursor: pointer;
`;

const ProjectFolder = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12),
    0px 4px 8px rgba(14, 31, 53, 0.08);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  span {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: 12px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const ProjectFolderBlueIcon = styled.span`
  width: 100%;
  height: 100%;
  background: url(${BlueFolder}) center no-repeat;
`;

const ProjectFolderPinkIcon = styled.span`
  width: 100%;
  height: 100%;
  background: url(${PinkFolder}) center no-repeat;
`;

const ProjectFolderAddIcon = styled.span`
  width: 100%;
  height: 100%;
  background: url(${AddFolder}) center no-repeat;
`;

export {
  ProjectFoldersContainer,
  ProjectFolderAdd,
  ProjectFolderAddIcon,
  ProjectFolder,
  ProjectFolderBlueIcon,
  ProjectFolderPinkIcon,
};
