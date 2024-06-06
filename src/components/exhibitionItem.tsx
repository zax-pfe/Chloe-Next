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
  id: string;
  dates: string;
  lieu: string;
  descriptions: string[];

  // setActivePage: Dispatch<SetStateAction<number>>;
  // setVisible: Dispatch<SetStateAction<boolean>>;
}

function ExhibitionItem(props: ExhibitionItemProps) {
  return (
    <Link href={`/exhibitions/${props.id}`} legacyBehavior>
      <div className="exhibitionItem-container test">
        <div className="exhibitionImage-container">
          <Image
            className="exhibitionImage"
            src={props.imgData}
            alt={props.name}
          />
        </div>
        <div className="exhibitionDescription">
          <div className="general">
            <h1 className="exhibition name">{props.name}</h1>
            <p className="exhibition dates">{props.dates}</p>
            <p className="exhibition description">{props.descriptions[0]}</p>
          </div>
          <div className="lieurelou">
            <p className="exhibition lieu">{props.lieu}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExhibitionItem;
