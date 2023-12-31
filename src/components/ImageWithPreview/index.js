import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";

const ImageWithPreview = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [altTitle, setAltTitle] = useState();

  const fileInputRef = useRef();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setAltTitle(e.target.files[0].name.split(".")[0]);
    }
  };

  const removeImage = () => {
    setSelectedImage("");
    fileInputRef.current.value = "";
  };

  return (
    <Card
      sx={{ maxWidth: 340 }}
      style={{
        padding: "20px",
        minHeight: "125px",
        maxHeight: "125px",
        overflow: "auto",
      }}
    >
      <h4>Image upload with preview </h4>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={imageChange}
      />
      <br />
      {selectedImage && (
        <>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt={altTitle}
            width={200}
            height={200}
          />
          <br />
          <button type="button" onClick={removeImage}>
            Remove Image
          </button>
        </>
      )}
    </Card>
  );
};

export default ImageWithPreview;
