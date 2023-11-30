import React from "react";
import "./Home.css";
import ImageBanner from "../../layout/ImageBanner";

export default function Home({ images }) {
  return (
    <>
      <div>This is the Home screen</div>
      <ImageBanner images={images} />
    </>
  );
}
