"use client";
import { useEffect } from "react";

const useLockBodyScroll = (device: string) => {
  useEffect(() => {
    if (device === "desktop") {
      document.body.style.paddingRight = "17px";

      return () => {
        document.body.style.paddingRight = "";
      };
    }
  }, [device]);
};

export default useLockBodyScroll;
