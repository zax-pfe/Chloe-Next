"use client";
import Link from "next/link";
import "../styles/exhibition.css";
import Image from "next/image";
import { exhibitionlist } from "@/data/exhibitionList";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ExhibitionItem from "./exhibitionItem";

export default function Exhibition() {
  return (
    <div className="exhibition-container">
      {exhibitionlist.map(
        ({ name, id, cover, dates, lieu, descriptions }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            key={name}
          >
            <ExhibitionItem
              imgData={cover}
              name={name}
              id={id}
              index={index}
              dates={dates}
              lieu={lieu}
              descriptions={descriptions}
            />
          </motion.div>
        )
      )}
    </div>
  );
}
