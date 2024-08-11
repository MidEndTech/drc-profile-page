import React, { useState } from "react";
import backgroundImage from "../../../public/assets/AboutUs/FounderSection/Backgournd.svg";
import FounderImage from "../../../public/assets/AboutUs/FounderSection/Self.svg";
import FounderInfo from "./FounderInfo";
 

function Founder() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen px-10">
      <div className="relative w-full max-w-2xl mx-4">
        {!isExpanded ? (
          <>
            <div className="absolute rounded-[30px] overflow-hidden">
              <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            <div className="relative bg-dark-green/10 rounded-[30px] flex flex-col md:flex-row-reverse justify-between items-center p-8">
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
                <p className="text-[#1E1E1E] mb-4 text-justify">
                  الحمد لله الذي خلق الإنسان وعلمه البيان وكرمه وسخر المخلوقات
                  لعمارة الأرض، وجعل الإخلاص في العمل وإتقانه منهجا لبناء الحضارة
                  الإنسانية، وتطور الحياة البشرية، ومنطلقا للجودة والتنمية،
                  وطريقة مثلى للتميز والإبداع. وهذا هو ديدن دار الرحمة
                  للاستشارات الهندسية لتقديم خدماتها في مجالات التصميم
                  المعماري والتخطيط العمراني، والإشراف على تنفيذ المشاريع الذي
                  انطلقت من خلاله للوصول لأقصى آفاق النجاح، مستعينين بالله عز
                  وجل، ثم بخبراتنا الطويلة في مجالات شتى منها مجال تخصصنا العلمي
                  والعملي.
                </p>
                <button
                  className="px-4 py-2 text-[#BE894A] rounded-full"
                  onClick={handleExpand}
                >
                  تعرف على المزيد
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
