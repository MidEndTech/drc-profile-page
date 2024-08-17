import HeroSection from "../Home/HeroComponents/HeroSection";
import About from "../../src/Home/AboutComponents/About";
import Entites from "../../src/Home/EntittesComponents/Entites";
import Association from "../../src/Home/AssociationComponents/Association";
import Projects from "../Home/ProjectsComponents/Projects";
import Founder from "../AboutUs/FounderComponents/Founder";
import DistinguishesUs from "../Home/DistinguishesUsComponents/DistinguishesUs";
import { useEffect } from "react";


function HomePage() {

  useEffect(()=>{
    document.title = "الصفحة الرئيسية"
  },[])

  return (
    <div>
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
