import React, { useState } from "react";
import Title from "./components/Title/Title";
import UploadForm from "./components/UploadForm/UploadForm";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="fg">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
