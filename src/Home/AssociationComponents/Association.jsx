import React, { useState } from "react";
import Slider from "react-slick";
import { Images } from "./images.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../../public/assets/Home/AssociatationImages/Variant5.svg";
import right from "../../../public/assets/Home/AssociatationImages/Variant6.svg";

const NextArrow = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={`custom-arrow next-arrow p-2 ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    <img
      src={left}
      alt="Next"
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
  </div>
);

const PrevArrow = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={`custom-arrow prev-arrow p-2 ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    <img
      src={right}
      alt="Previous"
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
  </div>
);

function AssociationCarousel() {
  const allImages = Images.flatMap((img) => img.src);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rows: 3,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  };

  let sliderRef = React.createRef();

  return (
    <div className="container mx-auto px-1">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#9D6636] font-bold text-center my-4">
        شركاء النجاح
      </h1>
      <Slider ref={(ref) => (sliderRef = ref)} {...settings}>
        {allImages.map((src, index) => (
          <div key={index} className="px-2 py-4">
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 object-contain px-4 sm:px-6 md:px-8 lg:px-10"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8 space-x-8">
        <div className="flex items-center justify-center">
          <NextArrow
            onClick={() => sliderRef.slickNext()}
            disabled={currentSlide >= allImages.length - 4}
          />
        </div>
        <div className="flex items-center justify-center">
          <PrevArrow
            onClick={() => sliderRef.slickPrev()}
            disabled={currentSlide === 0}
          />
        </div>
      </div>
    </div>
  );
}
export default AssociationCarousel;