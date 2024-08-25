import React from "react";
import { useEffect } from "react";
import "./style.css";

function Splash() {
  useEffect(() => {
    document.title = "دار الرحمة للإستشارات";
  }, []);

  return (
    <div className="splash-screen">
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          src="/assets/Splash/Logo1.png"
          className="cube w-[130px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
          alt="Logo"
        />
        <img
          src="/assets/Splash/green.svg"
          className="text w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] pl-10"
          alt="Green"
        />
      </div>
    </div>
  );
}

export default Splash;