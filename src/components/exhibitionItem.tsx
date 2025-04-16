import "../styles/exhibitionItem.css";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface ExhibitionItemProps {
  imgData: string;
  name: string;
  index: number;
  date: string;
  lieu: string;
  description: PortableTextBlock[];

  // setActivePage: Dispatch<SetStateAction<number>>;
  // setVisible: Dispatch<SetStateAction<boolean>>;
}

function ExhibitionItem(props: ExhibitionItemProps) {
  return (
    <Link href={`/exhibitions/${props.name}`} legacyBehavior>
      <div className="exhibitionItem-container">
        <div className="exhibitionImage-container">
          <Image
            className="exhibitionImage"
            src={props.imgData}
            alt={props.name}
            blurDataURL="blur"
            width={200}
            height={200}
          />
        </div>
        <div className="exhibitionDescription">
          <div className="general">
            <h1 className="exhibition name">{props.name}</h1>
            <p className="exhibition dates">{props.date}</p>
            <p className="exhibition description">
              <PortableText value={props.description[0]} />
            </p>
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
