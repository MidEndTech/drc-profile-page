import { useState, useEffect } from "react";

const useSplashScreen = (timeout = 2500) => {
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
      await waitForImages(); // Wait for all images to load
      await new Promise((resolve) => setTimeout(resolve, timeout)); // Ensure the splash screen shows for at least `timeout` ms
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
  }, [timeout]);

  return loading;
};

export default useSplashScreen;
