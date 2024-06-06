"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about/aboutImage.jpg";
import "@/styles/about.css";
import { useEffect } from "react";

import useLockBodyScroll from "@/hooks/adjustScrollBar";
import useDevice from "@/app/utils/detectDevice";

export default function AboutPage() {
  const device = useDevice();
  useLockBodyScroll(device);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="about-container"
    >
      <Image
        className="image-about"
        src={aboutImage}
        alt="chloe la plus canon "
      />

      <div className="description-about">
        <h1 className="about-title">Quéquin qui essaye dentrer</h1>

        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium op Reprehenderit, quia. Quo neque error
          repudiandae fuga? Ipsa laudan
        </p>

        <p className="about-text">
          tio, eaque rerum! Provident similique accusantium nemo autem.
          Veritatis obcaecati tenetur iure eius earum ut molestias architecto
          voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
          sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
          quas aliquid.
        </p>
      </div>
    </motion.div>
  );
}
