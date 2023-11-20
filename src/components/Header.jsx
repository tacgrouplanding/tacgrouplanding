import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import taclogo from "@assets/tac-logo.svg";

function Header() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  window.addEventListener("resize", adapt);

  function adapt() {
    if (window.innerWidth >= 900) {
      setExpanded(false);
    }
  }

  const scrollClick = (scrollId) => {
    window.scrollTo({
      top: document.getElementById(scrollId).offsetTop - 200,
      behavior: "smooth",
    });
  };
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
              navigate("/hakkimizda");
            }}
          >
            Hakkımızda
          </div>
          <div
            className="main-page-header-container-menu-item"
            onClick={() => {
              scrollClick("hizmetlerimiz");
            }}
          >
            Hizmetlerimiz
          </div>
          <div
            className="main-page-header-container-menu-item"
            onClick={() => {
              scrollClick("nedenbiz");
            }}
          >
            Neden Biz?
          </div>
          <div
            className="main-page-header-container-menu-item"
            onClick={() => {
              scrollClick("surecimiz");
            }}
          >
            Sürecimiz
          </div>
          <div
            className="main-page-header-container-menu-item"
            onClick={() => {
              scrollClick("iletisim");
            }}
          >
            İletişim
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

export default Header;
