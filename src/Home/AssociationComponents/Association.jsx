import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Images } from "./images.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "/assets/Home/AssociationSection/Variant5.svg";
import right from "/assets/Home/AssociationSection/Variant6.svg";
import "./style.css"; 

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
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer opacity-60 hover:opacity-100"
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
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer opacity-60 hover:opacity-100"
    />
  </div>
);

function Association() {
  const allImages = Images.flatMap((img) => img.src);

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

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

  return (
    <div className="container mx-auto px-1 py-20  mb-[71.75px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#9D6636] font-bold text-center my-4">
        شركاء النجاح
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {allImages.map((src, index) => (
          <div key={index} className="logos">
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="images"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8 space-x-8">
        <div className="flex items-center justify-center">
          <NextArrow
            onClick={() => sliderRef.current.slickNext()}
            disabled={currentSlide >= allImages.length - 4}
          />
        </div>
        <div className="flex items-center justify-center">
          <PrevArrow
            onClick={() => sliderRef.current.slickPrev()}
            disabled={currentSlide === 0}
          />
        </div>
      </div>
    </div>
  );
}

export default Association;
