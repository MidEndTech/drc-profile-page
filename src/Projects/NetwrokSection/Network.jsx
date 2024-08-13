import React, { useState } from "react";
import projectData from './data.json'; 
import ProjectDetail from "./NetwroksDetail"; 

function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (imageKey) => {
    setSelectedProject(projectData[imageKey]);
  };

  return (
    <div>
      {selectedProject ? (
        <ProjectDetail
          image={selectedProject.image}
          heading={selectedProject.heading}
          text={selectedProject.text}
        />
      ) : (
        <div className="gap-4 p-4 grid grid-cols-3">
          {Object.keys(projectData).map((key) => (
            <div
              key={key}
              className="relative group cursor-pointer"
              onClick={() => handleClick(key)}
            >
              <img
                src={projectData[key].image}
                alt={key}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-dark-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGrid;
