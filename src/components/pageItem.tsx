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

interface PageItemProps {
  index: number;
}

function PageItem(props: PageItemProps) {
  const router = useRouter();
  const artwork = artlist[props.index];
  console.log(`artwork ${artwork.name}`);
  return (
    <div className="pageItem-container">
      <div className="top-container test">
        <Image
          className="icon"
          src={crossIcon}
          alt="cross icon"
          onClick={() => router.back()}
        />
      </div>
      <div className="main-container test">
        <div className="main-container-item test"></div>
        <div className="main-container-item test bg-amber-500">
          <div className="main-container-sub-item test bg-lime-400">
            <Image className="icon" src={arrow_left} alt="arrow icon" />
          </div>
          <div className="main-container-image test">
            <Image
              className="main-image"
              src={artwork.cover}
              alt={`cover ${artwork.name}`}
            />
          </div>
          <div className="main-container-sub-item test bg-blue-500">
            <Image className="icon" src={arrow_right} alt="arrow icon" />
          </div>
        </div>
        <div className="main-container-item test"></div>
      </div>
      <div className="bot-container test">
        <div className="bot-item description test"></div>
        <div className="bot-item thumbnail-container test"></div>
        <div className="bot-item placeholder test"></div>
      </div>
    </div>
  );
}

export default PageItem;
