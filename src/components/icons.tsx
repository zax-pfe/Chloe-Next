import Image from "next/image";
import arrow_right from "../../public/icons/arrow-right.png";
import arrow_left from "../../public/icons/arrow-left.png";
import crossIcon from "../../public/icons/x.png";
import returnIcon from "../../public/icons/return.png";
import "../styles/icons.css";

interface IconProps {
  hover: string;
}

export function ArrowNextIcon() {
  return <Image className="icon" src={arrow_right} alt="arrow icon" />;
}

export function ArrowPrevIcon() {
  return <Image className="icon" src={arrow_left} alt="arrow icon" />;
}

export function CrossIcon() {
  return <Image className="icon" src={crossIcon} alt="cross icon" />;
}

export function ReturnIcon(props: IconProps) {
  return (
    <Image className={`${props.hover}`} src={returnIcon} alt="return icon" />
  );
}
