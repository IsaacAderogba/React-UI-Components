import React from "react";
import moment from "moment";

import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";


function HeaderContainer() {
  const date = moment().format("MMM Do YY");

  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle date={date}/>
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;
