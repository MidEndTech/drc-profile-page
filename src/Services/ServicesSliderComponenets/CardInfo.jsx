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
            className="w-[381px] h-[492px] rounded-[30px] rotate-[3deg]"
          />
        </div>

        <div className="md:w-[641.4px] md:h-[390.82px] md:relative top-[100px] mx-[55px] text-justify">
          <h1 className="text-[#223A39] font-[700] text-[36px] w-[400px]">
            {props.titleOfCard}
          </h1>
          <p className="">{props.textOfCard}</p>
        </div>
      </>
  );
}

export default CardInfo;
