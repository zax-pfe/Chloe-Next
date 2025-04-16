import "../styles/galleryItem.css";
import { Dispatch, SetStateAction } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { findArtworkByName } from "@/actions";
import { Artwork } from "@/actions";

interface GalleryItemProps {
  // imgData: StaticImageData;
  imgData: string;
  name: string;
  index: number;
  setActivePage: Dispatch<SetStateAction<string>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
// interface Image {
//   url: string;
//   width: number;
//   height: number;
// }

// interface Artwork {
//   name: string;
//   cover: Image;
//   thumbnail: Image[];
//   materiaux: string;
//   dimensions: string;
//   date: string;
// }

function GalleryItem(props: GalleryItemProps) {
  function handleClick() {
    props.setActivePage(props.name);
    props.setVisible(true);
  }

  return (
    <div className="grid-item">
      {/* <Link href={`/gallery/${props.index}`} scroll={false} legacyBehavior> */}
      <Image
        className="grid-item-image"
        src={props.imgData}
        alt={props.name}
        onClick={() => handleClick()}
        blurDataURL="blur"
        width={200}
        height={200}
      />
      {/* </Link> */}
      <p className="artname">{props.name}</p>
    </div>
  );
}

export default GalleryItem;
