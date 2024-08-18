import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 4000);
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
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="news" element={<NewsPage />}>
          <Route index element={<AllNews />} />
          <Route path=":id" element={<CompleteNews />} />
        </Route>
        <Route path="contactus" element={<ContactUsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="founder" element={<FounderInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
