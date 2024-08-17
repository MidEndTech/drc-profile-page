import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function CardsDisplay(props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        // exit={{ y: 0, x: 0, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        key={props.index}
      >
        <div
          className={`animate-bounce z-10 shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute`}
          style={{
            backgroundColor: `${props.backGroundColor}`,
            top: `${
              props.funcCond === "lg"
                ? props.lgTop
                : props.funcCond === "md"
                ? props.mdTop
                : props.mdTop
            }px`,
            left: `${
              props.funcCond === "lg"
                ? props.lgLeft
                : props.funcCond === "md"
                ? props.mdLeft
                : props.left
            }px`,
            right: `${props.funcCond === "phone" ? props.right : null}`,
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


