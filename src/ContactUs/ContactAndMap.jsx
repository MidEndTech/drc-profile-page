import React from "react";
import ContactEmail from "../Icons/ContactEmail";
import ContactNumber from "../Icons/ContactNumber";
import drcMap from "/assets/ContactUs/drcMap.svg";
import "./ContactStyle.css";
import ContactMsg from "./ContactMsg";

function ContactAndMap() {
  return (
    <div className="flex flex-col lg:justify-between">
      <div className="hidden lg:block">
        <ContactMsg />
      </div>

      <div className="flex flex-col lg:flex-row md:justify-between md:w-[387px] md:h-[40px] mt-7 mr-[3%] lg:mr-[2%] md:mt-0">
        <div className="flex justify-between items-center w-[200px] h-[40px]">
          <ContactEmail />
          <div>
            <p className="text-[#9D6636]">الايميل</p>
            <p>info@DRconsultancy.sa</p>
          </div>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <ContactNumber />
          <div className="mr-3">
            <p className="text-[#9D6636]">الجوال</p>
            <p dir="ltr">+966 012 527 3014</p>
          </div>
        </div>
      </div>

      <div className="lg:mt-[60px] md:mt-40 m-4 mt-[60px]">
        <h1 className="text-[#223A39] text-[36px] font-[700] mb-5 md:mb-0">
          موقعنا
        </h1>
        <a
          href="https://www.google.com/maps/place/%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D8%A9+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9%E2%80%AD/@21.4033848,39.8661955,15z/data=!4m6!3m5!1s0x15c20440b31baf15:0x8de235b1301dbc58!8m2!3d21.3984702!4d39.8776968!16s%2Fg%2F11ggb2vbyx?authuser=0&entry=ttu"
          target="_blank"
        >
          <img src={drcMap} alt="" id="map" />
        </a>
      </div>
    </div>
  );
}

export default ContactAndMap;
