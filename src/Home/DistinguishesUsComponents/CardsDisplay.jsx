import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function CardsDisplay(props) {
  const [placeT, setPlaceT] = useState([-10]);
  const [placeL, setPlaceL] = useState([20]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: props.funcCond === "lg" ? -200 : -120,
          x: props.funcCond === "lg" ? 50 : 70,
          opacity: 0,
        }}
        animate={{
          y:
            props.funcCond === "lg"
              ? props.lgTop
              // : props.funcCond === "md"
              // ? props.mdTop
              : props.top,
          x:
            props.funcCond === "lg"
              ? props.lgLeft
              // : props.funcCond === "md"
              // ? props.mdLeft
              : props.left,
          opacity: 1,
        }}
        exit={{ y: -120, x: 70, opacity: 0 }}
        transition={{ duration: 1 }}
        key={props.index}
      >
        <div
          className={`text-[18px] animate-bounce shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute`}
          style={{
            backgroundColor: `${props.backGroundColor}`,
            width: `${props.width}px`,
            display:`${props.display}`,
            rotate: `${props.rotation}`,
            animationDuration: `${props.duration}s`,
          }}
        >
          <p style={{ color: `${props.textColor}` }}>{props.text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CardsDisplay;
