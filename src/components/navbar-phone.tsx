"use client";
import Link from "next/link";
import "../styles/navbar-phone.css";
import Image from "next/image";
import burgerIcon from "../../public/icons/menu.png";
import crossIcon from "../../public/icons/x.png";
import { useState } from "react";

export default function NavbarPhone() {
  const [burgerState, setBurgerState] = useState("closed");
  const [menuAnimation, setMenuAnimation] = useState("");

  function handleClick() {
    if (burgerState === "open") {
      setMenuAnimation("slide-out");
      setTimeout(() => setMenuAnimation(""), 300);
      setTimeout(() => setBurgerState("closed"), 300);
    } else {
      setBurgerState("open");
      setMenuAnimation("slide-in");
      setTimeout(() => setMenuAnimation(""), 300);
    }
    console.log(` burger state: ${burgerState}`);
  }
  return (
    <div>
      <div className={"navbar-container-phone"}>
        <div className="sub-container-phone logo-container-phone">
          <Link href="/">Chloe Girten</Link>
        </div>

        <div className="sub-container-phone hamburger-container">
          {burgerState === "open" ? (
            <Image
              className="icon"
              src={crossIcon}
              alt="burger icon"
              onClick={handleClick}
            />
          ) : (
            <Image
              className="icon"
              src={burgerIcon}
              alt="x icon"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {burgerState === "open" ? (
        <div className={`menu-phone ${menuAnimation}`}>
          <Link className="menu-item" href="/about">
            About
          </Link>
          <Link className="menu-item" href="/gallery">
            Gallery
          </Link>

          <Link className="menu-item" href="/exhibitions">
            Exhibitions
          </Link>
          <Link className="menu-item" href="/contact">
            Contact
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
