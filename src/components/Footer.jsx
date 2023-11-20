import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="main-page-footer">
      <div className="main-page-footer-container">
        <div className="main-page-footer-location">
          <h3>Konum</h3>
          <div>
            <CiLocationOn /> Karaman Organize Sanayi Bölgesi <br /> 5.Sokak No:4
          </div>
        </div>
        <div className="main-page-footer-contact">
          <h3>İletişim</h3>
          <div>
            <AiFillPhone /> +90 (538) 363 69 89
          </div>
          <div>
            <AiFillMail /> info@tacgroup.com
          </div>
        </div>
        <div className="main-page-footer-socials">
          <h3>Sosyal Medyada Biz</h3>
          <div className="main-page-footer-socials-items">
            <div>
              <AiFillInstagram
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/tacgroupcelik/",
                    "_blank"
                  );
                }}
              />
            </div>
            <div>
              <AiFillLinkedin
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/serifekizikdesignstudio",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
