import data from "./field.json";
import { useRef, useState, useEffect } from "react";
import HeroInfo from "./HeroInfo";
import HeroCarousel from "./HeroCarousel";
import Arrows from "./Arrows";
import HeroContainer from "./HeroContainer";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setIsNext(true);
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const prevSlide = () => {
    setIsNext(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
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
    <main className="overflow-hidden mb-[71.75px]">
      <HeroContainer currentIndex={currentIndex}>
        <div className="flex flex-col justify-end lg:flex-row gap-4 xl:gap-0 lg:justify-between items-center w-full">
          <HeroInfo currentIndex={currentIndex} isNext={isNext} />
          <div className="flex flex-col pr-4 sm:p-0 w-full sm:w-1/2 2xl:w-1/3">
            <HeroCarousel sliderRef={sliderRef} />
            <Arrows
              sliderRef={sliderRef}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          </div>
        </div>
      </HeroContainer>
    </main>
  );
}
export default HeroSection;
