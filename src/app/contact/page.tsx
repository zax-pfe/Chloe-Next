// "use client";
// import useLockBodyScroll from "@/hooks/adjustScrollBar";
// import useDevice from "@/app/utils/detectDevice";
// import "../../styles/contact.css";

// export default function ContactPage() {
//   const device = useDevice();
//   useLockBodyScroll(device);

//   return <div>{/* <PageItem index={1} index_max={2} /> */}</div>;
// }

"use client";
import useLockBodyScroll from "@/hooks/adjustScrollBar";
import useDevice from "@/app/utils/detectDevice";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../styles/contact.css";

export default function ContactPage() {
  const device = useDevice();
  useLockBodyScroll(device);
  const [hoverInsta, setHoverInsta] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-content"
      >
        <h1 className="contact-title">Contact</h1>

        <div className="contact-items">
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoverInsta(true)}
            onHoverEnd={() => setHoverInsta(false)}
          >
            <Link
              href="https://www.instagram.com/chloe.girten"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Instagram
                size={32}
                className={`contact-icon ${hoverInsta ? "contact-icon-hover" : ""}`}
              />
              <span className="contact-text">chloe.girten</span>
            </Link>
          </motion.div>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoverMail(true)}
            onHoverEnd={() => setHoverMail(false)}
          >
            <Link href="mailto:chlo.girten@gmail.com" className="contact-link">
              <Mail
                size={32}
                className={`contact-icon ${hoverMail ? "contact-icon-hover" : ""}`}
              />
              <span className="contact-text">chlo.girten@gmail.com</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
