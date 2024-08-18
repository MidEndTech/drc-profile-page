import React, { useState } from "react";
import cardInfoObj from "./servicesCardInfo.json";

function TextOfCard(props) {
  const [cardOfInfo, setCardOfInfo] = useState(cardInfoObj[props.index] || {});

  return (
    <div className="overflow-hidden p-3 pb-20 " key={props.index}>
      <div className="w-[340px] h-[200px] md:w-[641.4px] md:h-[390.82px] md:relative top-[100px] md:mx-[55px] ">
        <h1 className="text-[#223A39] font-[700] text-[28px] md:text-[36px]">
          {cardOfInfo.titleOfCard}
        </h1>
        <p className="md:w-[597.79px] md:h-[301.74px] font-[400] md:text-[24px] text-[20px] text-justify">
          {cardOfInfo.textOfCard}
        </p>{" "}
      </div>
    </div>
  );
}

export default TextOfCard;
