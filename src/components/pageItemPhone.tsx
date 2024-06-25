"use client";
import { useEffect } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItemPhone.css";
import { Dispatch, SetStateAction } from "react";
import { CrossIcon } from "./icons";
// import ImageSlider from "./imageSlider";
import ImageSlider from "@/components/imageSliderShadcn";

interface PageItemProps {
  index: number;
  setVisiblePage: Dispatch<SetStateAction<boolean>>;
  index_max: number;
}

function PageItemPhone(props: PageItemProps) {
  const artwork = artlist[props.index];
  function handleCloseClick() {
    props.setVisiblePage(false);
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={"pageItem-container-phone"}>
      <div className="button-container">
        <div className="button" onClick={() => handleCloseClick()}>
          <CrossIcon hover="icon-nohover" />
        </div>
      </div>
      <div className="main-container-phone">
        <ImageSlider imageslist={artwork.thumbnail} />
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
