import React from "react";

import FooterLogo from "/assets/FooterSection/FooterLogo.svg";
import Barcode from "/assets/FooterSection/Barcode.svg";
import BackGroundGold from "/assets/FooterSection/BackGroundGold.svg";

import WhatsAppIcon from "../Icons/WhatsAppIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import MapIcon from "../Icons/MapIcon";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import LocationIcon from "../Icons/LocationIcon";

function Footer() {
  return (
    <>
      <footer className="relative text-center w-full mt-12 ">
        <div
          style={{ backgroundImage: `url(${BackGroundGold})` }}
          className="w-full h-full absolute opacity-[13%] bg-contain"
        ></div>

        <div className="bg-[#836651]/20 z-10 font-Bolds mx-auto w-full pt-5 bg-contain h-full lg:grid lg:grid-cols-4 lg:gap-10 lg:justify-items-center">
          <div className="flex justify-center mt-6 lg:flex-col">
            <img src={FooterLogo} alt="" className="w-[267px] h-[47px]" />
          </div>

          <div className="lg:flex lg:flex-row lg:items-start lg:col-span-2">
            <div className="mt-8 mx-5 lg:flex lg:flex-col lg:justify-center">
              <h1 className="text-center mb-2 text-[30px] font-[700] text-[#223A39] lg:text-start lg:mb-2 ">
                العنوان
              </h1>
              <ul>
                <li className="flex justify-start text-justify text-[20px] font-[600] text-[#737373] lg:text-start lg:mb-2">
                  <div className="ml-2">
                    <LocationIcon />
                  </div>
                  دار الرحمة للاستشارات، شارع التوفيق، حي الجامعة، مكة المكرمة،
                  المملكة العربية السعودية
                </li>
                <li className="flex justify-start text-justify mt-3 text-[20px] font-[600] text-[#737373] lg:justify-start ">
                  <div className="ml-2">
                    <MapIcon />
                  </div>
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
                  <div className="ml-2">
                    <PhoneIcon />
                  </div>
                  <span dir="ltr">+966 012 527 3014</span>
                </li>
                <li className="text-[20px] font-[600] text-[#737373] flex  justify-start lg:justify-start">
                  <div className="ml-2">
                    <EmailIcon />
                  </div>
                  info@DRconsultancy.sa
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:flex lg:flex-col justify-center mt-8 lg:mt-3 p-5">
            <div className="flex justify-center">
              <img src={Barcode} alt="" />
            </div>

            <div className="flex justify-center mr-[120px] mb-2">
              <WhatsAppIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;