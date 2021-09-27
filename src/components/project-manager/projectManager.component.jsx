import ProjectFolders from "components/project-folder/projectFolder.component";
import {
  SideSheet,
  Position,
  MenuOpenIcon,
  MenuClosedIcon,
} from "evergreen-ui";
import { useState } from "react";
import { ProjectManagerBtn } from "./projectManager.styles";

export const ProjectManagerComponent = ({ pathObj, name }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <SideSheet
        position={Position.BOTTOM}
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
      >
        <ProjectFolders pathObj={pathObj} />
      </SideSheet>
      <ProjectManagerBtn
        size="large"
        icon={isShown ? MenuClosedIcon : MenuOpenIcon}
        onClick={() => setIsShown(true)}
      />
    </div>
  );
};
