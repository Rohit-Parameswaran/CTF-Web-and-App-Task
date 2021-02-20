import React from "react";
import "./Card.css";
// import itemImage from "../images/home-bg.jpg";

const Card = (props) => {
  return (
    <div className="menu-item">
      <div className="img-class">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${props.item.title}.jpg`}
          alt={props.item.title}
        />
      </div>
      <div className="title-price-banner">
        <div className="item-title">{props.item.title}</div>
        <div className="item-price">{props.item.price}</div>
      </div>
    </div>
  );
};

export default Card;
