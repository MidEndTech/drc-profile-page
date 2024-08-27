import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./SharedComponents/NavBar/NavBar";
import Footer from "./SharedComponents/Footer";
import SplashImp from "./SharedComponents/SplashScreen/SplashImp";

// Import all pages directly
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import NewsPage from "./Pages/NewsPage";
import CompleteNews from "./News/NewsComponents/CompleteNews";
import AllNews from "./News/NewsComponents/AllNews";
import FounderInfo from "./AboutUs/FounderComponents/FounderInfo";
import ContactUsPage from "./Pages/ContactUsPage";
import NetworkDetails from "./Projects/NetwrokComponents/NetworkDetails";
import ErrorPage from "./Pages/ErrorPage";

// Wrap HomePage with SplashImp
const HomePageWithSplash = SplashImp(HomePage);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePageWithSplash />} />
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
  );
}

export default App;
