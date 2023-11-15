import React from "react";

function Subservice(props) {
  const { title } = props;
  return (
    <div className="main-page-services-subservice">
      <h2 className="main-page-services-subservice-title">{title}</h2>
      <div className="main-page-services-subservice-image"></div>
      {/* <div className="main-page-services-subservice-image"></div> */}
    </div>
  );
}

export default Subservice;
