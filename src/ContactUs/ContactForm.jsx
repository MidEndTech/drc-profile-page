import React, { useRef } from "react";
import Label from "../SharedComponents/Label";

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
  }

  return (
    <div className="lg:ml-[2%] pt-5 lg:pt-0">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify ">
          <Label>* الإسم الكامل</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-lg shadow-[#00000026] border-none pr-5"
            type="text"
            name=""
            id=""
            placeholder="الإسم الكامل"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* البريد الإلكتروني</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name=""
            id=""
            placeholder="البريد الإلكتروني"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* عنوان الرسالة</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name=""
            id=""
            placeholder="عنوان الرسالة"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* الرسالة</Label>
          <textarea
            className="pt-3 font-[400] text-[18px] mx-[2%] md:mx-0 h-[190px] md:w-[742px] md:h-[254px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            name=""
            id=""
            placeholder="الرسالة..."
          ></textarea>
        </div>

        <div className="my-7 mx-4 flex justify-center md:flex md:justify-start lg:mr-[3%]">
          <button className="border w-[180px] h-[59px] rounded-[64px] bg-[#9D6636] hover:bg-[#8a592e] text-[#FFFFFF] font-[700] text-[20px]">
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;