import React from "react";
import HeroContact from "../ContactUs/HeroContact";
import ContactForm from "../ContactUs/ContactForm";
import ContactAndMap from "../ContactUs/ContactAndMap";
import { useEffect } from "react";

function ContactUsPage() {
  useEffect(() => {
    document.title = "تواصل معنا";
  }, []);
  return (
    <div className="bg-[#F5F5F5]">
      <HeroContact />
      <div className="lg:flex lg:flex-row-reverse justify-around ">
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
