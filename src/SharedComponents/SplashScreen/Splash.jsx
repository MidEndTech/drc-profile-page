import React, { useEffect } from "react";
import "./style.css";

function Splash() {
  useEffect(() => {
    document.title = "دار الرحمة للإستشارات";
  }, []);

  return (
    <div className="splash-overlay">
      <div className="splash-content">
        <img
          src="/assets/Splash/Logo1.png"
          className="cube w-[130px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
        />
        <img
          src="/assets/Splash/green.svg"
          className="text w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] pl-10"
        />
      </div>
    </div>
  );
}

export default Splash;