import React from "react";
import "../styles/galleryItem.css";
import { Dispatch, SetStateAction } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface GalleryItemProps {
  imgData: StaticImageData;
  name: string;
  index: number;
}

function GalleryItem(props: GalleryItemProps) {
  return (
    <div className="grid-item">
      <Link href={`/gallery/${props.index}`} scroll={false} legacyBehavior>
        <Image
          className="grid-item-image"
          src={props.imgData}
          alt={props.name}
        />
      </Link>
      <p className="artname">{props.name}</p>
    </div>
  );
}

export default GalleryItem;
