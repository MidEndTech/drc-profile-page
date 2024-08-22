import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function CardsDisplay(props) {
  const [placeT, setPlaceT] = useState([-280]);
  const [placeL, setPlaceL] = useState([490]);

  return (
    <AnimatePresence mode="popLyout">
      <motion.div
        initial={{ y: -200, x: 50, opacity: 0 }}
        animate={{ y: props.lgTop, x: props.lgLeft, opacity: 1 }}
        // animate={{ y: placeT, x: placeL, opacity: 1 }}
        exit={{ y: -200, x: 50, opacity: 0 }} 
        transition={{ duration: 1 }}
        key={props.index}
      >
        <div
          className={`animate-bounce shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute z-0`}
          style={{
            backgroundColor: `${props.backGroundColor}`,
            // top: `${
            //   props.funcCond === "lg"
            //     ? props.lgTop
            //     : props.funcCond === "md"
            //     ? props.mdTop
            //     : props.top
            // }px`,
            // left: `${
            //   props.funcCond === "lg"
            //     ? props.lgLeft
            //     : props.funcCond === "md"
            //     ? props.mdLeft
            //     : props.left
            // }px`,
            // right: `${props.funcCond === "phone" ? props.right : null}px`,
            width:`${props.width}px`,
            rotate: `${props.rotation}`,
            animationDuration: `${props.duration}s`,
          }}
        >
          <p  style={{ color: `${props.textColor}` }}>{props.text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CardsDisplay;
