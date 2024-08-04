import "./hero.css";
import data from "./field.json";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [key, setKey] = useState(0); // Key to force re-render for animation

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const isLastSlide = currentIndex === data.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setKey(newIndex);
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
            ></div>
          );
        })}
      </div>

      {/*Actual Hero*/}
      <main className="overflow-hidden">
        <div className="relative h-screen w-screen flex items-center pr-8 lg:pr-20">
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
          <section className="flex flex-col z-10 gap-2 w-1/2 2xl:w-1/3">
            <h1 className="bg-gradient-to-l from-primary to-secondary text-4xl font-bold text-transparent bg-clip-text p-4">
              {data[currentIndex].title}
            </h1>
            <p className="text-white text-justify text-lg p-4">
              {data[currentIndex].description}
            </p>
          </section>
          <div className="flex gap-4 z-10">
            <button className="p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary">
              <FaArrowRight size={24} className="" />
            </button>
            <button className="p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary">
              <FaArrowLeft size={24} className="" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
