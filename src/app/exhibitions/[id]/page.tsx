"use client";
import { exhibitionlist } from "@/data/exhibitionList";
import { notFound } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import "../../../styles/exhibitionPage.css";
import Image from "next/image";
import { findExhibitionByName } from "@/actions";

interface ExhibitionProps {
  params: {
    name: string;
  };
}

function findExhibitionById(exhibitionId: string) {
  const exhibition = exhibitionlist.find(
    (exhibition) => exhibition.id === exhibitionId
  );

  if (exhibition) {
    return exhibition;
  } else {
    return notFound();
  }
}

export default function Page(props: ExhibitionProps) {
  const exhibition_id = props.params.id;
  const exhibitionDetails = findExhibitionById(exhibition_id);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="ExDescriptions">
          <h1 className="ExName">{exhibitionDetails.name}</h1>
          <p className="para ExDate">{exhibitionDetails.dates}</p>
          <p className="para Exlieu">{exhibitionDetails.lieu}</p>

          {exhibitionDetails.descriptions.map((element, index) => (
            <p className="para ExInfos" key={index}>
              {element}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="ExImages-container">
        {exhibitionDetails.images.map((image, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            className="ExImage-frame"
          >
            <Image
              className="ExImage"
              src={image}
              alt="picture from the exhibition"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
