import React from "react";
import HeroContactImg from "/assets/ContactUs/HeroContactImg.svg";

function HeroContact() {
  return (
    <div
      className="relative overflow-hidden  bg-cover bg-no-repeat p-12 mb-[92px]"
      style={{
        backgroundImage: `url(${HeroContactImg})`,
        height: "639px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="bg-dark-green/80 absolute inset-0 h-full w-full flex flex-col justify-center p-10 ">
          <h1 className="text-[#FFFFFF] font-[700] text-[36px]">تواصل معنا </h1>
          <p className="text-[#FFFFFF] font-[700] text-[24px] md:w-[600px] text-justify mt-4 ">
            في إطار سعيُنا نحو المسؤولية فإنّنا نُرحب بتواصل مُستفيدينا
            ومشاركتنا الاستفسارات والاقتراحات والشكاوي
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroContact;