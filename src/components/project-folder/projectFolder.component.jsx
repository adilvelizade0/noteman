import React from "react";
import { withRouter } from "react-router";
import {
  ProjectFoldersContainer,
  ProjectFolderAdd,
  ProjectFolderAddIcon,
  ProjectFolder,
  ProjectFolderBlueIcon,
  // ProjectFolderPinkIcon,
} from "./projectFolder.styles";
import OverflowScrolling from "react-overflow-scrolling";

const ProjectFolders = ({ history, pathObj }) => {
  const addProjectFolder = () => {
    const newProjectFolderName = `/project-${pathObj.projectPath.length + 1}`;
    pathObj.setProjectPath([...pathObj.projectPath, newProjectFolderName]);
  };

  return (
    <ProjectFoldersContainer>
      <OverflowScrolling className="overflow-scrolling">
        {pathObj.projectPath.map((path) => (
          <ProjectFolder onClick={() => history.push(`${path}`)}>
            <ProjectFolderBlueIcon />
            <span>{path.split("/")[1]}</span>
          </ProjectFolder>
        ))}
        <ProjectFolderAdd onClick={() => addProjectFolder()}>
          <ProjectFolderAddIcon />
        </ProjectFolderAdd>
      </OverflowScrolling>
    </ProjectFoldersContainer>
  );
};

export default withRouter(ProjectFolders);
