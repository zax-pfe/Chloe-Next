"use client";
import React, { useState, useEffect } from "react";
// import { artlist } from "../data/artlist";
import GalleryItem from "./galleryItem";
import "../styles/gallery.css";
import { motion, AnimatePresence } from "framer-motion";
import PageItem from "./pageItem";
import PageItemPhone from "./pageItemPhone";
import useDevice from "../app/utils/detectDevice";
import { findAllArtworks } from "@/actions";

interface Artwork {
  name: string;
  cover: string;
}

function Gallery() {
  const [visible, setVisible] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [artlist, setArtlist] = useState<Artwork[]>([]);
  const index_max = artlist.length;
  const [loading, setLoading] = useState(true);

  const device = useDevice();

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: { y: 30, opacity: 0 },
  };
  // useEffect(() => {
  //   async function fetchArtworks() {
  //     const artworks = await findAllArtworks();
  //     setArtlist(artworks);
  //     setLoading(false);
  //   }

  //   fetchArtworks();
  // }, []);

  return (
    <div>
      <div className="grid-container">
        {artlist.map(({ name, cover }, index) => (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
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
            {device === "phone" ? (
              <PageItemPhone
                index={activePage}
                setVisiblePage={setVisible}
                index_max={index_max}
              />
            ) : (
              <PageItem
                index={activePage}
                setVisiblePage={setVisible}
                index_max={index_max}
              />
            )}
            ;
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
