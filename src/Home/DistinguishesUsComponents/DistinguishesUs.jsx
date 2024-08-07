import React, { useState } from "react";
import LogoUs from "/assets/DistinguishesUsSection/LogoUs.svg";
import BackgroundOrangeColor from "/assets/DistinguishesUsSection/BackgroundOrangeColor.svg";

//import JSON files
import LensesAndDimensionObj from "./LensesAndDimension.json";
import featuresObj from "./features.json";
import internalValuesObj from "./internalValues.json";

function DistinguishesUs() {
  const [fog, setFog] = useState(null);

  const [lensesAndDimension, setLensesAndDimension] = useState([
    ...LensesAndDimensionObj,
  ]);

  const [features, setFeatures] = useState([...featuresObj]);

  const [internalValues, setInternalValues] = useState([...internalValuesObj]);

  const lensesAndDimensionsHandle = () => {
    setFog("LensesAnd_dimensions");
  };

  const featuresHandle = () => {
    setFog("features");
  };

  const internalValuesHandle = () => {
    setFog("Internal_values");
  };

  const fogHandle = () => {
    switch (fog) {
      case "LensesAnd_dimensions":
        return "LensesAnd_dimensions";
      case "features":
        return "features";
      case "Internal_values":
        return "Internal_values";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-[700] text-[36px] text-[#9D6636] z-10">مايميزنا</h1>

      <div className="z-10 font-[600] text-[22px] md:font-[600] md:text-[28px] flex flex-row justify-around mt-10">
        <button
          onClick={() => lensesAndDimensionsHandle()}
          className="ml-10 focus:text-[#BE894A] hover:text-[#BE894A]"
        >
          عدسات/ أبعاد
        </button>
        <button
          onClick={() => featuresHandle()}
          className="ml-10 focus:text-[#BE894A] hover:text-[#BE894A]"
        >
          سمات
        </button>
        <button
          onClick={() => internalValuesHandle()}
          className="focus:text-[#BE894A] hover:text-[#BE894A]"
        >
          القيم الداخلية
        </button>
      </div>

      <div
        onClick={() => setFog(null)}
        className={`${fogHandle()} z-20 relative shadow-2xl w-[350px] h-[350px] md:w-[415.91px] md:h-[415.91px] border-[11px] rounded-full mt-10 flex justify-center items-center bg-white`}
      >
        <img src={LogoUs} alt="" />
      </div>

      {fogHandle() === "LensesAnd_dimensions"
        ? lensesAndDimension.map((el, index) => {
            return (
              <div
                key={index}
                className={`animate-bounce z-10 rotate-[${el.rotation}] shadow-xl border-1 rounded-full flex justify-center items-center bg-[${el.backGroundColor}]/10 py-[6px] px-[20px] absolute top-[${el.top}] left-[${el.left}]`}
              >
                <p className={`text-[${el.textColor}]`}>{el.text}</p>
              </div>
            );
          })
        : null}

      {fogHandle() === "features"
        ? features.map((el, index) => {
            return (
              <div
                key={index}
                className={`animate-bounce z-10 rotate-[${el.rotation}] shadow-xl border-1 rounded-full flex justify-center items-center bg-[${el.backGroundColor}]/10 py-[6px] px-[20px] absolute top-[${el.top}] left-[${el.left}]`}
              >
                <p className={`text-[${el.textColor}]`}>{el.text}</p>
              </div>
            );
          })
        : null}

      {fogHandle() === "Internal_values"
        ? internalValues.map((el, index) => {
            return (
              <div
                key={index}
                className={`animate-bounce z-40 rotate-[${el.rotation}] shadow-xl border-1 rounded-full flex justify-center items-center bg-[${el.backGroundColor}]/10 py-[6px] px-[20px] absolute top-[${el.top}] left-[${el.left}]`}
              >
                <p className={`text-[${el.textColor}]`}>{el.text}</p>
              </div>
            );
          })
        : null}

      <div className="absolute left-0 z-0">
        <img src={BackgroundOrangeColor} alt="" />
      </div>
    </div>
  );
}

export default DistinguishesUs;
