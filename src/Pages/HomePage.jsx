
import About from "../../src/Home/AboutComponents/About";
import Entites from '../../src/Home/EntittesComponents/Entites'
import Association from "../../src/Home/AssociationComponents/Association"

function HomePage() {
  return <div>
    <About/>
    <Projects/>
    <Association/>
    <Entites/>
  </div>;
}

export default HomePage;
