"use client";
import Link from "next/link";
import "../styles/exhibition.css";
import Image from "next/image";
import { exhibitionlist } from "@/data/exhibitionList";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ExhibitionItem from "./exhibitionItem";
import { useEffect, useState } from "react";
import { Exhibition_interface } from "@/actions";
import { findAllExhibitions } from "@/actions";
import { PortableTextBlock } from "sanity";

interface Exhibition {
  name: string;
  cover: string;
  description: PortableTextBlock[];
  date: string;
  lieu: string;
}

export default function Exhibition() {
  const [exhibitionList, setExhibitionList] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtworks() {
      const exhibitions = await findAllExhibitions();
      setExhibitionList(exhibitions);
      setLoading(false);
    }

    fetchArtworks();
  }, []);
  console.log(
    `Element of the exhibition ${JSON.stringify(exhibitionList[1]?.description[0])} <-`
  );
  return (
    <div className="exhibition-container">
      {exhibitionList.map(({ name, cover, date, lieu, description }, index) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          key={name}
        >
          <ExhibitionItem
            imgData={cover}
            name={name}
            index={index}
            date={date}
            lieu={lieu}
            description={description}
          />
        </motion.div>
      ))}
    </div>
  );
}
