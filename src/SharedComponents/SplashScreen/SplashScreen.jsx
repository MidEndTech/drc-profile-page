import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import "./style.css";

const SplashScreen = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      document.body.style.overflow = "hidden"; 

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
        await waitForImages(); // Ensure all images load
        await new Promise((resolve) => setTimeout(resolve, 2500)); 
        setLoading(false);
        document.body.style.overflow = "auto"; 
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
        <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
          <WrappedComponent {...props} />
        </div>
        {loading && (
          <div className="splash-overlay">
            <Splash />
          </div>
        )}
      </>
    );
  };
};

export default SplashScreen;
