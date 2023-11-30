import React from "react";
import { useParams } from "react-router-dom";
import "./ImageDetail.css";

export default function ImageDetail({ images }) {
  const { id } = useParams();
  const selectedImage = images.find((image) => image.id.toString() === id);

  if (!selectedImage) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <h2>{selectedImage.Title}</h2>
      <img
        className="imageDisplay"
        src={selectedImage.Image}
        alt={selectedImage.Title}
      />
      <p>{selectedImage.Description}</p>
    </div>
  );
}
