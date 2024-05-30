"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItem.css";
import crossIcon from "../../public/icons/x.png";
import arrow_left from "../../public/icons/arrow-left.png";
import arrow_right from "../../public/icons/arrow-right.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Thumbnails from "./thumbnails";

interface PageItemProps {
  index: number;
  setVisiblePage: Dispatch<SetStateAction<boolean>>;
  index_max: number;
}

function PageItem(props: PageItemProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const router = useRouter();
  const artwork = artlist[props.index];
  console.log(`artwork ${artwork.name}`);
  const [activeImage, setActiveImage] = useState(artwork.cover);
  const index_max_thumbnail = artwork.thumbnail.length;
  console.log(index_max_thumbnail);

  function handleCloseClick() {
    props.setVisiblePage(false);
  }

  function handleNextClick() {
    setActiveThumbnail(activeThumbnail + 1);
    setActiveImage(artwork.thumbnail[activeThumbnail + 1]);
  }

  function handlePrevClick() {
    setActiveThumbnail(activeThumbnail - 1);
    setActiveImage(artwork.thumbnail[activeThumbnail - 1]);
  }

  return (
    <div className={"pageItem-container"}>
      <div className="top-container test">
        <Image
          className="icon"
          src={crossIcon}
          alt="cross icon"
          onClick={() => handleCloseClick()}
        />
      </div>
      <div className="main-container test">
        <div className="main-container-item test"></div>
        <div className="main-container-item test">
          <div className="main-container-sub-item test">
            {activeThumbnail > 0 && (
              <Image
                className="icon"
                src={arrow_left}
                alt="arrow icon"
                onClick={() => handlePrevClick()}
              />
            )}
          </div>
          <div className="main-container-image test">
            <Image
              className="main-image"
              src={activeImage}
              alt={`cover ${artwork.name}`}
            />
          </div>
          <div className="main-container-sub-item test">
            {activeThumbnail < index_max_thumbnail - 1 && (
              <Image
                className="icon"
                src={arrow_right}
                alt="arrow icon"
                onClick={() => handleNextClick()}
              />
            )}
          </div>
        </div>
        <div className="main-container-item test"></div>
      </div>
      <div className="bot-container test">
        <div className="bot-item description test">
          <p>{artwork.name}</p>
          <p>{artwork.materiaux}</p>
          <p>{artwork.date}</p>
          <p>{artwork.dimensions}</p>
        </div>
        <div className="bot-item thumbnail-container test">
          <Thumbnails
            thumbnailList={artwork.thumbnail}
            setActiveImage={setActiveImage}
            setActiveThumbnail={setActiveThumbnail}
            activeThumbnail={activeThumbnail}
          />
        </div>
        <div className="bot-item placeholder test"></div>
      </div>
    </div>
  );
}

export default PageItem;
