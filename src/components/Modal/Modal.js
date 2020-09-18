import React from "react";

import { motion } from "framer-motion";

export default function Modal({ selectedImg, setSelectedImg }) {
  function handleClick(e) {
    e.target.classList.contains("fg-modal") ? setSelectedImg(null) : null;
  }

  return (
    <motion.div
      className="fg-modal"
      onClick={(e) => handleClick(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        className="fg-modal__image"
        src={selectedImg.url}
        alt="photo"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
}
