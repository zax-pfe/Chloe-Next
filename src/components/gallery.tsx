"use client";
import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import GalleryItem from "./galleryItem";
// import PageItem from "./pageItem";
// import PageItemPhone from "./pageItemPhone";
// import PageItemFlex from "./PageItemFlex";
import "../styles/gallery.css";
import PageItem from "./pageItem";

interface GalleryProps {
  filter: string;
}

function Gallery(props: GalleryProps) {
  const [activePage, updateActivePage] = useState(0);
  const temp = 1;

  return (
    <div>
      {activePage === 0 ? (
        <div className="grid-container" id="gallery">
          {artlist.map(({ name, id, cover }, index) => (
            <div key={name}>
              <GalleryItem
                imgData={cover}
                id={id}
                name={name}
                index={index}
                updateActivePage={updateActivePage}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <PageItem
            index={temp}
            index_max={temp}
            updateActivePage={updateActivePage}
          />

          <div className="grid-container" id="gallery">
            {artlist.map(({ name, id, cover }, index) => (
              <div key={name}>
                <GalleryItem
                  imgData={cover}
                  id={id}
                  name={name}
                  index={index}
                  updateActivePage={updateActivePage}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
