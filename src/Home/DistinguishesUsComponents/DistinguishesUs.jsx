import React, { useState } from "react";
import LogoUs from "/assets/DistinguishesUsSection/LogoUs.svg";
import BackgroundOrangeColor from "/assets/DistinguishesUsSection/BackgroundOrangeColor.svg";

function DistinguishesUs() {
  const [fog, setFog] = useState(null);

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
        return "blur-sm";
      case "features":
        return "blur-md";
      case "Internal_values":
        return "blur-lg";
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

      <div  onClick={() => setFog(null)} className={`${fogHandle()} relative shadow-2xl w-[350px] h-[350px] md:w-[415.91px] md:h-[415.91px] border-[11px] rounded-full mt-10 flex justify-center items-center`}>
        <img src={LogoUs} alt="" />

        
      </div>

      <div className="mt-10 rotate-[4.4deg] shadow-xl border-1 rounded-full flex justify-center items-center bg-[#2C4D51]/10 py-[6px] px-[20px] absolute lg:left-[3.45px] lg:top-[202.22px]">
                <p className="text-[#2C4D51]">
                    الهوية
                </p>
      </div>

      
      <div className="mt-10 rotate-[6.35deg] shadow-xl border-1 rounded-full flex justify-center items-center bg-[#BE894A]/10 py-[6px] px-[20px] absolute lg:left-[144.55px] right-[17%] lg:right-auto lg:top-[283px]">
                <p className="text-[#BE894A]">
                    فئة العميل  
                </p>
      </div> 

      <div className="absolute left-0 z-0">
        <img src={BackgroundOrangeColor} alt="" />
      </div>
    </div>
  );
}

export default DistinguishesUs;
