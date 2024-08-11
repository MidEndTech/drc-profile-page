import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Arrows({ sliderRef, prevSlide, nextSlide }) {
  return (
    <div className="flex w-full items-center justify-center lg:justify-normal relative top-14 md:-left-[1%] 2xl:-left-[5%] gap-4 z-10">
      <button
        className="p-2 md:p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
        onClick={() => {
          prevSlide();
          // eslint-disable-next-line react/prop-types
          sliderRef.current.previous();
        }}
      >
        <FaArrowRight size={24} />
      </button>
      <button
        className="p-2 md:p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
        onClick={() => {
          nextSlide();
          // eslint-disable-next-line react/prop-types
          sliderRef.current?.next();
        }}
      >
        <FaArrowLeft size={24} />
      </button>
    </div>
  );
}

export default Arrows;
