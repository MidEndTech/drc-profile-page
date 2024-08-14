import React from "react";

import "./style.css";
function Splash() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img
        src="/assets/Splash/Logo1.png"
        className="cube w-[100px] sm:w-[200px] md:w-[300px] lg:w-[400px] "
      />
      <img
        src="/assets/Splash/green.svg"
        className="text w-[120px] sm:w-[150px] md:w-[190px] lg:w-[200px]"
      />
    </div>
  );
}

export default Splash;
