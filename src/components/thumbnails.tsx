"use client";

import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useState } from "react";
import "../styles/thumbnail.css";
import { Thumbnail_interface } from "@/actions";

interface ThumbnailProps {
  thumbnailList?: Thumbnail_interface[]; // Rendu optionnel avec ?
  setActiveImage: Dispatch<SetStateAction<string>>; // Changé de StaticImageData à string
  setActiveThumbnail: Dispatch<SetStateAction<number>>;
  activeThumbnail: number;
}

export default function Thumbnails(props: ThumbnailProps) {
  function handleClick(thumbnailImage: string, index: number) {
    props.setActiveImage(thumbnailImage);
    props.setActiveThumbnail(index);
  }
  return (
    <div className="thumbnail-container">
      {props.thumbnailList?.map((thumbnailImage, index) => (
        <Image
          src={thumbnailImage.url}
          blurDataURL="blur"
          key={index}
          alt={`thumbnailImage-${index}`}
          width={200}
          height={200}
          onClick={() => handleClick(thumbnailImage.url, index)}
          className={`thumbnail ${
            index === props.activeThumbnail ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
}
