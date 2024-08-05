import "./hero.css";
import data from "./field.json";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";
import { AnimatePresence, motion } from "framer-motion";
function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [key, setKey] = useState(0); // Key to force re-render for animation
  const textVariants = {};

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setKey(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setKey(newIndex);
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
      {/*Load the images in advanced so the animation works */}
      <div>
        {data.map((slide, index) => {
          return (
            <div
              key={index}
              className="w-0"
              style={{
                backgroundImage: `url('${slide.bigPicture}')`,
              }}
            >
              <img src={slide.smallPicture} />
            </div>
          );
        })}
      </div>

      {/*Actual Hero*/}
      <main className="overflow-hidden">
        <div className="relative h-screen w-screen flex flex-col items-center justify-center ">
          {/* Image with Ken Burns effect */}
          <img
            key={key}
            src={data[currentIndex].bigPicture}
            className={`absolute inset-0 w-full h-full object-cover object-center ${
              currentIndex % 2 === 0
                ? "kenburns-top-right"
                : "kenburns-top-right-reverse"
            } `}
          />
          {/*Content Section*/}

          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <AnimatePresence>
              <motion.section className="flex flex-col z-10 gap-2 w-full xl:w-1/2 overflow-hidden">
                <Heading className="bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text m-2 md:m-4 md:mr-8 lg:mr-20">
                  {data[currentIndex].title}
                </Heading>
                <Paragraph className="text-white text-justify m-2 md:m-4 md:mr-8 lg:mr-20">
                  {data[currentIndex].description}
                </Paragraph>
              </motion.section>
            </AnimatePresence>

            <section className="flex justify-center gap-8 z-10 relative -left-[1%] 2xl:-left-[5%] overflow-hidden">
              <img
                src={data[(currentIndex + 1) % data.length].smallPicture}
                className="h-11/12 w-1/4 xl:w-[30%] 2xl:w-full"
              />
              <img
                src={data[(currentIndex + 2) % data.length].smallPicture}
                className="h-11/12 w-1/4 xl:w-[30%] 2xl:w-full"
              />
              <img
                src={data[(currentIndex + 3) % data.length].smallPicture}
                className="h-11/12 w-1/4 xl:w-[30%] 2xl:w-full"
              />
            </section>
          </div>
          <div className="flex w-full justify-center items-center relative top-24 gap-4 z-10">
            <button
              className="p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
              onClick={prevSlide}
            >
              <FaArrowRight size={24} />
            </button>
            <button
              className="p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
              onClick={nextSlide}
            >
              <FaArrowLeft size={24} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
