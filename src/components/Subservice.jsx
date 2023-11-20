import React from "react";

function Subservice(props) {
  const { title, description } = props;
  return (
    <div className="main-page-services-subservice">
      <div className="main-page-services-subservice-image"></div>
      <h2 className="main-page-services-subservice-title">{title}</h2>
      <div className="main-page-services-subservice-description">
        {description}
      </div>
    </div>
  );
}

export default Subservice;
