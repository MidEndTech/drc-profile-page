import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Label from "../SharedComponents/Label";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    const notifySuccess = () => toast.success("Success!");
    const notifyErorr = () => toast.error("Somthing went wrong... ");

    emailjs
      .sendForm("service_yry6fox", "template_s4uawbj", form.current, {
        publicKey: "bPbqjyFjfjDLvLNQZ",
      })
      .then(
        () => {
          notifySuccess()
        },
        (error) => {
          notifyErorr()
        }
      );
  };

  return (
    <div className="lg:ml-[2%] pt-5 lg:pt-0">
              <ToastContainer />

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify ">
          <Label>* الإسم الكامل</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-lg shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_name"
            id=""
            placeholder="الإسم الكامل"
            required
          />
        </div>

        <div className=" flex flex-col">
          <Label>* البريد الإلكتروني</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_email"
            id=""
            placeholder="البريد الإلكتروني"
            required
          />
        </div>

        <div className=" flex flex-col">
          <Label>* عنوان الرسالة</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_message_title"
            id=""
            placeholder="عنوان الرسالة"
            required
          />
        </div>

        <div className=" flex flex-col">
          <Label>* الرسالة</Label>
          <textarea
            className="pt-3 font-[400] text-[18px] mx-[2%] md:mx-0 h-[190px] md:w-[742px] md:h-[254px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            name="user_message"
            id=""
            placeholder="الرسالة..."
            required
          ></textarea>
        </div>

        <div className="my-7 mx-4 flex justify-center md:flex md:justify-start lg:mr-[3%]">
          <button
            className="border w-[180px] h-[59px] rounded-[64px] bg-[#9D6636] hover:bg-[#8a592e] text-[#FFFFFF] font-[700] text-[20px]"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;