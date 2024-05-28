import React from "react";
import "../styles/galleryItem.css";
import { Dispatch, SetStateAction } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface GalleryItemProps {
  imgData: StaticImageData;
  id: string;
  name: string;
  index: number;
  updateActivePage: Dispatch<SetStateAction<number>>;
  // setAnimation: Dispatch<SetStateAction<string>>;
}

function GalleryItem(props: GalleryItemProps) {
  function handleClick() {
    // console.log({ id });
    props.updateActivePage(props.index);
  }

  return (
    <div className="grid-item">
      <Image
        className="grid-item-image"
        src={props.imgData}
        alt={props.name}
        onClick={() => handleClick()}
      />
      <p className="artname">{props.name}</p>
    </div>
  );
}

export default GalleryItem;
