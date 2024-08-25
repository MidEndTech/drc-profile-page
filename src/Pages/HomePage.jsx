import HeroSection from "../Home/HeroComponents/HeroSection";
import About from "../../src/Home/AboutComponents/About";
import Entites from "../../src/Home/EntittesComponents/Entites";
import Association from "../../src/Home/AssociationComponents/Association";
import Projects from "../Home/ProjectsComponents/Projects";
import DistinguishesUs from "../Home/DistinguishesUsComponents/DistinguishesUs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.title = "الصفحة الرئيسية";
  }, []);

  return (
    <div className="pb-36">
      <HeroSection />
      <About />
      <DistinguishesUs />
      <Projects />
      <Association />
      <Entites />
    </div>
  );
}

export default HomePage;
