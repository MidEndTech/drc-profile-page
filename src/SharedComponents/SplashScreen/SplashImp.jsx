import React, { useState, useEffect } from "react";
import Splash from "./Splash";

const SplashImp = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Add the no-scroll class immediately to prevent scrolling
      document.body.style.overflow = "hidden";

      const checkAllAssetsLoaded = () => {
        return document.readyState === "complete";
      };

      const handleLoading = async () => {
        if (checkAllAssetsLoaded()) {
          await new Promise((resolve) => setTimeout(resolve, 2500));
          setLoading(false);
          document.body.style.overflow = "auto";
        } else {
          window.requestAnimationFrame(handleLoading);
        }
      };

      window.addEventListener("load", handleLoading);

      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("load", handleLoading);
      };
    }, []);

    return loading ? <Splash /> : <WrappedComponent {...props} />;
  };
};

export default SplashImp;
