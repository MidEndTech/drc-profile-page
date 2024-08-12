import React from "react";
import Paragraph from "../../SharedComponents/Paragraph";
import Heading from "../../SharedComponents/Heading";
import BackHero from "/assets/ProjectsSection/BackHero.svg";

function HeroSection() {
  return (
    <div
      className="relative overflow-hidden  bg-cover bg-no-repeat p-12"
      style={{
        backgroundImage: `url(${BackHero})`,
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="bg-dark-green/80 absolute inset-0 h-full w-full flex flex-col justify-center p-10 ">
          <Heading className="text-primary">مشاريعنا</Heading>
          <Paragraph className="text-white  mt-4">
            في دار الرحمة، نقدم خدمات هندسية شاملة تشمل التصميم، الإشراف، وإدارة
            المشاريع، ملتزمين بأعلى معايير الجودة والسلامة. بفضل فريقنا الخبير،
            نجحنا في تنفيذ مشاريع متميزة تعزز مكانتنا كشركة رائدة.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
