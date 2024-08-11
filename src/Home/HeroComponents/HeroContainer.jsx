import data from "./field.json";
import "./hero.css";

// eslint-disable-next-line react/prop-types
function HeroContainer({ currentIndex, children }) {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center ">
      <img
        key={currentIndex}
        src={data[currentIndex].bigPicture}
        className={`absolute inset-0 w-full h-full object-cover object-center ${
          currentIndex % 2 === 0
            ? "kenburns-top-right"
            : "kenburns-top-right-reverse"
        } `}
      />
      {children}
    </div>
  );
}

export default HeroContainer;
