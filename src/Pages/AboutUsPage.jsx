import AboutSection from "../AboutUs/HeroComponents/AboutSection";
import WorkTeamContainer from "../AboutUs/WorkTeamComponents/WorkTeamContainer";
import Vision from "../AboutUs/VisionComponents/Vision";
import Founder from "../AboutUs/FounderComponents/Founder";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUsPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.title = "من نحن";
  }, []);
  return (
    <div className="bg-[#F5F5F5] pb-36">
      <AboutSection />
      <Vision />
      <Founder />
      <WorkTeamContainer />
    </div>
  );
}

export default AboutUsPage;
