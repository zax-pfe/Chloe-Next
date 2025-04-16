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
        <h1 className="about-title">
          My work is a continuous exploration of new characters and stories
        </h1>

        <p className="about-text">
          My artistic journey has evolved over the years, beginning with
          animated film and transitioning into ceramics. After completing my
          master’s in animated film in Ghent, I first moved to France to study
          ceramics, and later established my studio in Brussels.
        </p>

        <p className="about-text">
          My work is a continuous exploration of new characters and stories,
          ranging from ponies to birds and from palm trees to dogs. Inspired by
          nature and imagination, my ceramic creations reflect this endless
          quest. Visitors are invited to immerse themselves in a world that
          feels both familiar and strange, where imagination comes to life.
        </p>
      </div>
    </motion.div>
  );
}
