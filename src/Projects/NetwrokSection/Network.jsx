import React from "react";

const projects = [
  { image: "/assets/Projects/NetworkSection/TopLeft.svg" },
  { image: "/assets/Projects/NetworkSection/TopMiddle.svg" },
  { image: "/assets/Projects/NetworkSection/TopRight.svg" },
  { image: "/assets/Projects/NetworkSection/MiddleLeft.svg" },
  { image: "/assets/Projects/NetworkSection/Center.svg" },
  { image: "/assets/Projects/NetworkSection/BottomLeft.svg" },
  { image: "/assets/Projects/NetworkSection/BottomCenter.svg" },
  { image: "/assets/Projects/NetworkSection/BottomRight.svg" },
];

function ProjectGrid() {
  return (
    <div className="grid  gap-4 p-4 ">
      <img src="/assets/Projects/NetworkSection/TopLeft.svg" className="col-span-1" />
      <img src="/assets/Projects/NetworkSection/TopMiddle.svg" />
      <img src="/assets/Projects/NetworkSection/TopRight.svg" />
      <img src="/assets/Projects/NetworkSection/MiddleLeft.svg" />
      <img src="/assets/Projects/NetworkSection/Center.svg" />
      <img src="/assets/Projects/NetworkSection/BottomLeft.svg" />
      <img src="/assets/Projects/NetworkSection/BottomCenter.svg" />
      <img src="/assets/Projects/NetworkSection/BottomRight.svg" />
    </div>
  );
}

export default ProjectGrid;
