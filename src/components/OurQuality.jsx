import React from "react";

function OurQuality(props) {
  const { description, icon, subdescription } = props;
  return (
    <div className="our-quality">
      <h2 className="our-quality-description">{description}</h2>
      <div className="our-quality-icon">
        <img
          src={icon}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        ></img>
      </div>
      <p className="our-quality-subdescription">{subdescription}</p>
    </div>
  );
}

export default OurQuality;
