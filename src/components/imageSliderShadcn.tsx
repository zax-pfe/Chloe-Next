"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "../styles/carouselSchadCn.css";
interface ImageSliderProps {
  imageslist: StaticImageData[];
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function ImageSlider({ imageslist }: ImageSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  // const [activeThumbnail, setActiveThumbnail] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="image-slider-container">
      <Carousel setApi={setApi} className="carousel-container">
        <CarouselPrevious />
        <CarouselContent>
          {imageslist.map((Images, index) => (
            <CarouselItem key={index} className="carousel-item">
              <Image
                key={index}
                src={Images}
                alt="slider image"
                className="img-slider-img"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <div className="dots-container">
        {imageslist.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === current - 1 ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
