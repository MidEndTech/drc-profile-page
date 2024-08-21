import React from "react";

import FooterLogo from "/assets/FooterSection/FooterLogo.svg";
import Barcode from "/assets/FooterSection/Barcode.svg";
import BackGroundGold from "/assets/FooterSection/BackGroundGold.svg";

import WhatsAppIcon from "./Icons/WhatsAppIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import MapIcon from "./Icons/MapIcon";
import EmailIcon from "./Icons/EmailIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import LocationIcon from "./Icons/LocationIcon";

function Footer() {
  return (
    <>
      <footer className="relative text-center w-full z-0">
        <div
          style={{ backgroundImage: `url(${BackGroundGold})` }}
          className="w-full h-full absolute opacity-[13%] bg-contain z-[-1]"
        ></div>

        <div className="bg-[#836651]/20 z-20 mx-auto w-full pt-5 bg-contain h-full lg:grid lg:grid-cols-4 lg:gap-10 lg:justify-items-center">
          <div className="flex justify-center mt-6 lg:flex-col">
            <img src={FooterLogo} alt="" className="w-[267px] h-[47px]" />
          </div>

          <div className="lg:flex lg:flex-row lg:items-start lg:col-span-2 z-10">
            <div className="mt-8 mx-5 lg:flex lg:flex-col lg:justify-center">
              <h1 className="text-center mb-2 text-[30px] font-[700] text-[#223A39] lg:text-start lg:mb-2 ">
                العنوان
              </h1>
              <ul>
                <li className="flex justify-start text-justify text-[20px] font-[600] text-[#737373] lg:text-start lg:mb-2">
                  <a
                    className="ml-2 hover:transform hover:-translate-y-1 duration-500"
                    href="https://www.google.com/maps/place/%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D8%A9+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9%E2%80%AD/@21.4033848,39.8661955,15z/data=!4m6!3m5!1s0x15c20440b31baf15:0x8de235b1301dbc58!8m2!3d21.3984702!4d39.8776968!16s%2Fg%2F11ggb2vbyx?authuser=0&entry=ttu"
                    target="_blank"
                  >
                    <LocationIcon />
                  </a>
                  دار الرحمة للاستشارات، شارع التوفيق، حي الجامعة، مكة المكرمة،
                  المملكة العربية السعودية
                </li>
                <li className="flex justify-start text-justify mt-3 text-[20px] font-[600] text-[#737373] lg:justify-start ">
                  <a
                    className="ml-2 hover:transform hover:-translate-y-1 duration-500"
                    href="https://www.google.com/maps/place/%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D8%A9+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9%E2%80%AD/@21.4033848,39.8661955,15z/data=!4m6!3m5!1s0x15c20440b31baf15:0x8de235b1301dbc58!8m2!3d21.3984702!4d39.8776968!16s%2Fg%2F11ggb2vbyx?authuser=0&entry=ttu"
                    target="_blank"
                  >
                    <MapIcon />
                  </a>
                  عرض خريطة الموقع
                </li>
              </ul>
            </div>

            <div className="mt-8 mx-5 lg:flex lg:flex-col lg:justify-center">
              <h1 className="flex mb-2 justify-center text-[30px] font-[700] text-[#223A39] lg:mb-2 lg:justify-start">
                تواصل معنا{" "}
              </h1>
              <ul>
                <li className="text-[20px] font-[600] text-[#737373] flex  justify-start lg:mb-2 lg:justify-start">
                  <a href="tel:+9660125273014" className="ml-2 hover:transform hover:-translate-y-1 duration-500">
                    <PhoneIcon />
                  </a>
                  <span dir="ltr">+966 012 527 3014</span>
                </li>
                <li className="text-[20px] font-[600] text-[#737373] flex  justify-start lg:justify-start">
                  <a href="mailto:info@DRconsultancy.sa" className="ml-2 hover:transform hover:-translate-y-1 duration-500">
                    <EmailIcon />
                  </a>
                  info@DRconsultancy.sa
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:flex lg:flex-col justify-center mt-8 lg:mt-3 p-5">
            <div className="flex justify-center">
              <img src={Barcode} alt="" />
            </div>

            <div className="flex justify-center mr-[120px] mb-2 z-10">
              <a
                href="#"
                className="hover:transform hover:-translate-y-1 duration-500"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="#"
                className="hover:transform hover:-translate-y-1 duration-500"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="hover:transform hover:-translate-y-1 duration-500"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;