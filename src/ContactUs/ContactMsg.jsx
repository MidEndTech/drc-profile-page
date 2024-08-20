import React from "react";
import ContactEmail from "../Icons/ContactEmail";
import ContactNumber from "../Icons/ContactNumber";

function ContactMsg() {
  return (
    <div className="m-4 md:mt-9">
      <h1 className="font-[700] text-[36px] text-[#223A39]">نسعد بخدمتكم</h1>
      <p className="md:w-[376px] h-[182px] font-[400] text-[24px] text-[#223A39]">
        نفخر بالخبرة والكفاءة التي يتمتع بها فريقنا الهندسي، وندعم جاهدين لتوفير
        أفضل تجربة ممكنة لعملائنا الأعزاء.
      </p>

      <div className="flex flex-col lg:flex-row md:justify-between md:w-[387px] md:h-[40px]">
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
    </div>
  );
}

export default ContactMsg;
