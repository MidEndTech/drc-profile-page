import HeroSection from "../Home/HeroComponents/HeroSection";
import About from "../../src/Home/AboutComponents/About";
import Entites from "../../src/Home/EntittesComponents/Entites";
import Association from "../../src/Home/AssociationComponents/Association";
import Projects from "../Home/ProjectsComponents/Projects";
import Splash from "../SharedComponents/SplashScreen/Splash";

function HomePage() {
  return (
    <div>
<Splash/>
      <HeroSection />
      <About />
      <Projects />
      <Association />
      <Entites />
    </div>
  );
}

export default HomePage;
