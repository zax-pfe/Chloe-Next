import { useState, useEffect } from "react";

const useDevice = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const threshold = 768;
    const handleResize = () => {
      setDevice(window.innerWidth <= threshold ? "phone" : "desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useDevice;
