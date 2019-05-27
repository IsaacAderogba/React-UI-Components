import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div>
          <i className="material-icons">chat_bubble_outline</i>
          <span>2</span>
        </div>
        <div>
          <i className="material-icons">cached</i>
          <span></span>
        </div>
        <div>
          <i className="material-icons">favorite_border</i>
          <span>3</span>
        </div>
        <div>
          <i className="material-icons">mail_outline</i>
          <span></span>
        </div>
      </div>
    </div>
  );
}


export default Footer;
