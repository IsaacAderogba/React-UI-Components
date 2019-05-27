import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div>
          <i className="material-icons">chat_bubble_outline</i>
          <span />
        </div>
        <div>
          <i className="material-icons">cached</i>
          <span>6</span>
        </div>
        <div>
          <i className="material-icons">favorite_border</i>
          <span>3</span>
        </div>
        <div>
          <a href="mailto:recipient@domain.com?cc=other@domain.com">
            {" "}
            <i className="material-icons">mail_outline</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
