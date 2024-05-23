import Link from "next/link";
import "../styles/navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={"navbar-container"}>
      <div className="sub-container logo-container">
        <Link href="/">Chloe Girten</Link>
      </div>
      <div className="sub-container links-container">
        <Link className="nav-item" href="/about">
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
        </Link>
      </div>
    </div>
  );
}
