import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
