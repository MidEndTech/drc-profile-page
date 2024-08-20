import data from "./field.json";
import { useRef, useState, useEffect } from "react";
import HeroContainer from "./HeroContainer";
import HeroInfo from "./HeroInfo";
import HeroCarousel from "./HeroCarousel";
import Arrows from "./Arrows";

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

function HeroSection() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
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
    const imageUrls = data.flatMap((item) => [
      item.smallPicture,
      item.bigPicture,
    ]);
    preloadImages(imageUrls).then(() => {
      setImagesLoaded(true);
    });
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  });

  if (!imagesLoaded) {
    return;
    // Display a loading indicator while images are being preloaded
  }

  return (
    <main className="overflow-hidden">
      <HeroContainer currentIndex={currentIndex}>
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-0 justify-between items-center w-full">
          <HeroInfo currentIndex={currentIndex} isNext={isNext} />
          <div className="flex flex-col pr-4 sm:p-0 w-full sm:w-1/3">
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
