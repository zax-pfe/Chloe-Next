"use client";

import Link from "next/link";
import "../styles/navbar.css";
import Image from "next/image";
import clsx from "clsx";
import NavLinks from "./navlinks";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(`pathname ${pathname}`);
  return (
    <div className={"navbar-container"}>
      <div className="sub-container logo-container">
        <Link href="/">Chloe Girten</Link>
      </div>
      <div className="sub-container links-container">
        {/* <Link className="nav-item" href="/about">
          About
        </Link>
        <Link className="nav-item" href="/gallery">
          Gallery
        </Link>

        <Link className="nav-item" href="/exhibitions">
          Exhibitions
        </Link>
        <Link className="nav-item" href="/contact">
          Contact
        </Link> */}
        <NavLinks />
      </div>
    </div>
  );
}
