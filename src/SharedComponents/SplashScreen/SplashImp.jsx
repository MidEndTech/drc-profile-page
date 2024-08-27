import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import "./style.css"; // Ensure the CSS is applied

const SplashImp = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      document.body.style.overflow = "hidden"; // Prevent scrolling while loading

      const waitForImages = async () => {
        const images = document.querySelectorAll("img");
        const promises = Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(promises);
      };

      const handleLoading = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500)); 
        await waitForImages(); 
        setLoading(false);
        document.body.style.overflow = "auto"; // Allow scrolling after loading
      };

      if (document.readyState === "complete") {
        handleLoading();
      } else {
        window.addEventListener("load", handleLoading);
      }

      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("load", handleLoading);
      };
    }, []);

    return (
      <>
        {loading ? (
          <Splash />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default SplashImp;
