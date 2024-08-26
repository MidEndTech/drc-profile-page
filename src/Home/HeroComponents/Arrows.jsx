import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="flex w-full items-center justify-center lg:justify-normal relative top-8 sm:top-0 md:-left-[2%] lg:-left-8 2xl:-left-[4%] gap-4 z-10">
      <button
        className="p-2 md:p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
        onClick={() => {
          prevSlide();
        }}
      >
        <FaArrowRight size={24} />
      </button>
      <button
        className="p-2 md:p-4 text-white border-2 border-white rounded-full hover:border-primary hover:text-primary"
        onClick={() => {
          nextSlide();
        }}
      >
        <FaArrowLeft size={24} />
      </button>
    </div>
  );
}

export default Arrows;
