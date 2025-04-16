"use client";
import { useEffect, useState } from "react";
import { artlist } from "../data/artlist";
import "../styles/pageItemPhone.css";
import { Dispatch, SetStateAction } from "react";
import { CrossIcon } from "./icons";
// import ImageSlider from "./imageSlider";
import ImageSlider from "@/components/imageSliderShadcn";
import { Artwork } from "@/actions";
import { findArtworkByName } from "@/actions";

interface PageItemProps {
  // index: number;
  name: string;
  setVisiblePage: Dispatch<SetStateAction<boolean>>;
  index_max: number;
}

function PageItemPhone(props: PageItemProps) {
  const [artlist, setArtlist] = useState<Artwork | null>(null);

  // const artwork = artlist[props.index];
  function handleCloseClick() {
    props.setVisiblePage(false);
  }
  useEffect(() => {
    async function fetchArtworks() {
      const artwork = await findArtworkByName(props.name);
      setArtlist(artwork);
    }

    fetchArtworks();
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
        <ImageSlider thumbnailList={artlist?.thumbnail} />
      </div>
      <div className="description-phone">
        <p>{artlist?.name}</p>
        <p>{artlist?.materiaux}</p>
        <p>{artlist?.date}</p>
        <p>{artlist?.dimensions}</p>
      </div>
    </div>
  );
}

export default PageItemPhone;
