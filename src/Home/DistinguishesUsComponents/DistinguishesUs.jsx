import React, { useState } from "react";
import LogoUs from "/assets/Home/DistinguishesUsSection/LogoUs.svg";
import BackgroundOrangeColor from "/assets/Home/DistinguishesUsSection/BackgroundOrangeColor.svg";
import gsap from "gsap";

//import JSON files
import LensesAndDimensionObj from "./LensesAndDimension.json";
import featuresObj from "./features.json";
import internalValuesObj from "./internalValues.json";

function DistinguishesUs() {

  const [cards, setCards] = useState(null);
  const [lensesAndDimension, setLensesAndDimension] = useState([...LensesAndDimensionObj,]);
  const [features, setFeatures] = useState([...featuresObj]);
  const [internalValues, setInternalValues] = useState([...internalValuesObj]);

  const lensesAndDimensionsHandle = () => {
    setCards("LensesAnd_dimensions");
  };

  const featuresHandle = () => {
    setCards("features");
  };

  const internalValuesHandle = () => {
    setCards("Internal_values");
  };

  const cardsHandle = () => {
    switch (cards) {
      case "LensesAnd_dimensions":
        return "LensesAnd_dimensions";
      case "features":
        return "features";
      case "Internal_values":
        return "Internal_values";
    }
  };

  // const responsivePageHandle = () => {
  //       if(){
  //         return lgLeft
  //       }
  // }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-[700] text-[36px] text-[#9D6636] mb-10">مايميزنا</h1>

      <div className="lg:h-[718.51px] lg:w-[1142.89px] h-full flex flex-col justify-start lg:justify-center items-center relative lg:mt-[-90px] ">
        {/*nead break it *****DONE****************************************************************************************************************************************************************************************/}
        <div className="z-10 font-[400] text-[22px] md:font-[400] md:text-[28px]">
          <button
            onClick={() => lensesAndDimensionsHandle()}
            className="ml-10 text-[#8080808C] focus:text-[#BE894A] hover:text-[#BE894A]"
          >
            عدسات/ أبعاد
          </button>
          <button
            onClick={() => featuresHandle()}
            className="ml-10 text-[#8080808C] focus:text-[#BE894A] hover:text-[#BE894A]"
          >
            سمات
          </button>
          <button
            onClick={() => internalValuesHandle()}
            className="text-[#8080808C] focus:text-[#BE894A] hover:text-[#BE894A]"
          >
            القيم الداخلية
          </button>
        </div>

        {/*nead break it *******Done**************************************************************************************************************************************************************************************/}
        <div
          className={` relative shadow-lg w-[190px] h-[190px] md:w-[415.91px] md:h-[415.91px] border-[11px] rounded-full mt-[50px] flex justify-center items-center bg-white`}
        >
          <img
            src={LogoUs}
            alt="شعار دار الرحمة"
            className="w-[100px] h-[200px] md:w-[278.62px] md:h-[172.95px] "
          />
        </div>

        {/*nead break it *********************************************************************************************************************************************************************************************/}
        {cardsHandle() === "LensesAnd_dimensions"
          ? lensesAndDimension.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`animate-bounce z-10 shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute`}
                  style={{
                    backgroundColor: `${el.backGroundColor}`,
                    top: `${el.lgTop}px`,
                    left: `${el.lgLeft}px`,
                    rotate: `${el.rotation}`,
                    animationDuration: `${el.duration}s`,
                  }}
                >
                  <p style={{ color: `${el.textColor}` }}>{el.text}</p>
                </div>
              );
            })
          : null}

        {cardsHandle() === "features"
          ? features.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`animate-bounce z-10 shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute`}
                  style={{
                    backgroundColor: `${el.backGroundColor}`,
                    top: `${el.lgTop}px`,
                    left: `${el.lgLeft}px`,
                    rotate: `${el.rotation}`,
                    animationDuration: `${el.duration}s`,
                  }}
                >
                  <p style={{ color: `${el.textColor}` }}>{el.text}</p>
                </div>
              );
            })
          : null}

        {cardsHandle() === "Internal_values"
          ? internalValues.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`animate-bounce z-10 shadow-md border-1 rounded-full py-[6px] px-[20px] absolute md`}
                  style={{
                    backgroundColor: `${el.backGroundColor}`,
                    top: `${el.lgTop}px`,
                    left: `${el.lgLeft}px`,
                    rotate: `${el.rotation}`,
                    animationDuration: `${el.duration}s`,
                  }}
                >
                  <p style={{ color: `${el.textColor}` }}>{el.text}</p>
                </div>
              );
            })
          : null}
      </div>
      {/*nead break it *********************************************************************************************************************************************************************************************/}

      <div className="absolute left-0 z-0">
        <img src={BackgroundOrangeColor} alt="" />
      </div>
    </div>
  );
}

export default DistinguishesUs;