import React from "react";

function Subservice(props) {
  const { title, itemList } = props;
  return (
    <div className="main-page-services-subservice">
      <h2 className="main-page-services-subservice-title">{title}</h2>
      <div className="main-page-services-subservice-items">
        <ul>
          <li>{itemList[0]}</li>
          <li>{itemList[1]}</li>
          <li>{itemList[2]}</li>
          <li>{itemList[3]}</li>
          <li>{itemList[4]}</li>
        </ul>
      </div>
      <div className="main-page-services-subservice-image"></div>
    </div>
  );
}

export default Subservice;
