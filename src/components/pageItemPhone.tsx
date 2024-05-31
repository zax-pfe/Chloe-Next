"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItemPhone.css";
import { Dispatch, SetStateAction } from "react";
import { ArrowNextIcon, ArrowPrevIcon, CrossIcon } from "./icons";
import Image from "next/image";

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

  function handleNextClick() {
    setActiveThumbnail(activeThumbnail + 1);
    setActiveImage(artwork.thumbnail[activeThumbnail + 1]);
  }

  function handlePrevClick() {
    console.log("ok");
    setActiveThumbnail(activeThumbnail - 1);
    setActiveImage(artwork.thumbnail[activeThumbnail - 1]);
  }
  function handleClik(index: number) {
    setActiveThumbnail(index);
    setActiveImage(artwork.thumbnail[index]);
  }
  return (
    <div className={"pageItem-container"}>
      <div className="button-container">
        {activeThumbnail > 0 ? (
          <div className="button" onClick={() => handlePrevClick()}>
            <ArrowPrevIcon />
          </div>
        ) : (
          <div className="button" />
        )}

        {activeThumbnail < index_max_thumbnail - 1 ? (
          <div className="button" onClick={() => handleNextClick()}>
            <ArrowNextIcon />
          </div>
        ) : (
          <div className="button" />
        )}
        <div className="button" onClick={() => handleCloseClick()}>
          <CrossIcon />
        </div>
      </div>
      <div className="main-container-phone">
        <Image
          className="main-image-container-phone"
          src={activeImage}
          alt={`cover ${artwork.name}`}
        />
        <div className="dots-container">
          {artwork.thumbnail.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClik(index)}
              className={`dot ${index === activeThumbnail ? "active" : ""}`}
            ></div>
          ))}
        </div>
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
