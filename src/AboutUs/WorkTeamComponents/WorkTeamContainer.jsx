// hooks
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

//Slider puck
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import right from "/assets/Home/AssociationSection/Variant5.svg";
import left from "/assets/Home/AssociationSection/Variant6.svg";
import BackgroundBlue from "/assets/AboutUs/WorkTeamSection/BackgroundBlue.svg";

//json files
import teamObj from "./team.json";
import TeamCards from "./TeamCards";

function WorkTeamContainer() {
  const [team, setTeam] = useState([...teamObj]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center mb-[71.75px]" dir="rtl">
      <h1 className="font-[700] text-[36px] text-[#9D6636] text-center mb-8">
        فريق العمل
      </h1>

      <div className="relative w-full">
        <Swiper
          centeredSlides={true}
          pagination={{
            type: "fraction",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: ".arrow-left",
            prevEl: ".arrow-right",
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {team.map((el, index) => {
            return (
              <SwiperSlide key={index} className="mt-10">
                <div
                  className={`z-0 transition-transform duration-300 ease-in-out ${
                    activeIndex === index
                      ? "scale-[1.2] mb-10 relative bottom-6"
                      : ""
                  }`}
                >
                  <TeamCards
                    index={index}
                    avatarImage={el.avatarImage}
                    nameOfWorker={el.nameOfWorker}
                    workerTitile={el.workerTitile}
                    workerDescripe={el.workerDescripe}
                    borderStyle={
                      activeIndex === index
                        ? "scale-[1] border-[#9D6636] shadow-md shadow-[#BE894A]"
                        : "border-[#D9D9D9]"
                    }
                    bakgroundStyle={
                      activeIndex === index
                        ? "scale-[1] bg-[#BE894A]"
                        : "bg-[#D9D9D9]"
                    }
                  />
                </div>
              </SwiperSlide>
            );
          })}

          <img
            className="arrow-left hover:opacity-70 cursor-pointer absolute md:bottom-[280px] md:left-7 z-10 bottom-[285px] left-3 w-12 md:w-auto"
            src={left}
            alt=""
          />

          <img
            className={`arrow-right ${
              activeIndex === 0 && "hidden"
            } hover:opacity-70 cursor-pointer absolute md:bottom-[280px] md:right-7 z-20 bottom-[285px] right-3 w-12 md:w-auto`}
            src={right}
            alt=""
          />
        </Swiper>

        <hr className="bg-[#B9B9B9] h-[3px] mt-10 w-full absolute lg:bottom-[120px] bottom-[120px]" />
        <div className="absolute right-0 bottom-[100px] -top-40">
          <img src={BackgroundBlue} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorkTeamContainer;
