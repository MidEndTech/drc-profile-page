import React, { useEffect, useState } from "react";
import HeroSection from "../Home/HeroComponents/HeroSection";
import About from "../../src/Home/AboutComponents/About";
import Entites from "../../src/Home/EntittesComponents/Entites";
import Association from "../../src/Home/AssociationComponents/Association";
import Projects from "../Home/ProjectsComponents/Projects";
import DistinguishesUs from "../Home/DistinguishesUsComponents/DistinguishesUs";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage({ isLoading }) {
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    document.title = "الصفحة الرئيسية";
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        AOS.init();
        AOS.refresh();
        setAnimationsReady(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className={`pb-36 home-page ${animationsReady ? 'animations-ready' : ''}`}>
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