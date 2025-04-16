"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "../styles/carouselSchadCn.css";
import { Thumbnail_interface } from "@/actions";

// interface ImageSliderProps {
//   imageslist: StaticImageData[];
// }

interface ImageSliderProps {
  thumbnailList?: Thumbnail_interface[];
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function ImageSlider(props: ImageSliderProps) {
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

  console.log(` Element list ${props.thumbnailList}`);

  return (
    <div className="image-slider-container">
      <Carousel setApi={setApi} className="carousel-container">
        <CarouselPrevious />
        <CarouselContent>
          {props.thumbnailList?.map((thumbnailImage, index) => (
            <CarouselItem key={index} className="carousel-item">
              <Image
                key={index}
                src={thumbnailImage.url}
                alt="slider image"
                className="img-slider-img"
                width={200}
                height={200}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <div className="dots-container">
        {props.thumbnailList?.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === current - 1 ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
