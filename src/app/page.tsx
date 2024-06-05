"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import NavbarPhone from "@/components/navbar-phone";
import { useEffect } from "react";
import useLockBodyScroll from "@/hooks/AdjustScrollBar";

export default function Home() {
  useLockBodyScroll();
  return <div>home</div>;
}
