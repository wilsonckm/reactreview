import React from "react";
import "./ImageCard.css";
import { Link, useParams } from "react-router-dom";

export default function ImageCard({ Image, Title, Description, id }) {
  return (
    <>
      <div className="imageCard" key={Image.id}>
        <div>
          <h1>{Title}</h1>
          <img className="imageContent" src={Image} alt="Central park" />
        </div>
        <h3> {Description} </h3>
        <Link to={`/image/${id}`}>View Details</Link>
      </div>
    </>
  );
}
