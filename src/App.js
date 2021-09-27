import { useState, useEffect } from "react";
import "App.css";
import { ProjectComponent } from "page/project/project.component";
import { Route } from "react-router-dom";

function App() {
  const [projectPath, setProjectPath] = useState(() => {
    const saved = localStorage.getItem("allProject");
    const initialValue = JSON.parse(saved);
    return initialValue || ["/project-1"];
  });

  useEffect(() => {
    localStorage.setItem("allProject", JSON.stringify(projectPath));
  }, [projectPath]);

  return (
    <div className="App">
      {projectPath.map((path, index) => (
        <Route
          key={path + index}
          path={path}
          exact
          render={() => (
            <ProjectComponent
              name={path}
              pathObj={{ projectPath, setProjectPath }}
            />
          )}
        />
      ))}
    </div>
  );
}

export default App;
