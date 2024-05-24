"use client";

import Link from "next/link";
import "../styles/gallerynavlinks.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "About", href: "/about" },
  {
    name: "Gallery",
    href: "/gallery/ceramics",
  },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("nav-item", {
              "nav-item active": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
