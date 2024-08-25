import React from "react";
import HeroContact from "../ContactUs/HeroContact";
import ContactForm from "../ContactUs/ContactForm";
import ContactAndMap from "../ContactUs/ContactAndMap";
import { useEffect } from "react";
import ContactMsg from "../ContactUs/ContactMsg";

function ContactUsPage() {
  useEffect(() => {
    document.title = "تواصل معنا";
  }, []);
  return (
    <div className="bg-[#F5F5F5] pb-36">
      <HeroContact />
      <div className="lg:flex lg:flex-row-reverse justify-around ">
        <div className="lg:hidden block">
          <ContactMsg/>
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactAndMap />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
