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
    // Add the no-scroll class immediately to prevent scrolling
    document.body.style.overflow = "hidden";

    const checkAllAssetsLoaded = () => {
      return document.readyState === "complete";
    };

    const waitForImages = async () => {
      const images = document.querySelectorAll("img");
      const promises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
    };

    const handleLoading = async () => {
      if (checkAllAssetsLoaded()) {
        try {
          await waitForImages();
          await new Promise((resolve) => setTimeout(resolve, 2500));
          setLoading(false);
          document.body.style.overflow = "auto";
        } catch (error) {
          console.error("Error loading images:", error);
          setLoading(false);
          document.body.style.overflow = "auto";
        }
      } else {
        window.requestAnimationFrame(handleLoading);
      }
    };

    window.addEventListener("load", handleLoading);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("load", handleLoading);
    };
  }, []);
  return (
    <>
      {loading && <Splash />}
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
