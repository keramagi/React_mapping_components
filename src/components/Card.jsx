import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Detail DeInfo={props.tel} />
        <Detail DeInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
