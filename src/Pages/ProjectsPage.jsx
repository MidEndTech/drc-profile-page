import HeroSection from "../Projects/HeroComponents/HeroSection";
import Network from "../Projects/NetwrokComponents/Network";
import { useEffect } from "react";

function ProjectsPage() {
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
