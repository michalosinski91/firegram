import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  function handleInvalidUpload() {
    setFile(null), setError("Please select a valid file type - PNG or JPEG");
  }

  function handleUpload(file) {
    setError(null);
    setFile(file);
  }

  function handleChange(e) {
    let selected = e.target.files[0];
    selected && types.includes(selected.type)
      ? handleUpload(selected)
      : handleInvalidUpload();
  }

  return (
    <form className="fg-upload-form">
      <label className="fg-upload-form__label">
        <input
          className="fg-upload-form__input"
          type="file"
          onChange={handleChange}
        />
        <span>+</span>
      </label>
      <div className="fg-upload-form__output">
        {error && <div className="fg-upload-form__error">{error}</div>}
        {file && <div className="fg-upload-form__file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
