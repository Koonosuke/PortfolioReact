import React from "react";

const ImageSection = ({ title, imgSrc, imgAlt, description }) => (
  <div className="container">
    <h1>{title}</h1>
    <img src={imgSrc} alt={imgAlt} />
    {description && <p>{description}</p>}
  </div>
);

export default ImageSection;
