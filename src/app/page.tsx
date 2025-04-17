"use client";
import Image from "next/image";
import gif from "../assets/home/NE.gif";
import "@/styles/home.css";
import useLockBodyScroll from "@/hooks/adjustScrollBar";
import useDevice from "@/app/utils/detectDevice";
import { redirect } from "next/navigation";

export default function Home() {
  const device = useDevice();
  useLockBodyScroll(device);
  redirect("/about");
  return (
    <div className="homeIllustration-container">
      <Image className="homeIllustration" src={gif} alt="korean gif" />
    </div>
  );
}
