import React from "react";
import ImageCard from "../../layout/ImageCard";

import "./ImageBanner.css";

export default function ImageBanner({ images }) {
  return (
    <div className="cardsContainer">
      {images.map((image) => (
        <div key={image.id} className="imageContainer">
          <ImageCard
            id={image.id}
            Image={image.Image}
            Title={image.Title}
            Description={image.Description}
          />
        </div>
      ))}
    </div>
  );
}
