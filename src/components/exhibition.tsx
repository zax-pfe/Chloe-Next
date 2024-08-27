"use client";
import Link from "next/link";
import "../styles/exhibition.css";
import Image from "next/image";
import { exhibitionlist } from "@/data/exhibitionList";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ExhibitionItem from "./exhibitionItem";

const exhibitionVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hidden: { y: 30, opacity: 0 },
};

export default function Exhibition() {
  return (
    <div className="exhibition-container">
      {exhibitionlist.map(
        ({ name, id, cover, dates, lieu, descriptions }, index) => (
          <motion.div
            variants={exhibitionVariants}
            initial="hidden"
            whileInView="visible"
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
