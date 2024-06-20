"use client";
import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItem.css";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Thumbnails from "./thumbnails";
import { ArrowNextIcon, ArrowPrevIcon, CrossIcon } from "../components/icons";

interface PageItemProps {
  index: number;
  setVisiblePage: Dispatch<SetStateAction<boolean>>;
  index_max: number;
}

function PageItem(props: PageItemProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const artwork = artlist[props.index];
  const [activeImage, setActiveImage] = useState(artwork.cover);
  const index_max_thumbnail = artwork.thumbnail.length;

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "";
    };
  }, []);

  function handleCloseClick() {
    props.setVisiblePage(false);
  }

  function handleNextClick() {
    setActiveThumbnail((prev) => prev + 1);
    setActiveImage(artwork.thumbnail[activeThumbnail + 1]);
  }

  function handlePrevClick() {
    setActiveThumbnail((prev) => prev - 1);
    setActiveImage(artwork.thumbnail[activeThumbnail - 1]);
  }

  return (
    <div className="pageItem-container">
      <div className="top-container">
        <div onClick={handleCloseClick}>
          <CrossIcon hover="icon" />
        </div>
      </div>
      <div className="main-container">
        <div className="main-container-item"></div>
        <div className="main-container-item">
          <div className="main-container-sub-item">
            {activeThumbnail > 0 && (
              <div onClick={handlePrevClick}>
                <ArrowPrevIcon hover="icon" />
              </div>
            )}
          </div>
          <div className="main-container-image">
            <Image
              className="main-image"
              src={activeImage}
              alt={`cover ${artwork.name}`}
            />
          </div>
          <div className="main-container-sub-item">
            {activeThumbnail < index_max_thumbnail - 1 && (
              <div onClick={handleNextClick}>
                <ArrowNextIcon hover="icon" />
              </div>
            )}
          </div>
        </div>
        <div className="main-container-item"></div>
      </div>
      <div className="bot-container">
        <div className="bot-item description">
          <p>{artwork.name}</p>
          <p>{artwork.materiaux}</p>
          <p>{artwork.date}</p>
          <p>{artwork.dimensions}</p>
        </div>
        <div className="bot-item thumbnail-container">
          <Thumbnails
            thumbnailList={artwork.thumbnail}
            setActiveImage={setActiveImage}
            setActiveThumbnail={setActiveThumbnail}
            activeThumbnail={activeThumbnail}
          />
        </div>
        <div className="bot-item placeholder"></div>
      </div>
    </div>
  );
}

export default PageItem;
