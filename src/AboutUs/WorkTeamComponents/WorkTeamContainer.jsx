import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { SettingsSlider } from "./SettingsSlider";
import left from "/assets/Home/AssociationSection/Variant5.svg";
import right from "/assets/Home/AssociationSection/Variant6.svg";
import "./Slider.css"
import BackgroundBlue from "/assets/AboutUs/WorkTeamSection/BackgroundBlue.svg"

import teamObj from "./team.json";
import TeamCards from "./TeamCards";

function WorkTeamContainer() {
  const [team, setTeam] = useState([...teamObj]);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [c, setC] = useState(null);

  useEffect(() => {
    setC(currentSlide);
  }, []);

  const NextArrow = ({ onClick, disabled }) => (
    <div
      onClick={onClick}
      className={`custom-arrow next-arrow p-2 z-10 ${
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

  SettingsSlider(setCurrentSlide);

  
  return (
    <div className="flex flex-col items-center" dir="rtl">
      
      {/* done */}
      <h1 className="font-[700] text-[36px] text-[#9D6636] text-center mb-8">
        فريق العمل
      </h1>


      <div className="slider-container relative w-full z-10">
        <Slider ref={sliderRef} {...SettingsSlider()}>
          {team.map((el, index) => {
            return (
              <div className="z-20">
                <TeamCards
                  index={index}
                  avatarImage={el.avatarImage}
                  nameOfWorker={el.nameOfWorker}
                  workerTitile={el.workerTitile}
                  workerDescripe={el.workerDescripe}
                />
              </div>
            );
          })}
        </Slider>

        <div className="flex justify-between">
          <div className="relative bottom-[390px]"> 
            <NextArrow
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            />
          </div>

          <div className="relative bottom-[390px]">
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          </div>
        </div>
              
              {/* <div className="absolute right-0 bottom-[160px] z-0"><img src={BackgroundBlue} alt="" /></div> */}
      </div>
    </div>
  );
}

export default WorkTeamContainer;