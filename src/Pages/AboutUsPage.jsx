import AboutSection from "../AboutUs/HeroComponents/AboutSection";
import Vision from "../AboutUs/VisionComponents/Vision";
import Founder from "../AboutUs/FounderComponents/Founder";

function AboutUsPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutSection />
      <Vision />
      <Founder />
    </div>
  );
}

export default AboutUsPage;
