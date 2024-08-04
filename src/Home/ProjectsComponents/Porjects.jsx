import React from "react";
import first from "../../../public/assets/Home/AssociatationImages/1.png";
import second from "../../../public/assets/Home/AssociatationImages/2.png";
import third from "../../../public/assets/Home/AssociatationImages/3.png";
import forth from "../../../public/assets/Home/AssociatationImages/4.png";

const projects = [
  { id: 1, title: "ضاحية الورود", image: first },
  { id: 2, title: "فيلا سكنية", image: second },
  { id: 3, title: "مبنى الطوارئ", image: third },
  { id: 4, title: "مشروع وادي عربة", image: forth },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">
        مشاريعنا
      </h2>
      <p className="text-center text-lg mb-8 text-gray-600">
        في دار الرحمة، نقدم خدمات هندسية شاملة تشمل التصميم، الإشراف، وإدارة
        المشاريع ملتزمين بأعلى معايير الجودة والسلامة بفضل فريقنا الكبير، نجحنا
        في تنفيذ مشاريع متطورة تعزز مكانتنا كشركة رائدة.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-lg">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div className="w-[440px] h-[430px]">
            <img
              src={projects[0].image}
              className="w-full h-full object-cover"
              alt={projects[0].title}
            />
          </div>
          <div className="w-[520px] h-[500px]">
            <img
              src={projects[2].image}
              className="w-full h-full object-cover"
              alt={projects[2].title}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div
            className="relative rounded-xl overflow-hidden shadow-lg"
            style={{ width: "520px", height: "500px" }}
          >
            <img
              src={projects[1].image}
              className="w-full h-full object-cover"
              alt={projects[1].title}
            />
          </div>
          <div
            className="relative rounded-xl overflow-hidden self-end"
            style={{ width: "470px", height: "430px" }}
          >
            <img
              src={projects[3].image}
              className="w-full h-full object-cover"
              alt={projects[3].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;