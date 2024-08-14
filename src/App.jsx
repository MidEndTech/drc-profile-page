import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import Splash from "./SharedComponents/SplashScreen/Splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/Splash" element={<Splash />} /> */}
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="splash" element={<Splash />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
