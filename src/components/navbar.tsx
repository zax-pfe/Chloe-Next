"use client";

import Link from "next/link";
import "../styles/navbar.css";
import NavLinks from "./navlinks";
import useDevice from "@/app/utils/detectDevice";
import PhoneDrawer from "./phoneDrawer";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const device = useDevice();

  return (
    <div className={"navbar-container"}>
      <div className="sub-container logo-container">
        <Link href="/">Chloe Girten</Link>
      </div>
      {device === "desktop" ? (
        <div className="sub-container links-container">
          <NavLinks />
        </div>
      ) : (
        <div className="phoneDrawer-container">
          <PhoneDrawer color="black" />
        </div>
      )}
    </div>
  );
}
