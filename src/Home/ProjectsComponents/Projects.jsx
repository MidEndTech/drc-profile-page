import React from "react";
import first from "/assets/Home/ProjectsSection/1.svg";
import second from "/assets/Home/ProjectsSection/2.svg";
import third from "/assets/Home/ProjectsSection/3.svg";
import forth from "/assets/Home/ProjectsSection/4.svg";

const projects = [
  { id: 1, image: first },
  { id: 2, image: second },
  { id: 3, image: third },
  { id: 4, image: forth },
];

function Projects() {
  return (
    <>
      <div className=" py-8 px-4 flex flex-col items-center text-right ">
      <div className="w-full max-w-screen-lg">
        <h1 className="text-[#9D6636] text-right font-bold text-4xl my-5">مشاريعنا</h1>
        <p className="text-[#2C4D51] text-right my-5 text-2xl">
          في دار الرحمة، نقدم خدمات هندسية شاملة تشمل التصميم، الإشراف، وإدارة
          المشاريع، ملتزمين بأعلى معايير الجودة والسلامة بفضل فريقنا الخبير،
          نجحنا في تنفيذ مشاريع متميزة تعزز مكانتنا كشركة رائدة.
        </p>
      </div>

        <div className="flex flex-col md:flex-row gap-10 max-w-screen-lg">
          {/* Left column */}
          <div className="flex flex-col gap-6 ">
            <div className="">
              {" "}
              {/*w-[440px] h-[430px]/*/}
              <img
                src={projects[0].image}
                className="w-full h-full object-cove pt-10 pb-10 pr-10"
              />
            </div>
            <div className="">
              {" "}
              {/*w-[520px] h-[500px]/*/}
              <img
                src={projects[2].image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div
              className=" "
              // style={{ width: "520px", height: "500px" }}
            >
              <img
                src={projects[1].image}
                className="w-full h-full object-cover pb-10 "
              />
            </div>
            <div
              className="relative overflow-hidden "
              // style={{ width: "470px", height: "430px" }}
            >
              <img
                src={projects[3].image}
                className="w-full h-full object-cover pl-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
