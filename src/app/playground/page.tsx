"use client";

import ImageSlider from "@/components/imageSliderShadcn";

import { artlist } from "@/data/artlist";
export default function Page() {
  const artworkImages = artlist[3].thumbnail;

  return <ImageSlider imageslist={artworkImages} />;
}
