import Link from "next/link";
import "../styles/gallerynav.css";
import Image from "next/image";

export default function GalleryNav() {
  return (
    <div className={"gallerynav-container"}>
      <Link className="gallerynav-item" href="/gallery/ceramics">
        Ceramics
      </Link>
      <Link className="gallerynav-item" href="/gallery/drawings">
        Drawings
      </Link>
    </div>
  );
}
