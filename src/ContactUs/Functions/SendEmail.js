// sendEmail.js
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ValidateField from "./ValidateField";

const SendEmail = (e, form, state, dispatch) => {
  e.preventDefault();

  const errors = ValidateField("user_email", state.user_email);
  if (Object.keys(errors).length > 0) {
    dispatch({ type: "setErrors", errors });
    return;
  }

  const notifySuccess = () => toast.success("تم الإرسال بنجاح")
  const notifyError = () => toast.error("...حدث خطأ ما");

  emailjs
    .sendForm("service_yry6fox", "template_s4uawbj", form.current, {
      publicKey: "bPbqjyFjfjDLvLNQZ",
    })
    .then(
      () => {
        notifySuccess();
        dispatch({ type: "reset" }); 
      },
      () => {
        notifyError();
      }
    );
};

export default SendEmail;
