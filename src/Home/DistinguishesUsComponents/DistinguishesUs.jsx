import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import LogoUs from "/assets/Home/DistinguishesUsSection/LogoUs.svg";
import BackgroundOrangeColor from "/assets/Home/DistinguishesUsSection/BackgroundOrangeColor.svg";
import ButtonsTitle from "./ButtonsTitle";
import CardsDisplay from "./CardsDisplay";

//import JSON files
import LensesAndDimensionObj from "./LensesAndDimension.json";
import featuresObj from "./features.json";
import internalValuesObj from "./internalValues.json";

function DistinguishesUs() {
  const [cards, setCards] = useState("LensesAnd_dimensions");
  const [lensesAndDimension, setLensesAndDimension] = useState([
    ...LensesAndDimensionObj,
  ]);
  const [features, setFeatures] = useState([...featuresObj]);
  const [internalValues, setInternalValues] = useState([...internalValuesObj]);
  const [indexOfCard, setIndexOfCard] = useState(0);
  const size = useWindowSize();

  //this functions for send the which cards will apper and make active buttons
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

  //this functions for send the current width to change the card for responseve page
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
  };

  return (
    <div
      data-aos="slide-up"
      data-aos-duration="1000"
      data-aos-offset="300"
      data-aos-once
      className="flex flex-col md:h-screen mb-[190px] justify-center items-center"
    >
      <h1 className="font-[700] text-[36px] text-[#9D6636] mb-10">مايميزنا</h1>

      <div className="lg:h-[718.51px] lg:w-[1142.89px] h-full flex flex-col justify-start lg:justify-center items-center relative lg:mt-[-90px] md:w-full w-[95%]">
        <ButtonsTitle
          activeBtn={cards}
          function1={() => {
            handleCardSelection("LensesAnd_dimensions"),
              setIndexOfCard((prev) => prev + 1);
          }}
          function2={() => {
            handleCardSelection("features"), setIndexOfCard((prev) => prev + 1);
          }}
          function3={() => {
            handleCardSelection("Internal_values"),
              setIndexOfCard((prev) => prev + 1);
          }}
        />

        <div
          className={` relative shadow-lg w-[190px] h-[190px] md:w-[310px] md:h-[310px]  lg:w-[415.91px] lg:h-[415.91px] border-[11px] rounded-full mt-[50px] flex justify-center items-center bg-white lg:z-10`}
        >
          <img
            src={LogoUs}
            alt="شعار دار الرحمة"
            className="w-[100px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[278.62px] lg:h-[172.95px] lg:z-10"
          />
        </div>

        {cardsHandle().map((el, index) => {
          () => setIndexOfCard(cardIndex);
          return (
            <div key={index}>
              <CardsDisplay
                index={indexOfCard}
                backGroundColor={el.backGroundColor}
                funcCond={responsivePageHandle()}
                width={el.width}
                lgTop={el.lgTop}
                mdTop={el.mdTop}
                top={el.top}
                lgLeft={el.lgLeft}
                mdLeft={el.mdLeft}
                left={el.left}
                display={el.display}
                rotation={el.rotation}
                duration={el.duration}
                textColor={el.textColor}
                text={el.text}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute left-0 z-[-1] md:left-0 lg:left-0">
        <img src={BackgroundOrangeColor} alt="" />
      </div>
    </div>
  );
}

export default DistinguishesUs;