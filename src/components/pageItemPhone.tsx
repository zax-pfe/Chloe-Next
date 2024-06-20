"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItemPhone.css";
import { Dispatch, SetStateAction } from "react";
import { ArrowNextIcon, ArrowPrevIcon, CrossIcon } from "./icons";
import Image from "next/image";
import ImageSlider from "./imageSlider";

interface PageItemProps {
  index: number;
  setVisiblePage: Dispatch<SetStateAction<boolean>>;
  index_max: number;
}

function PageItemPhone(props: PageItemProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const router = useRouter();
  const artwork = artlist[props.index];
  console.log(`artwork ${artwork.name}`);
  const [activeImage, setActiveImage] = useState(artwork.cover);
  const index_max_thumbnail = artwork.thumbnail.length;

  function handleCloseClick() {
    props.setVisiblePage(false);
  }

  return (
    <div className={"pageItem-container"}>
      <div className="button-container">
        <div className="button" onClick={() => handleCloseClick()}>
          <CrossIcon hover="icon-nohover" />
        </div>
      </div>
      <div className="main-container-phone">
        <ImageSlider imageUrls={artwork.thumbnail} />
      </div>
      <div className="description-phone">
        <p>{artwork.name}</p>
        <p>{artwork.materiaux}</p>
        <p>{artwork.date}</p>
        <p>{artwork.dimensions}</p>
      </div>
    </div>
  );
}

export default PageItemPhone;
