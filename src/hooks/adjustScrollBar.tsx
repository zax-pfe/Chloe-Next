"use client";
import { useEffect } from "react";

const useLockBodyScroll = () => {
  useEffect(() => {
    document.body.style.paddingRight = "17px";

    return () => {
      document.body.style.paddingRight = "";
    };
  }, []);
};

export default useLockBodyScroll;
