import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={props.cardImage} alt={props.cardImageAlt} />
        <div className="card-content">
          <h3>{props.name}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
