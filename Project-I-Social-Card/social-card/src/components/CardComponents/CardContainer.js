import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

function CardContainer() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <a href="https://www.reactjs.org">
          <CardBanner />
          <CardContent />
        </a>
      </div>
    </div>
  );
}

export default CardContainer;
