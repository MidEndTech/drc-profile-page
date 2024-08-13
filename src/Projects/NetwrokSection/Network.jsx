import React from "react";
import { useState } from "react";
import NetworkDetails from "./NetworkDetails";
import data from './data.json'

function ProjectGrid() {
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    setSelected(data(e));
  };

  return (
    <>
      {selected ? (
        <NetworkDetails
          image={selected.image}
          heading={selected.heading}
          text={selected.text}
        />
      ) : (
        <div className="grid grid-cols-3  gap-4 p-4">
          <img
            src={data["TopRight"].image}
            className="w-full "
            onClick={() => handleClick("TopRight")}
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
            className="w-full col-start-3 row-start-3 row-end-5"
          />
          <img
            src="/assets/Projects/NetworkSection/BottomRight.svg"
            className="col-span-1 col-start-1 w-full row-start-4 row-end-6"
          />
          <img
            src="/assets/Projects/NetworkSection/BottomCenter.svg"
            className="max-w-full  row-start-4 row-end-6 "
          />
          <img
            src="/assets/Projects/NetworkSection/BottomLeft.svg"
            className="w-full col-start-3 row-start-5 row-end-6 mb-20"
          />
        </div>
      )}
    </>
  );
}

export default ProjectGrid;
