import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const [isText, setIsText] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsText(!isText);
    }, 2000);
    return () => clearTimeout(timerRef.current);
  });
  return (
    <div className="overflow-hidden relative mb-[287px]">
      <div className="w-screen h-screen lg:h-[900px] flex items-center justify-center ">
        <section className="text-center mb-12 z-20">
          <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-bold">
            خدماتنا
          </h1>
          <h1 className="text-dark-green text-2xl md:text-4xl lg:text-5xl font-bold">
            الدقة تصنع الجودة، والخبرة فارق
          </h1>
        </section>

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
          className="w-1/3 sm:w-1/3 xl:w-auto absolute right-16 bottom-36 md:bottom-2 lg:right-36 lg:bottom-8 z-0 "
        />
        <section className="rotate-[15deg] w-[30%] md:w-1/4 xl:w-auto absolute left-10 top-24 lg:left-24 lg:top-28 z-0">
          {isText && (
            <div className="absolute -top-12 sm:-top-16 md:-top-20 flex justify-between items-center gap-2 sm:gap-3 lg:gap-4 w-1/4 sm:w-1/3 md:w-auto">
              <img src="/assets/Services/HeroSection/Small-Logo.svg" />
              <p className="text-secondary text-xl md:text-2xl">التخطيط</p>
              <img src="/assets/Services/HeroSection/Small-Logo.svg" />
            </div>
          )}
          <img
            src={`/assets/Services/HeroSection/Planning.svg`}
            className={`${!isText && "bg-primary/80"}`}
          />
        </section>

        <img
          src="/assets/Services/HeroSection/Development.svg"
          className="w-1/3 sm:w-1/3 xl:w-auto absolute left-14 bottom-32 md:bottom-2 lg:left-36 lg:-bottom-4 z-0 "
        />
      </div>
    </div>
  );
}

export default HeroSection;
