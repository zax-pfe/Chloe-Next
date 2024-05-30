import Image from "next/image";
import arrow_right from "../../public/icons/arrow-right.png";
import arrow_left from "../../public/icons/arrow-left.png";
import crossIcon from "../../public/icons/x.png";
import "../styles/icons.css";

export function ArrowNextIcon() {
  return <Image className="icon" src={arrow_right} alt="arrow icon" />;
}

export function ArrowPrevtIcon() {
  return <Image className="icon" src={arrow_left} alt="arrow icon" />;
}

export function CrossIcon() {
  return <Image className="icon" src={crossIcon} alt="cross icon" />;
}
