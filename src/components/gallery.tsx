"use client";
import React, { useState, useEffect } from "react";
import { artlist } from "../data/artlist";
import GalleryItem from "./galleryItem";
import "../styles/gallery.css";

function Gallery() {
  return (
    <div>
      <div className="grid-container">
        {artlist.map(({ name, cover }, index) => (
          <div key={name}>
            <GalleryItem imgData={cover} name={name} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
