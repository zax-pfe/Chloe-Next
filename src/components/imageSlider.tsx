"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "../styles/imageSlider.css";
import { ArrowNextIcon, ArrowPrevIcon, CrossIcon } from "../components/icons";

interface ImageSliderProps {
  imageUrls: StaticImageData[];
}

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    setActiveThumbnail(activeThumbnail - 1);
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -scrollerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    setActiveThumbnail(activeThumbnail + 1);

    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: scrollerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleScroll = () => {
      if (scroller) {
        const scrollPosition = scroller.scrollLeft;
        const imageWidth = scroller.clientWidth;
        const index = Math.round(scrollPosition / imageWidth);

        if (scrollPosition > prevScrollLeft) {
          // Défilement vers la droite
          setActiveThumbnail(index);
        } else if (scrollPosition < prevScrollLeft) {
          // Défilement vers la gauche
          setActiveThumbnail(index);
        }

        setPrevScrollLeft(scrollPosition);
      }
    };

    if (scroller) {
      scroller.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, [prevScrollLeft]);

  return (
    <div>
      <div className="ImageSlider">
        <div className="button-container-slider">
          {activeThumbnail === 0 ? null : (
            <button className="img-slider-button" onClick={scrollLeft}>
              <ArrowPrevIcon hover="icon-nohover" />
            </button>
          )}
        </div>

        <div className="Scroller" ref={scrollerRef}>
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt="slider image"
              className="img-slider-img"
            />
          ))}
        </div>

        <div className="button-container-slider">
          {activeThumbnail === imageUrls.length - 1 ? null : (
            <button className="img-slider-button" onClick={scrollRight}>
              <ArrowNextIcon hover="icon-nohover" />
            </button>
          )}
        </div>
      </div>

      <div className="dots-container">
        {imageUrls.map((item, index) => (
          <div
            key={index}
            className={`dot ${index === activeThumbnail ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
