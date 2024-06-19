import tabouret1 from "../../imgs/tabouret_chien1.jpg";
import tabouret2 from "../../imgs/tabouret_chien2.jpg";
import tabouret3 from "../../imgs/tabouret_chien3.jpg";
import tabouret4 from "../../imgs/tabouret_chien4.jpg";
import tabouret5 from "../../imgs/tabouret_chien5.jpg";

import ImageSlider from "@/components/imageSlider";
import "../../styles/imageSlider.css";

const IMAGES = [tabouret1, tabouret2, tabouret3, tabouret4, tabouret5];

export default function sliderPage() {
  return (
    <div className="imageslider-container">
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
