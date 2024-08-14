import HeroSection from "../News/HeroComponents/HeroSection";
import PrimeNews from "../News/PrimeNewsComponents/PrimeNews";

function NewsPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />
      <div className="w-10/12 mx-auto">
        <PrimeNews />
      </div>
    </div>
  );
}

export default NewsPage;
