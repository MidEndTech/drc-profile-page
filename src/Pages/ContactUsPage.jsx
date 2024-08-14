import React from "react";
import HeroContact from "../ContactUs/HeroContact";
import ContactForm from "../ContactUs/ContactForm";
import ContactAndMap from "../ContactUs/ContactAndMap";

function ContactUsPage() {
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
