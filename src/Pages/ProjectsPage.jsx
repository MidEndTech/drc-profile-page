import HeroSection from "../Projects/HeroComponents/HeroSection";
import Network from "../Projects/NetwrokComponents/Network";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.title = "المشاريع";
  }, []);
  return (
    <div className="pb-36">
      <HeroSection />
      <Network />
    </div>
  );
}

export default ProjectsPage;
