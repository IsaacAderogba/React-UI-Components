import React from "react";
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import "./Card.css";

function CardContainer() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
          <CardBanner />
          <CardContent />
      </div>
    </div>
  );
}

export default CardContainer;
