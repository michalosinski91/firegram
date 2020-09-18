import React from "react";
import useFirestore from "../../hooks/useFirestore";

import { motion } from "framer-motion";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");

  return (
    <div className="fg-image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="fg-image-grid__image-container"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc);
            }}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              className="fg-image-grid__image"
              src={doc.url}
              alt="photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
