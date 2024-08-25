import { useState } from "react";
import right from "/assets/Home/AssociationSection/Variant5.svg";
import left from "/assets/Home/AssociationSection/Variant6.svg";
import CardInfo from "./CardInfo";
import BackgroundOrangeS from "/assets/Services/ServicesSliderSection/BackgroundOrangeS.svg";
import logoOpacity from "/assets/Services/ServicesSliderSection/logoOpacity.svg";
import TextOfCard from "./TextOfCard";
import { AnimatePresence, motion } from "framer-motion";

function ServicesSliderContainer() {
  const [indexCounter, setIndexCounter] = useState(0);
  return (
    <>
      <div
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once={true}
        data-aos-delay="200"
        className=" mt-10 lg:mt-20 flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:items-center overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={indexCounter}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CardInfo index={indexCounter} />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={indexCounter}
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Added transition for smoothness
            className="relative"
          >
            <TextOfCard index={indexCounter} />
            <div className="absolute lg:top-[95px] lg:right-[10px] top-[0px] right-[0px]">
              <img src={logoOpacity} alt="" />
            </div>
          </motion.div>
        </AnimatePresence>{" "}
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once={true}
        data-aos-delay="200"
        className="flex justify-between mx-2 relative bottom-[550px] lg:justify-between lg:bottom-[360px] lg:mx-[5%]"
      >
        <img
          onClick={() => {
            setIndexCounter((prev) => prev - 1);
          }}
          src={right}
          alt=""
          className={`z-10 cursor-pointer w-12 opacity-[1] hover:opacity-[0.7] ${
            indexCounter === 0 && "invisible"
          }`}
        />
        <img
          onClick={() => {
            setIndexCounter((prev) => prev + 1);
          }}
          src={left}
          alt=""
          className={`z-10 cursor-pointer opacity-[1] hover:opacity-[0.7] w-12 lg:absolute lg:left-20 ${
            indexCounter === 7 && "invisible"
          }`}
        />
      </div>

      <div className="z-0 absolute left-0 top-[900px]">
        <img src={BackgroundOrangeS} alt="" />
      </div>
    </>
  );
}

export default ServicesSliderContainer;
