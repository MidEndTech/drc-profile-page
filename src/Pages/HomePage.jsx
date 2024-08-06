import About from "../../src/Home/AboutComponents/About";
import Entites from "../../src/Home/EntittesComponents/Entites";
import Association from "../../src/Home/AssociationComponents/Association";
import DistinguishesUs from "../Home/DistinguishesUsComponents/DistinguishesUs";
import { useEffect } from "react";

function HomePage() {

  useEffect(()=>{
    document.title = "الصفحة الرئيسية"
  },[])

  return (
    <div>
      {/* <About /> */}
      <DistinguishesUs />
      <Entites />
      <Association />
    </div>
  );
}

export default HomePage;
