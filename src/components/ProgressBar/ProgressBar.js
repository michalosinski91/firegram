import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="fg-progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}