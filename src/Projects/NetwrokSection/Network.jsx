import React from "react";
import { useState } from "react";
import NetworkDetails from "./NetworkDetails";
import data from "./data.json";
import "./style.css";

function ProjectGrid() {
  const [selected, setSelected] = useState(null);

  const handleClick = (key) => {
    setSelected(data[key]);
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
        <div className="grid grid-cols-5  gap-2 p-4 justify-center ">
          <img
            src={data["TopRight"].image}
            className="w-full col-start-2"
            onClick={() => handleClick("TopRight")}
            alt={data["TopRight"].heading}
          />
          <img
            src={data["TopMiddle"].image}
            className="w-full "
            onClick={() => handleClick("TopMiddle")}
          />
          <img
            src={data["TopLeft"].image}
            className="w-full row-start-1 row-end-3 col-start-4 "
            onClick={() => handleClick("TopLeft")}
          />{" "}
          <img
            src={data["Center"].image}
            className="col-span-2 w-full row-start-2 row-end-4 col-start-2"
            onClick={() => handleClick("Center")}
          />
          <img
            src={data["MiddleLeft"].image}
            className="w-full col-start-4 row-start-3 row-end-5"
            onClick={() => handleClick("MiddleLeft")}
          />{" "}
          <img
            src={data["BottomRight"].image}
            className=" col-start-2 w-full row-start-4 row-end-6"
            onClick={() => handleClick("BottomRight")}
          />
          <img
            src={data["BottomCenter"].image}
            className="w-full row-start-4 row-end-6 col-start-3"
            onClick={() => handleClick("BottomCenter")}
          />
          <img
            src={data["BottomLeft"].image}
            className="w-full  col-start-4 row-start-5 row-end-5 mb-20 "
            onClick={() => handleClick("BottomLeft")}
          />
        </div>
      )}
    </>
  );
}

export default ProjectGrid;
