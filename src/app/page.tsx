"use client";
import Image from "next/image";
import useLockBodyScroll from "@/hooks/adjustScrollBar";
import gif from "../assets/home/NE.gif";
import "@/styles/home.css";

export default function Home() {
  useLockBodyScroll();
  return (
    <div className="homeIllustration-container">
      <Image className="homeIllustration" src={gif} alt="korean gif" />
    </div>
  );
}
