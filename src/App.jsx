import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import NewsPage from "./Pages/NewsPage";
import CompleteNews from "./News/NewsComponents/CompleteNews";
import AllNews from "./News/NewsComponents/AllNews";

function App() {
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
