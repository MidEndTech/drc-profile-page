import React, { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "/assets/AboutUs/FounderSection/Backgournd.svg";
import FounderImage from "/assets/AboutUs/FounderSection/Self.svg";
import FounderInfo from "./FounderInfo";
import orange from "/assets/AboutUs/FounderSection/orange.svg";
import TopCorner from "/assets/AboutUs/FounderSection/topcorner1.png";
import blue from "/assets/AboutUs/FounderSection/blue.svg";
import arrow from "/assets/AboutUs/FounderSection/arrow.svg";
import Paragraph from "../../SharedComponents/Paragraph";

function Founder() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const handleExpand = () => {
    setIsExpanded(true);
    navigate("/founder-info");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen px-10">
      <div
        className={`absolute top-0 right-0 transition-opacity duration-700 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={orange}
          alt="Orange Background"
          className="w-[367px] h-[494px]"
        />
      </div>
      <div
        className={`absolute top-0 left-0 transition-opacity duration-700 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={TopCorner}
          alt="Orange Background"
          className="w-[367px] h-[494px]"
        />
      </div>
      <div
        className={`absolute   left-0 bottom-[40%] transform translate-y-[50%]  transition-opacity duration-700 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={blue} alt="Blue Background" className="w-[367px] h-[494px]" />
      </div>

      <div className="relative w-full max-w-7xl min-h-[600px]  ">
        {!isExpanded ? (
          <>
            <div className="absolute inset-0 rounded-[30px] overflow-hidden z-0">
              <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            <div className="relative bg-dark-green/10 rounded-[30px] flex flex-col md:flex-row-reverse justify-between  items-center min-h-[600px] p-8">
              <div className="mb-6 md:mb-0 ml-10">
                <div className="w-52 h-52">
                  <img src={FounderImage} alt="Profile" className="relative" />
                </div>
              </div>

              <div className="ml-0 md:ml-8 text-center md:text-right">
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                  المؤسس والمدير العام
                </h2>
                <p className="text-lg text-[#BE894A] mb-4">
                  معالي المهندس / عمر عبد الله قاضي
                </p>
                <Paragraph className="text-[#1E1E1E] mb-4 text-justify">
                  الحمد لله الذي خلق الإنسان وعلمه البيان وكرمه وسخر المخلوقات
                  لعمارة الأرض، وجعل الإخلاص في العمل وإتقانه منهجا لبناء
                  الحضارة الإنسانية، وتطور الحياة البشرية، ومنطلقا للجودة
                  والتنمية، وطريقة مثلى للتميز والإبداع. وهذا هو ديدن دار الرحمة
                  للاستشارات الهندسية لتقديم خدماتها في مجالات التصميم المعماري
                  والتخطيط العمراني، والإشراف على تنفيذ المشاريع الذي انطلقت من
                  خلاله للوصول لأقصى آفاق النجاح، مستعينين بالله عز وجل، ثم
                  بخبراتنا الطويلة في مجالات شتى منها مجال تخصصنا العلمي
                  والعملي.
                </Paragraph>
                <button
                  className="flex items-center justify-end px-4 py-2 text-[#BE894A] rounded-full"
                  onClick={handleExpand}
                >
                  <span className="text-2xl">تعرف على المزيد</span>
                  <img src={arrow} className="mr-10" alt="Arrow Icon" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <FounderInfo />
        )}
      </div>
    </div>
  );
}

export default Founder;
