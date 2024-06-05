"use client";
import { useEffect, useState } from "react";

const useLockBodyScroll = (device: string) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    // Function to calculate scrollbar width
    const calculateScrollbarWidth = () => {
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll"; // forcing scrollbar to appear
      document.body.appendChild(outer);

      const inner = document.createElement("div");
      outer.appendChild(inner);

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

      // Ensuring the parent node is not null before removing the child
      if (outer.parentNode !== null) {
        outer.parentNode.removeChild(outer);
      }
      return scrollbarWidth;
    };

    if (device === "desktop") {
      const width = calculateScrollbarWidth();
      setScrollbarWidth(width);

      document.body.style.paddingRight = `${width}px`;

      return () => {
        document.body.style.paddingRight = "";
      };
    }
  }, [device]);

  return scrollbarWidth; // Optional: return scrollbar width if needed elsewhere
};

export default useLockBodyScroll;
