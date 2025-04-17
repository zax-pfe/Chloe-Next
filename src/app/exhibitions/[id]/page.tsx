"use client";
import { exhibitionlist } from "@/data/exhibitionList";
import { notFound } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import "../../../styles/exhibitionPage.css";
import Image from "next/image";
import { findExhibitionByName } from "@/actions";
import { useEffect, useState } from "react";
import { Exhibition_interface } from "@/actions";
import { PortableText } from "next-sanity";

interface ExhibitionProps {
  params: {
    id: string;
  };
}

export default function Page(props: ExhibitionProps) {
  const [exhibition, setExhibition] = useState<Exhibition_interface | null>(
    null
  );

  useEffect(() => {
    async function fetchExhibitionByName() {
      const decodedName = decodeURIComponent(props.params.id);
      console.log("Fetching exhibition with name:", decodedName);
      const exhibition_found = await findExhibitionByName(decodedName);
      setExhibition(exhibition_found);
    }

    fetchExhibitionByName();
  }, [props.params.id]);

  const exhibition_id = props.params.id;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="ExDescriptions">
          <h1 className="ExName">{exhibition?.name}</h1>
          <p className="para ExDate">{exhibition?.dates}</p>
          <p className="para Exlieu">{exhibition?.lieu}</p>

          {exhibition?.description.map((element, index) => (
            <p className="para ExInfos" key={index}>
              <PortableText value={element} />
            </p>
          ))}
        </div>
      </motion.div>

      <div className="ExImages-container">
        {exhibition?.images?.map((images, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            className="ExImage-frame"
          >
            <Image
              className="ExImage"
              src={images.url}
              alt="picture from the exhibition"
              height={images.height}
              width={images.width}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
