import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import taclogo from "@assets/tac-logo.svg";

function HeaderAbout() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  window.addEventListener("resize", adapt);

  function adapt() {
    if (window.innerWidth >= 900) {
      setExpanded(false);
    }
  }

  return (
    <div className="main-page-header">
      <div className="main-page-header-container">
        <div className="main-page-header-container-logo">
          <img
            src={taclogo}
            style={{
              filter: "invert(1)",
              width: "100px",
            }}
          ></img>
        </div>
        <div
          className={
            expanded
              ? `main-page-header-container-mobile`
              : `main-page-header-container-menu`
          }
        >
          <div
            className="main-page-header-container-menu-item"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
          >
            Ana Sayfa
          </div>
        </div>
        <div
          className="main-page-header-container-burger"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          {expanded ? <MdOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </div>
  );
}

export default HeaderAbout;
