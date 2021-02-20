import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-bar">
        <div className="icons">
          <a href="http://www.google.co.in">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="http://www.google.co.in">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="http://www.google.co.in">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="http://www.google.co.in">
            <i className="fab fa-google-play"></i>
          </a>
        </div>
        <div className="copyrights">
          Copyrighted <i className="far fa-copyright"></i> 2021 - Muruga Bhavan
        </div>
      </div>
    </>
  );
};

export default Footer;
