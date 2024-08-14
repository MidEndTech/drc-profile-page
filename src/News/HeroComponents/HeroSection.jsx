import Heading from "../../SharedComponents/Heading";

function HeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen flex flex-col items-center gap-4 justify-center bg-[url('/assets/News/HeroSection/News-Hero.svg')] bg-cover bg-center">
        <Heading className="text-white">أخبار دار الرحمة</Heading>
        <input
          type="text"
          placeholder="ابحث في اخر الاخبار ..."
          className="rounded-full p-2 md:pl-10 pr-6 shadow shadow-black/25 border-none outline-0 focus:outline-0"
        />
      </div>
    </div>
  );
}

export default HeroSection;
