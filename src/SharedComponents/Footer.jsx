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
  return(
    <footer className="text-center w-full bg-[#836651]/20 flex md:h-[363px] mt-12">
    <div
      className="font-Bolds mx-auto w-full  bg-contain h-full md:grid md:grid-cols-4 md:gap-10 md:justify-items-center"
      style={{ backgroundImage: `url(${BackGroundGold})`}}
    >
      <div className="flex justify-center mt-6 md:flex-col">
        <img src={FooterLogo} alt="" className="w-[267px] h-[47px]" />
      </div>

      <div className="mt-8 mx-5 md:flex md:flex-col md:justify-center">
        <h1 className="text-center mb-2 text-[30px] font-[700] text-[#223A39] md:text-start md:mb-2 ">
          العنوان
        </h1>
        <ul>
          <li className="flex justify-center text-[20px] font-[600] text-[#737373] md:text-start md:mb-2">
            <div className="ml-2">
              <LocationIcon />
            </div>
            دار الرحمة للاستشارات، شارع التوفيق، حي الجامعة، مكة المكرمة،
            المملكة العربية السعودية
          </li>
          <li className="flex justify-center mt-3 text-[20px] font-[600] text-[#737373] md:justify-start ">
            <div className="ml-2">
              <MapIcon />
            </div>
            عرض خريطة الموقع
          </li>
        </ul>
      </div>

      <div className="mt-8 mx-5 md:flex md:flex-col md:justify-center">
        <h1 className="flex mb-2 justify-center text-[30px] font-[700] text-[#223A39] md:mb-2 md:justify-start">
          تواصل معنا{" "}
        </h1>
        <ul>
          <li className="text-[20px] font-[600] text-[#737373] flex  justify-center md:mb-2 md:justify-start">
            <div className="ml-2">
              <PhoneIcon />
            </div>
            <span dir="ltr">+966 012 527 3014</span>
          </li>
          <li className="text-[20px] font-[600] text-[#737373] flex  justify-center md:justify-start">
            <div className="ml-2">
              <EmailIcon />
            </div>
            info@DRconsultancy.sa
          </li>
        </ul>
      </div>

      <div className="md:flex md:flex-col justify-center mt-8 md:mt-3">
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
  );
}

export default Footer;
