import React from "react";

function ProcessCard(props) {
  const { title, description } = props;
  return (
    <div className="process-card">
      <h2 className="process-card-title">{title}</h2>
      <div className="process-card-image"></div>
      <div className="process-card-description">{description}</div>
    </div>
  );
}

export default ProcessCard;
