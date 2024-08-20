import React, { useReducer, useRef } from "react";
import Label from "../SharedComponents/Label";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidateField from "./Functions/ValidateField"; 
import SendEmail from "./Functions/SendEmail";  

function ContactForm() {
  const form = useRef();

  const initialState = {
    user_name: "",
    user_email: "",
    user_message_title: "",
    user_message: "",
    errors: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initialState;
      case "setErrors":
        return { ...state, errors: action.errors };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = ValidateField(name, value);
    dispatch({
      type: "input",
      field: name,
      value: value,
    });
    dispatch({
      type: "setErrors",
      errors: newErrors,
    });
  };

  const handleSubmit = (e) => {
    SendEmail(e, form, state, dispatch);
  };

  return (
    <div className="lg:ml-[2%] pt-5 lg:pt-0">
      <ToastContainer  className={"mt-5 text-end w-[90%] md:w-1/5 font-bold"}/>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <Label>* الإسم الكامل</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-lg shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_name"
            value={state.user_name}
            onChange={handleChange}
            placeholder="الإسم الكامل"
            required
          />
        </div>

        <div className="flex flex-col">
          <Label>* البريد الإلكتروني</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="email"
            name="user_email"
            value={state.user_email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            required
          />
        </div>
        {state.errors.user_email && (
          <p
            className="mr-[2%] mt-[2%] text-lg font-bol"
            style={{ color: "red", textAlign: "start" }}
          >
            {state.errors.user_email}
          </p>
        )}

        <div className="flex flex-col">
          <Label>* عنوان الرسالة</Label>
          <input
            className="font-[400] text-[18px] mx-[2%] h-[55px] md:mx-0 md:w-[742px] md:h-[71px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            type="text"
            name="user_message_title"
            value={state.user_message_title}
            onChange={handleChange}
            placeholder="عنوان الرسالة"
            required
          />
        </div>

        <div className="flex flex-col">
          <Label>* الرسالة</Label>
          <textarea
            className="pt-3 font-[400] text-[18px] mx-[2%] md:mx-0 h-[190px] md:w-[742px] md:h-[254px] rounded-[32px] shadow-md shadow-[#00000026] border-none pr-5"
            name="user_message"
            value={state.user_message}
            onChange={handleChange}
            placeholder="الرسالة..."
            required
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