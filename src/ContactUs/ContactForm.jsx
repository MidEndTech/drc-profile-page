import React, { useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";
import Label from "../SharedComponents/Label";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  // THIS FORM FOR THE EMAIL.JS PUACKIG
  const form = useRef();

  //THE INITIAL VALUES OF FORMS INPUT
  const initialState = {
    user_name: "",
    user_email: "",
    user_message_title: "",
    user_message: "",
  };

  //REDUCER FUNCTIONS FOR REDUCER HOOK
  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //THIS HANDLE TO MAKE TYPE IN THE INPUT
  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value,
    });
  };

  //THIS FUNCTIONS FOR ON SUBMINT THE INPUT REST AND RETURN INITIAL VALUE
  const handleReset = () => {
    dispatch({ type: "reset" }); // Use the correct function name to reset the form state
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const notifySuccess = () => toast.success("Success!");
    const notifyErorr = () => toast.error("Somthing went wrong... ");

    emailjs
      .sendForm("service_yry6fox", "template_s4uawbj", form.current, {
        publicKey: "bPbqjyFjfjDLvLNQ",
      })
      .then(
        () => {
          notifySuccess();
          handleReset();
        },
        () => {
          notifyErorr();
        }
      );
  };

  return (
    <div className="lg:ml-[2%] pt-5 lg:pt-0">
        <ToastContainer className={"w-[290px]"} />

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify ">
          <Label>* الإسم الكامل</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-lg shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_name"
            value={state.user_name}
            onChange={handleChange}
            placeholder="الإسم الكامل"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* البريد الإلكتروني</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_email"
            value={state.user_email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* عنوان الرسالة</Label>

          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0  md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_message_title"
            value={state.user_message_title}
            onChange={handleChange}
            placeholder="عنوان الرسالة"
          />
        </div>

        <div className=" flex flex-col">
          <Label>* الرسالة</Label>
          <textarea
            className="pt-3 font-[400] text-[18px] mx-[2%] md:mx-0 h-[190px] md:w-[742px] md:h-[254px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            name="user_message"
            value={state.user_message}
            onChange={handleChange}
            placeholder="الرسالة..."
          ></textarea>
        </div>

        <div className="my-7 mx-4 flex justify-center md:flex md:justify-start lg:mr-[3%]">
          <button
            type="submit"
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
