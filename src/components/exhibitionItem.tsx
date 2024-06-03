import "../styles/exhibitionItem.css";
import { Dispatch, SetStateAction } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { Prosto_One } from "next/font/google";

interface ExhibitionItemProps {
  imgData: StaticImageData;
  name: string;
  index: number;
  // setActivePage: Dispatch<SetStateAction<number>>;
  // setVisible: Dispatch<SetStateAction<boolean>>;
}

function ExhibitionItem(props: ExhibitionItemProps) {
  return (
    <Link href={`/exhibitions/${props.name}`} scroll={false} legacyBehavior>
      <div className="exhibitionItem-container test">
        <div className="exhibitionImage-container test">
          <Image
            className="exhibitionImage"
            src={props.imgData}
            alt={props.name}
          />
        </div>
        <div className="exhibitionDescription test">
          <h1>{props.name}</h1>
          <p>{props.index}</p>
        </div>
      </div>
    </Link>
  );
}

export default ExhibitionItem;
