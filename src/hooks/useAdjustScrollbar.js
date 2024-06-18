// hooks/useAdjustScrollbar.js

import { useEffect } from "react";

export default function useAdjustScrollbar() {
  useEffect(() => {
    function adjustScrollbar() {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-gap",
        `${scrollbarWidth}px`
      );
    }

    adjustScrollbar();
    window.addEventListener("resize", adjustScrollbar);

    return () => {
      window.removeEventListener("resize", adjustScrollbar);
    };
  }, []);
}
