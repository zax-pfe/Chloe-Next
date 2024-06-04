import "../styles/exhibitionNav.css";
import Link from "next/link";
import { ReturnIcon } from "./icons";

function ExhibitionNav() {
  return (
    <div className={`exhibition-navbar  `}>
      <Link legacyBehavior href="/exhibitions/">
        <div className="flex cursor-pointer">
          <ReturnIcon hover="icon-nohover" />
          <div className="return-link">Exhibitions</div>
        </div>
      </Link>
    </div>
  );
}
export default ExhibitionNav;
