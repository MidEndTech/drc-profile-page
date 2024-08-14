import React, { useState } from "react";
import { useHover } from "@uidotdev/usehooks";
import right from "/assets/Home/AssociationSection/Variant5.svg";
import left from "/assets/Home/AssociationSection/Variant6.svg";

import cardInfoObj from "./servicesCardInfo.json";
import CardInfo from "./CardInfo";



function ServicesSliderContainer() {
  const [cardOfInfo, setCardOfInfo] = useState([...cardInfoObj]);

  return (
    <>
      <div className="mt-10 lg:mt-20 flex flex-col items-center md:flex-row-reverse md:justify-center md:items-center">
        {cardOfInfo.map((el, index) => {
          return (
            <CardInfo
              index={index}
              card={el.card}
              titleOfCard={el.titleOfCard}
              textOfCard={el.textOfCard}
            />
          );
        })}

        
      </div>

      <div className="flex justify-between mx-2 relative hover:opacity-4 bottom-[420px] lg:justify-between lg:bottom-[360px] lg:mx-[210px]">
        <img
          src={right}
          alt=""
          className="cursor-pointer hover:opacity-4 w-12"
        />
        <img
          src={left}
          alt=""
          className="cursor-pointer hover:opacity-4 w-12 lg:absolute lg:left-24"
        />
      </div>
    </>
  );
}

export default ServicesSliderContainer;
