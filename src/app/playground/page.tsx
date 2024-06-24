"use client";

import "../../styles/testcarousel.css";
import ImageSlider from "@/components/imageSliderShadcn";

import { artlist } from "@/data/artlist";
export default function Page() {
  const artworkImages = artlist[0].thumbnail;

  return <ImageSlider imageslist={artworkImages} />;
}
