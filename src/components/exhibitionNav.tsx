"use client";
import "../styles/exhibitionNav.css";
import Link from "next/link";
import { ReturnIcon } from "./icons";
import { useState, useEffect } from "react";

function ExhibitionNav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <div className={`exhibition-navbar test  ${scroll ? "sticky" : ""}`}>
      <Link href="/exhibitions/" scroll={false}>
        <div>
          <ReturnIcon />
          <div>exhibitions</div>
        </div>
      </Link>
    </div>
  );
}
export default ExhibitionNav;
