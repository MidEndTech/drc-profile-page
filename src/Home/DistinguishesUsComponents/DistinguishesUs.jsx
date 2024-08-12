import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import gsap from "gsap";
import LogoUs from "/assets/Home/DistinguishesUsSection/LogoUs.svg";
import BackgroundOrangeColor from "/assets/Home/DistinguishesUsSection/BackgroundOrangeColor.svg";
import ButtonsTitle from "./ButtonsTitle";
import CardsDisplay from "./CardsDisplay";
//import JSON files
import LensesAndDimensionObj from "./LensesAndDimension.json";
import featuresObj from "./features.json";
import internalValuesObj from "./internalValues.json";

function DistinguishesUs() {
  //imports*************************************************************************************
  const [cards, setCards] = useState(null);
  const [lensesAndDimension, setLensesAndDimension] = useState([
    ...LensesAndDimensionObj,
  ]);
  const [features, setFeatures] = useState([...featuresObj]);
  const [internalValues, setInternalValues] = useState([...internalValuesObj]);
  const size = useWindowSize();
  //imports*************************************************************************************

  //functions***********************************************************************************
  const cardsHandle = () => {
    switch (cards) {
      case "LensesAnd_dimensions":
        return lensesAndDimension;
      case "features":
        return features;
      case "Internal_values":
        return internalValues;
      default:
        return [];
    }
  };

  const responsivePageHandle = () => {
    if (size.width >= 1024) {
      return "lg";
    } else if (size.width >= 768) {
      return "md";
    } else if (size.width < 768) {
      return "phone";
    }
  };

  const handleCardSelection = (cardType) => {
    setCards(cardType);

    gsap.to(".card", {
      duration: 1,
      x: 0,
      y: 0,
      opacity: 0,
      onComplete: () => {
        // After the texts are in the center, change the text and animate to the target positions
        gsap.to(".card", {
          duration: 1,
          x: (i, target) => gsap.getProperty(target, "data-x"),
          y: (i, target) => gsap.getProperty(target, "data-y"),
          opacity: 1,
        });
      },
    });
  };
  //functions*********************************************************

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-[700] text-[36px] text-[#9D6636] mb-10">مايميزنا</h1>

      <div className="lg:h-[718.51px] lg:w-[1142.89px] h-full flex flex-col justify-start lg:justify-center items-center relative lg:mt-[-90px] md:w-full w-[95%]">
        {/*nead break it *****DONE****************************************************************************************************************************************************************************************/}

        <ButtonsTitle
          function1={() => handleCardSelection("LensesAnd_dimensions")}
          function2={() => handleCardSelection("features")}
          function3={() => handleCardSelection("Internal_values")}
        />

        {/*nead break it *******Done**************************************************************************************************************************************************************************************/}
        <div
          className={` relative shadow-lg w-[190px] h-[190px] md:w-[310px] md:h-[310px]  lg:w-[415.91px] lg:h-[415.91px] border-[11px] rounded-full mt-[50px] flex justify-center items-center bg-white`}
        >
          <img
            src={LogoUs}
            alt="شعار دار الرحمة"
            className="w-[100px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[278.62px] lg:h-[172.95px]"
          />
        </div>

        {/*nead break it *********************************************************************************************************************************************************************************************/}

        {cardsHandle().map((el, index) => {
          return (
            <div className="card" data-x="243.77" data-y="122.61">
              <CardsDisplay
                index={index}
                backGroundColor={el.backGroundColor}
                funcCond={responsivePageHandle()}
                lgTop={el.lgTop}
                mdTop={el.mdTop}
                top={el.top}
                lgLeft={el.lgLeft}
                mdLeft={el.mdLeft}
                left={el.left}
                right={el.right}
                rotation={el.rotation}
                duration={el.duration}
                textColor={el.textColor}
                text={el.text}
              />
            </div>
          );
        })}
      </div>

      {/*nead break it *********************************************************************************************************************************************************************************************/}

      <div className="absolute left-0 z-0 md:left-0 lg:left-0">
        <img src={BackgroundOrangeColor} alt="" />
      </div>
    </div>
  );
}

export default DistinguishesUs;
