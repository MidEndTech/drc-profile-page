import React from "react";

function CardInfo(props) {
  return (
      <>
        <div
          key={props.index}
          className="md:w-[515.83px] md:h-[586.52px] relative top-50"
        >
          <img
            src={props.card}
            alt=""
            className="w-[330px] h-[480px] md:w-[390px] md:h-[492px]  rounded-[30px] rotate-[3deg]"
          />
        </div>

        <div className="w-[340px] h-[200px] mx-[10%] md:w-[641.4px] md:h-[390.82px] md:relative top-[100px] md:mx-[55px] text-justify">
          <h1 className="text-[#223A39] font-[700] text-[33px] md:text-[36px]">
            {props.titleOfCard}
          </h1>
          <p className="md:w-[597.79px]  md:h-[301.74px] font-[400] md:text-[24px] text-[20px]">{props.textOfCard}</p>
        </div>
      </>
  );
}

export default CardInfo;
