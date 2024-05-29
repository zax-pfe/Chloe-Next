import "../styles/galleryItem.css";
import { Dispatch, SetStateAction } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface GalleryItemProps {
  imgData: StaticImageData;
  name: string;
  index: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

function GalleryItem(props: GalleryItemProps) {
  function handleClick() {
    props.setActivePage(props.index);
    props.setVisible(true);
  }

  return (
    <div className="grid-item">
      {/* <Link href={`/gallery/${props.index}`} scroll={false} legacyBehavior> */}
      <Image
        className="grid-item-image"
        src={props.imgData}
        alt={props.name}
        onClick={() => handleClick()}
      />
      {/* </Link> */}
      <p className="artname">{props.name}</p>
    </div>
  );
}

export default GalleryItem;
