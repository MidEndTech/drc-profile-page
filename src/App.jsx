import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./SharedComponents/NavBar/NavBar";
import Footer from "./SharedComponents/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import Splash from "./SharedComponents/SplashScreen/Splash";
import NewsPage from "./Pages/NewsPage";
import CompleteNews from "./News/NewsComponents/CompleteNews";
import AllNews from "./News/NewsComponents/AllNews";
import FounderInfo from "./AboutUs/FounderComponents/FounderInfo";
import ContactUsPage from "./Pages/ContactUsPage";
import NetworkDetails from "./Projects/NetwrokComponents/NetworkDetails";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Increase the timeout to give more time for the homepage to load
      setTimeout(() => setLoading(false));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading && <Splash />}
        <div style={{ display: loading ? 'none' : 'block' }}>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<NetworkDetails />} />
            <Route path="news" element={<NewsPage />}>
              <Route index element={<AllNews />} />
              <Route path=":id" element={<CompleteNews />} />
            </Route>
            <Route path="contactus" element={<ContactUsPage />} />
            <Route path="founder" element={<FounderInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;