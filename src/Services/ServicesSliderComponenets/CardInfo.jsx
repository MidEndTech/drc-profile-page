import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cardInfoObj from "./servicesCardInfo.json";
import logoOpacity from "/assets/Services/ServicesSliderSection/logoOpacity.svg";

function CardInfo(props) {
  // Assuming cardInfoObj is an array and you're accessing the item by index
  const [cardOfInfo, setCardOfInfo] = useState(cardInfoObj[props.index] || {});

  return (
    <>
      <div className="overflow-hidden pt-20 pr-3 pb-3 pl-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={props.index}
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }} // Added transition for smoothness
            className="md:w-[515.83px] md:h-[586.52px]"
          >
            <img
              src={cardOfInfo.card}
              alt=""
              className="w-[230px] h-[380px] md:w-[390px] md:h-[492px] rounded-[30px] rotate-[3deg]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="overflow-hidden p-3 pb-20">
        <AnimatePresence>
          <motion.div
            key={props.index}
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Added transition for smoothness
            className="w-[340px] h-[200px] md:w-[641.4px] md:h-[390.82px] md:relative top-[100px] md:mx-[55px] "
          >
            <h1 className="text-[#223A39] font-[700] text-[28px] md:text-[36px]">
              {cardOfInfo.titleOfCard}
            </h1>
            <p className="md:w-[597.79px] md:h-[301.74px] font-[400] md:text-[24px] text-[20px] text-justify">
              {cardOfInfo.textOfCard}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default CardInfo;
