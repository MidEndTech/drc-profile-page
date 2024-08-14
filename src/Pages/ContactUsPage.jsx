import React from "react";
import HeroContact from "../ContactUs/HeroContact";
import ContactForm from "../ContactUs/ContactForm";
import ContactAndMap from "../ContactUs/ContactAndMap";
import { useEffect } from "react";

function ContactUsPage() {
  useEffect(()=>{
    document.title = "تواصل معنا"
  },[])
  return (
    <div>
      <HeroContact />
      <div className="lg:flex justify-around">
        <ContactAndMap />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUsPage;
