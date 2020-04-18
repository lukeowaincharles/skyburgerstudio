import React, { useEffect, useState } from "react";

// URLSearchParams is not IE compatible, there is a polyfill
const PARAMS = new URLSearchParams(window.location.search);

// initialise/set the params we want to control
let name = "";
if (PARAMS.has("name")) {
  name = PARAMS.get("name");
}

let recipient = "";
if (PARAMS.has("recipient")) {
  recipient = PARAMS.get("recipient");
}

let message = "Have an amazing birthday!";
if (PARAMS.has("message")) {
  message = PARAMS.get("message");
}

let backgroundColor = "black";
if (PARAMS.has("backgroundColor")) {
  backgroundColor = PARAMS.get("backgroundColor");
}

let cardColor = "";
if (PARAMS.has("cardColor")) {
  cardColor = PARAMS.get("cardColor");
}

let titleColor = "white";
if (PARAMS.has("titleColor")) {
  titleColor = PARAMS.get("titleColor");
}

let textColor = "white";
if (PARAMS.has("textColor")) {
  textColor = PARAMS.get("textColor");
}

function HappyBirthday() {
  const [fadeIn, setFadeIn] = useState(false),
    [balloonShow, setBalloonShow] = useState(false);

  function handleFadeIn() {
    setTimeout(() => {
      setFadeIn(true);
    }, 1500);
  }

  function handleBalloons() {
    setTimeout(() => {
      setBalloonShow(true);
    }, 2300);
  }

  useEffect(() => {
    handleFadeIn();
    handleBalloons();

    PARAMS.set("name", name);
    window.history.replaceState({ name: name }, "", `?${PARAMS.toString()}`);

    PARAMS.set("recipient", recipient);
    window.history.replaceState(
      { recipient: recipient },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("message", message);
    window.history.replaceState(
      { message: message },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("backgroundColor", backgroundColor);
    window.history.replaceState(
      { backgroundColor: backgroundColor },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("cardColor", cardColor);
    window.history.replaceState(
      { cardColor: cardColor },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("titleColor", titleColor);
    window.history.replaceState(
      { titleColor: titleColor },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("textColor", textColor);
    window.history.replaceState(
      { textColor: textColor },
      "",
      `?${PARAMS.toString()}`
    );
  });

  const styles = {
    bgColor: {
      backgroundColor: `${backgroundColor}`,
    },
    cardColor: {
      backgroundColor: `${cardColor}`,
    },
    titleColor: {
      color: `${titleColor}`,
    },
    textColor: {
      color: `${textColor}`,
    },
  };

  return (
    <section
      className={`${"happy-birthday"} ${fadeIn ? "isShown" : "noShowAmigo"}`}
      style={styles.bgColor}
    >
      <div className="container text-center">
        <div className="envelope">
          <h3>To {name}</h3>
        </div>
        <div className={`${"balloon-wrapper"} ${balloonShow ? "isPartyTime" : "noParty"} `}>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
        </div>
        <div
          className="card text-center"
          style={{ ...styles.cardColor, ...styles.textColor }}
        >
          <div className="card-body">
            <div className="card-content">
              <h3>To {name}</h3>
              <p>{message}</p>
              <h5>from {recipient}</h5>
            </div>
          </div>
        </div>
        <h1 className="text-center" style={styles.titleColor}>
          Happy Birthday {name}!!
        </h1>
      </div>
    </section>
  );
}

export default HappyBirthday;
