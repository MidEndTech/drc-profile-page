import React from "react";
import drcContactLogo from '/assets/ContactUs/drcContactLogo.svg'


function ContactMsg() {
  return (
    <div className="m-4  md:mt-9 relative">
      <h1 className="font-[700] text-[36px] text-[#223A39]">نسعد بخدمتكم</h1>
      <p className="md:w-[376px] md:h-[182px] font-[400] text-[24px] text-[#223A39]">
        نفخر بالخبرة والكفاءة التي يتمتع بها فريقنا الهندسي، وندعم جاهدين لتوفير
        أفضل تجربة ممكنة لعملائنا الأعزاء.
      </p>

      <img src={drcContactLogo} alt="" className="absolute lg:bottom-[190px] lg:left-[200px] bottom-[115px] left-[180px]"/>


    </div>
  );
}

export default ContactMsg;
