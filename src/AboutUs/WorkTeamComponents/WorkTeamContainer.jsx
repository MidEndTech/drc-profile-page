import React, { useEffect, useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import left from "/assets/Home/AssociationSection/Variant5.svg";
import right from "/assets/Home/AssociationSection/Variant6.svg";

import BackgroundBlue from "/assets/AboutUs/WorkTeamSection/BackgroundBlue.svg";

import teamObj from "./team.json";
import TeamCards from "./TeamCards";

function WorkTeamContainer() {
  const [team, setTeam] = useState([...teamObj]);

  return (
    <div className="flex flex-col items-center" dir="rtl">
      {/* done */}
      <h1 className="font-[700] text-[36px] text-[#9D6636] text-center mb-8">
        فريق العمل
      </h1>

      <div className="relative w-full z-10">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={ [Navigation] }
        className="mySwiper"
      >
          {team.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                  <TeamCards
                    index={index}
                    avatarImage={el.avatarImage}
                    nameOfWorker={el.nameOfWorker}
                    workerTitile={el.workerTitile}
                    workerDescripe={el.workerDescripe}
                  />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <hr className="bg-[#B9B9B9] h-[3px] mt-10 mb-0 w-full relative lg:bottom-[125px]"/>


        <img className="arrow-left  " src={right} alt="" />
        <img className="arrow-right absolute right-[7px] bottom-[320px]" src={left} alt="" />

        {/* <div className="absolute right-0 bottom-[160px]"><img src={BackgroundBlue} alt="" /></div> */}
      </div>
    </div>
  );
}

export default WorkTeamContainer;
