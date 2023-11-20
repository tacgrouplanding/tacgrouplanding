import React from "react";

function ProcessCard(props) {
  const { title, processImg, description } = props;
  return (
    <div className="process-card">
      <h2 className="process-card-title">{title}</h2>
      <img className="process-card-image" src={processImg}></img>
      <div className="process-card-description">{description}</div>
    </div>
  );
}

export default ProcessCard;
