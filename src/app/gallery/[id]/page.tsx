"use client";
import PageItem from "@/components/pageItem";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Inner from "@/components/layout/Inner";

interface ArtworksPageItem {
  params: {
    id: number;
  };
}

export default function Page(props: ArtworksPageItem) {
  const index = props.params.id;
  const [visiblePage, setVisiblePage] = useState(true);

  return (
    <Inner>
      <PageItem index={index} setVisiblePage={setVisiblePage} />;
    </Inner>
    // <AnimatePresence>
    //   {visiblePage && (
    //     <motion.div
    //       className={`pageItem-container`}
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       exit={{ opacity: 0, y: 50 }}
    //     >
    //       <div>
    //         {" "}
    //         {`artwork : ${index}`}
    //         <PageItem index={index} setVisiblePage={setVisiblePage} />;
    //       </div>
    //     </motion.div>
    //   )}
    // </AnimatePresence>
  );
}
