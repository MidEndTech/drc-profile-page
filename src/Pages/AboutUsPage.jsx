import AboutSection from "../AboutUs/HeroComponents/AboutSection";
import WorkTeamContainer from "../AboutUs/WorkTeamComponents/WorkTeamContainer";
import Vision from "../AboutUs/VisionComponents/Vision";
import Founder from "../AboutUs/FounderComponents/Founder";

function AboutUsPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutSection />
      <WorkTeamContainer/>
      <Vision />
      <Founder />
    </div>
  );
}

export default AboutUsPage;
