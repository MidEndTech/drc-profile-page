import ServicesSliderContainer from "../Services/ServicesSliderComponenets/ServicesSliderContainer";
import HeroSection from "../Services/HeroComponents/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.title = "خدماتنا";
  }, []);
  return (
    <div className="mt-[115px] pb-36">
      <HeroSection />
      <ServicesSliderContainer />
    </div>
  );
}

export default ServicesPage;
