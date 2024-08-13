import React from "react";

const projects = [
  {
    image: "/assets/Projects/NetworkSection/TopLeft.svg",
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
  },
  {
    image: "/assets/Projects/NetworkSection/TopMiddle.svg",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
  {
    image: "/assets/Projects/NetworkSection/TopRight.svg",
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
  },
  {
    image: "/assets/Projects/NetworkSection/MiddleLeft.svg",
    gridColumn: "1 / 2",
    gridRow: "2 / 4",
  },
  {
    image: "/assets/Projects/NetworkSection/Center.svg",
    gridColumn: "2 / 4",
    gridRow: "2 / 4",
  },
  {
    image: "/assets/Projects/NetworkSection/BottomLeft.svg",
    gridColumn: "1 / 2",
    gridRow: "4 / 5",
  },
  {
    image: "/assets/Projects/NetworkSection/BottomCenter.svg",
    gridColumn: "2 / 3",
    gridRow: "4 / 5",
  },
  {
    image: "/assets/Projects/NetworkSection/BottomRight.svg",
    gridColumn: "3 / 4",
    gridRow: "4 / 5",
  },
];

function ProjectGrid() {
  return (
    <div className="grid grid-cols-3  gap-4 p-4">
      <img
        src="/assets/Projects/NetworkSection/TopRight.svg"
        className="w-full"
      />

      <img
        src="/assets/Projects/NetworkSection/TopMiddle.svg "
        className="w-full"
      />
      <img
        src="/assets/Projects/NetworkSection/TopLeft.svg"
        className="w-full row-start-1 col-start-3 row-end-3"
      />

      <img
        src="/assets/Projects/NetworkSection/Center.svg"
        className="col-span-2 w-full row-start-2 row-end-4"
      />
      <img
        src="/assets/Projects/NetworkSection/MiddleLeft.svg"
        className="w-full col-start-3 row-start-3"
      />
      <img
        src="/assets/Projects/NetworkSection/BottomRight.svg"
        className="w-full row-start-4 row-end-5 "
      />
    </div>
  );
}

export default ProjectGrid;
