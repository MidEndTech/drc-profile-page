import React from "react";
import { useState } from "react";
import NetworkDetails from "./NetworkDetails";
import data from "./data.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
        <div className="grid grid-cols-5 gap-4 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center ">
          <div className="relative w-full col-start-2">
            <img src={data["TopRight"].image} className="w-full" />
            <div
              className="absolute  cursor-pointer inset-0 bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              onClick={() => handleClick("TopRight")}
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
          <div className="relative w-full">
            <img src={data["TopMiddle"].image} className="w-full " />
            <div
              onClick={() => handleClick("TopMiddle")}
              className="absolute inset-0 rounded-3xl cursor-pointer bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>

          <div className="relative w-full row-start-1 row-end-3 col-start-4">
            <img
              src={data["TopLeft"].image}
              className="w-full "
              alt={data["TopLeft"].heading}
            />
            <div
              onClick={() => handleClick("TopLeft")}
              className="absolute rounded-3xl inset-0 bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
          <div className="relative w-full col-span-2 row-start-2 row-end-4 col-start-2">
            <img src={data["Center"].image} className="w-full " />

            <div
              onClick={() => handleClick("Center")}
              className="absolute cursor-pointer rounded-3xl inset-0 bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
          <div className="relative w-full col-start-4 row-start-3 row-end-5">
            <img
              src={data["MiddleLeft"].image}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              onClick={() => handleClick("MiddleLeft")}
              className="absolute inset-0 bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>

          <div className="relative w-full col-start-2 row-start-4 row-end-6">
            <img
              src={data["BottomRight"].image}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              onClick={() => handleClick("BottomRight")}
              className="absolute inset-0 rounded-3xl cursor-pointer bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
          <div className="relative w-full row-start-4 row-end-6 col-start-3">
            <img
              src={data["BottomCenter"].image}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              className="absolute inset-0 rounded-3xl bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick("BottomCenter")}
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
          <div className="relative w-full col-start-4 row-start-5 row-end-5 ">
            <img src={data["BottomLeft"].image} className="w-full h-full" />
            <div
              onClick={() => handleClick("BottomLeft")}
              className="absolute cursor-pointer rounded-3xl inset-0 bg-dark-green/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              {" "}
              <FaArrowLeft
                size={30}
                className="text-white absolute border-2 p-1 border-white rounded-full flex items-start  top-10  left-10 "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectGrid;
