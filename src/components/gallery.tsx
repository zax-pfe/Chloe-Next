"use client";
import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import GalleryItem from "./galleryItem";
import "../styles/gallery.css";
import { motion, Variants, AnimatePresence } from "framer-motion";
import PageItem from "./pageItem";
import PageItemPhone from "./pageItemPhone";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0.5,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

let mql = window.matchMedia("(max-width: 600px)");

function Gallery() {
  const [visible, setVisible] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const index_max = artlist.length;

  return (
    <div>
      <div className="grid-container">
        {artlist.map(({ name, cover }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            key={name}
          >
            <GalleryItem
              imgData={cover}
              name={name}
              index={index}
              setActivePage={setActivePage}
              setVisible={setVisible}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            className={`pageItem-container`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <PageItemPhone
              index={activePage}
              setVisiblePage={setVisible}
              index_max={index_max}
            />
            ;
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
