"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import "../styles/imageSlider.css";

interface ImageSliderProps {
  imageUrls: StaticImageData[];
}

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="ImageSlider">
      <div className="button-container test">
        <button className="img-slider-button" onClick={showPrevImage}>
          <ArrowBigLeft />
        </button>
      </div>

      <div className="Scroller test">
        {imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="tabouret"
            className="img-slider-img"
          />
        ))}
      </div>

      <div className="button-container test">
        <button className="img-slider-button" onClick={showNextImage}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}
