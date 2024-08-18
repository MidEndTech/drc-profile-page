import ServicesSliderContainer from "../Services/ServicesSliderComponenets/ServicesSliderContainer";
import HeroSection from "../Services/HeroComponents/HeroSection";
import { useEffect } from "react";

function ServicesPage() {
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
