import React from "react";
import ButtonSocial from "../Buttons/ButtonSocial";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={props.cardImage} alt={props.cardImageAlt} />
        <div className="card-content">
          <h3>{props.name}</h3>
          <p>{props.text}</p>
          <ButtonSocial
            title={props.title}
            link={props.link}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
