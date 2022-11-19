import { React, useState } from "react";
import "./BodyType.css";

const BodyType = ({ bodytype }) => {
  return (
    <div className="img-container">
     <img key={bodytype.id} src={bodytype.imageSrc} alt="body" />
      
    </div>
  );
};

export default BodyType;
