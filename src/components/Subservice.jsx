import React from "react";

function Subservice(props) {
  const { subserviceImg, title, description } = props;
  return (
    <div className="main-page-services-subservice">
      <img
        className="main-page-services-subservice-image"
        src={subserviceImg}
      ></img>
      <h2 className="main-page-services-subservice-title">{title}</h2>
      <div className="main-page-services-subservice-description">
        {description}
      </div>
    </div>
  );
}

export default Subservice;
