import React from "react";

const projects = [
  { image: "/assets/Projects/NetworkSection/TopLeft.svg", gridColumn: "1 / 2", gridRow: "1 / 2" },
  { image: "/assets/Projects/NetworkSection/TopMiddle.svg", gridColumn: "2 / 3", gridRow: "1 / 2" },
  { image: "/assets/Projects/NetworkSection/TopRight.svg", gridColumn: "3 / 4", gridRow: "1 / 2" },
  { image: "/assets/Projects/NetworkSection/MiddleLeft.svg", gridColumn: "1 / 2", gridRow: "2 / 4" },
  { image: "/assets/Projects/NetworkSection/Center.svg", gridColumn: "2 / 4", gridRow: "2 / 4" },
  { image: "/assets/Projects/NetworkSection/BottomLeft.svg", gridColumn: "1 / 2", gridRow: "4 / 5" },
  { image: "/assets/Projects/NetworkSection/BottomCenter.svg", gridColumn: "2 / 3", gridRow: "4 / 5" },
  { image: "/assets/Projects/NetworkSection/BottomRight.svg", gridColumn: "3 / 4", gridRow: "4 / 5" },
];

function ProjectGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 auto-rows-min">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg"
          style={{
            gridColumn: project.gridColumn,
            gridRow: project.gridRow,
          }}
        >
          <img
            src={project.image}
            alt={project.title || `Project Image ${index + 1}`}
            className=" object-cover rounded-lg"
          />
          {project.title && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <p className="text-white text-xl font-bold text-center">
                {project.title}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
