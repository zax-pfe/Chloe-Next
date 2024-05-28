import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItem.css";
import crossIcon from "../../public/icons/x.png";
import arrow_left from "../../public/icons/arrow-left.png";
import arrow_right from "../../public/icons/arrow-right.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface PageItemProps {
  index: number;
  index_max: number;
  updateActivePage: Dispatch<SetStateAction<number>>;
}

function PageItem(props: PageItemProps) {
  function handleCloseClick() {
    props.updateActivePage(0);
  }

  return (
    <div className="pageItem-container">
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
            <Image className="icon" src={arrow_left} alt="arrow icon" />
          </div>
          <div className="main-container-image test"></div>
          <div className="main-container-sub-item test">
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
