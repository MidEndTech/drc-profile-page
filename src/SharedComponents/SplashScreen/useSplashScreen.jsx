import { useState, useEffect } from "react";

const useSplashScreen = (timeout = 2500) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
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
