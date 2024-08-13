import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const [isText, setIsText] = useState(true);
  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsText(!isText);
    }, 3000);
    return () => clearTimeout(timerRef.current);
  });
  return (
    <div className="overflow-hidden relative">
      <div className="w-screen h-screen flex items-center justify-center ">
        <img
          src="/assets/Services/HeroSection/Right-Bubble.svg"
          className="absolute right-0 -top-24 z-10"
        />
        <img
          src="/assets/Services/HeroSection/Left-Bubble.svg"
          className="absolute left-0 top-8 z-10"
        />
        <img
          src="/assets/Services/HeroSection/Engineer.svg"
          className="w-[30%] md:w-1/4 xl:w-auto absolute right-10 top-12 md:top-2 lg:right-24 lg:top-8 z-0"
        />

        <img
          src="/assets/Services/HeroSection/Designing.svg"
          className="w-1/3 sm:w-1/3 xl:w-auto absolute right-16 bottom-24 md:bottom-2 lg:right-36 lg:bottom-8 z-0 "
        />
        <div className="rotate-[15deg] w-[30%] md:w-1/4 xl:w-auto absolute left-10 top-12 md:top-2 lg:left-24 lg:top-24 z-0">
          <p></p>
          <img src={`/assets/Services/HeroSection/Planning.svg`} className="" />
        </div>

        <img
          src="/assets/Services/HeroSection/Development.svg"
          className="w-1/3 sm:w-1/3 xl:w-auto absolute left-16 bottom-4 md:bottom-2 lg:left-36 lg:-bottom-4 z-0 "
        />

        <div className="text-center mb-12 z-20">
          <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-bold">
            خدماتنا
          </h1>
          <h1 className="text-dark-green text-2xl md:text-4xl lg:text-5xl font-bold">
            الدقة تصنع الجودة، والخبرة فارق
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
