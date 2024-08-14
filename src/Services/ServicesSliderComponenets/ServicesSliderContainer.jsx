import React, { useState } from "react";
import right from "/assets/Home/AssociationSection/Variant5.svg";
import left from "/assets/Home/AssociationSection/Variant6.svg";
import CardInfo from "./CardInfo";
import blueOrange from "/assets/Services/ServicesSliderSection/BackgroundOrangeS.svg"

function ServicesSliderContainer() {
  const [indexCounter, setIndexCounter] = useState(0);
  return (
    <>
      <div
        key={indexCounter}
        className=" mt-10 lg:mt-20 flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:items-center"
      >
        <CardInfo index={indexCounter} />
      </div>

      <div className="flex justify-between mx-2 relative hover:opacity-4 bottom-[550px] lg:justify-between lg:bottom-[360px] lg:mx-[5%]">
        <img
          onClick={() => {
            setIndexCounter((prev) => prev + 1);
          }}
          src={right}
          alt=""
          className={`z-10 cursor-pointer hover:opacity-4 w-12 ${
            indexCounter === 7 && "invisible"
          }`}
        />
        <img
          onClick={() => {
            setIndexCounter((prev) => prev - 1);
          }}
          src={left}
          alt=""
          className={`z-10 cursor-pointer hover:opacity-4 w-12 lg:absolute lg:left-20 ${
            indexCounter === 0 && "invisible"
          }`}
        />
      </div>

      <div className="z-0 absolute left-0 top-[900px]">
        <img src={blueOrange} alt="" />
      </div>
    </>
  );
}

export default ServicesSliderContainer;
