"use client";

import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useState } from "react";
import "../styles/thumbnail.css";

interface ThumbnailProps {
  thumbnailList: StaticImageData[];
  setActiveImage: Dispatch<SetStateAction<StaticImageData>>;
  setActiveThumbnail: Dispatch<SetStateAction<number>>;
  activeThumbnail: number;
}

export default function Thumbnails(props: ThumbnailProps) {
  function handleClick(thumbnailImage: StaticImageData, index: number) {
    props.setActiveImage(thumbnailImage);
    props.setActiveThumbnail(index);
  }
  return (
    <div className="thumbnail-container">
      {props.thumbnailList.map((thumbnailImage, index) => (
        <Image
          src={thumbnailImage}
          key={index}
          alt={`thumbnailImage-${index}`}
          onClick={() => handleClick(thumbnailImage, index)}
          className={`thumbnail ${
            index === props.activeThumbnail ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
}
