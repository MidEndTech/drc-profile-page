// import React, { useState } from "react";
// import Slider from "react-slick";

// import teamObj from "./team.json";

// function WorkTeamContainer() {
//   const [team, setTeam] = useState([...teamObj]);

//   const settings = {
//     className: "center",
//     centerMode: true,
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: false,
//     dots: false,
//     rtl: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };


//   return (
//     <div>
//       <h1 className="font-[700] text-[36px] text-[#9D6636] flex justify-center">
//         فريق العمل
//       </h1>

//       <div className="slider-container z-10 relative ">
//         <Slider {...settings}>
//           {team.map((el, index) => {
//             return (
//               <div key={index} className="">
//                 <div className="flex-col justify-center items-center text-center w-[276.57px] h-[499.5px]">
//                   <div className="flex justify-center">
//                     <img
//                       src={el.avatarImage}
//                       alt="pic"
//                       className="w-[276.57px] h-[258.07px]"
//                     />
//                   </div>
//                   <p className="font-[400] text-[20px] mt-5">
//                     {el.nameOfWorker}
//                   </p>

//                   <p className="font-[400] text-[16px] text-[#BE894A]">
//                     {el.workerTitile}
//                   </p>

//                   <div className="flex justify-center items-center z-10 relative ">
//                     <div className="border-2 rounded-full p-1 border-[#BE894A] absolute top-5">
//                       <div className="p-4 bg-[#BE894A] rounded-full"></div>
//                     </div>
//                   </div>

//                   <p className="text-[16px] font-[400] mt-10 text-center w-[] h-[]">
//                     {el.workerDescripe}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>{" "}
//       </div>

//       <hr className="bg-[#B9B9B9] h-[3px] mt-10 mb-10 relative lg:bottom-[62px] bottom-[87px] px z-0" />

//     </div>
//   );
// }

// export default WorkTeamContainer;


import React, { useState } from "react";
import Slider from "react-slick";

import teamObj from "./team.json";

function WorkTeamContainer() {
  const [team, setTeam] = useState([...teamObj]);

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-[700] text-[36px] text-[#9D6636] text-center mb-8">
        فريق العمل
      </h1>

      <div className="slider-container z-10 relative w-full">
        <Slider {...settings}>
          {team.map((el, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex-col justify-center items-center text-center">
                <div className="flex justify-center">
                  <img
                    src={el.avatarImage}
                    alt="pic"
                    className="w-[276.57px] h-[258.07px]"
                  />
                </div>
                <p className="font-[400] text-[20px] mt-5">
                  {el.nameOfWorker}
                </p>

                <p className="font-[400] text-[16px] text-[#BE894A]">
                  {el.workerTitile}
                </p>

                <div className="flex justify-center items-center z-10 relative ">
                  <div className="border-2 rounded-full p-1 border-[#BE894A] absolute top-1">
                    <div className="p-4 bg-[#BE894A] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-center items-end">
                                  <p className="text-[16px] font-[400] mt-10 w-[276.57px]">
                  {el.workerDescripe}
                </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      <hr className="bg-[#B9B9B9] h-[3px] mt-10 mb-10 w-full relative bottom-[104px]" />
    </div>
  );
}

export default WorkTeamContainer;
