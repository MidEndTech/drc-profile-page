import { Outlet } from "react-router";
import HeroSection from "../News/HeroComponents/HeroSection";
import { useEffect } from "react";

function NewsPage() {
  useEffect(() => {
    document.title = "أخبارنا";
  }, []);
  return (
    <div className="bg-[#F5F5F5] pb-[270px]">
      <HeroSection />
      <div className="w-10/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default NewsPage;
