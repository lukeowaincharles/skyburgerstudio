import React, { useEffect, useState } from "react";
import * as Icons from "../Icons";

// URLSearchParams is not IE compatible, there is a polyfill
const PARAMS = new URLSearchParams(window.location.search);

// initialise/set the params we want to control
let name = "'Recipient'";
if (PARAMS.has("name")) {
  name = PARAMS.get("name");
}

let sender = "'Your name'";
if (PARAMS.has("sender")) {
  sender = PARAMS.get("sender");
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

const default_settings = {
  name,
  sender,
  message,
  backgroundColor,
  cardColor,
  titleColor,
  textColor,
};

function HappyBirthday() {
  const [fadeIn, setFadeIn] = useState(false),
    [fadeDelay, setFadeDelay] = useState(false),
    [balloonShow, setBalloonShow] = useState(false),
    [isOpen, setOpen] = useState(true),
    [form, setValues] = useState(default_settings);

  function handleFadeIn() {
    setTimeout(() => {
      setFadeIn(true);
    }, 1500);
  }

  function handleFadInDelay() {
    setTimeout(() => {
      setFadeDelay(true);
    }, 5000);
  }

  function handleBalloons() {
    setTimeout(() => {
      setBalloonShow(true);
    }, 2300);
  }

  function handleClick() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    handleFadeIn();
    handleBalloons();
    handleFadInDelay();

    PARAMS.set("name", form.name);
    window.history.replaceState(
      { name: form.name },
      "",
      `?${PARAMS.toString()}`
    );

    PARAMS.set("sender", sender);
    window.history.replaceState(
      { sender: sender },
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
  }, [form.name]);

  // function handleFormPath(path) {
  //   setValues({ ...form });
  //   path = path + "?" + PARAMS.toString();
  //   // return <Redirect to={path} push />;
  // }

  // function updateParams(e, data) {
  //   if (data.name === "name") {
  //     setValues({
  //       ...form,
  //       name: data.value,
  //     });

  //   }
  //   // console.log(form.name)
  //   // console.log(data)
  //   console.log(name);
  //   return {
  //     name: form.name,
  //   };

  // }

  // const DATA = {
  //   Name: form.name
  // }

  // function objectToParams(data) {
  //   return Object.keys(data)
  //     .map((key) => `${key}=${encodeURIComponent(data[key])}`)
  //     .join("&");
  // }

  // function updatePath() {
  //   let path = "";
  //   // path = path + "?" + PARAMS.toString();
  //   setValues({ ...form });
  //   window.location.href = path;

  //   let params_obj = {
  //     name: DATA.Name,
  //   };
  //   return path + "?" + objectToParams(params_obj);
  // }

  // console.log(updatePath)

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
          <div className="stamp"></div>
          <h3>{name}</h3>
          <div className="address-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`${"balloon-wrapper"} ${
            balloonShow ? "isPartyTime" : "noParty"
          } `}
        >
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
              <h5>from {sender}</h5>
            </div>
          </div>
        </div>
        <h1 className="text-center" style={styles.titleColor}>
          Happy Birthday {name}!!!
        </h1>
      </div>
      <div className={`${"settings"} ${fadeDelay ? "isDelayed" : "noShowAmigo"}`}>
        <div className={`${"settings__box"} ${isOpen ? "isOpen" : "isClosed"}`}>
          <div className="settings__input settings__name">
            <label htmlFor="name">To:</label>
            <input
              id="Name"
              // onChange={updateParams}
              // onInput={updatePath}
              placeholder="Name"
              type="text"
              name="name"
            />
          </div>
          <div className="settings__input settings__message">
            <label htmlFor="message">Message:</label>
            <input defaultValue={message} type="text" name="message" />
          </div>
          <div className="settings__input settings__sender">
            <label htmlFor="from">From:</label>
            <input placeholder="Your name/s" type="text" name="from" />
          </div>
          <div className="settings__input settings__background">
            <label htmlFor="backgroundColor">Background Colour</label>
            <input
              defaultValue={backgroundColor}
              type="text"
              name="backgroundColor"
            />
          </div>
          <div className="settings__input settings__text">
            <label htmlFor="text">Card text colour:</label>
            <input defaultValue={textColor} type="text" name="text" />
          </div>
          <div className="settings__input settings__card">
            <label htmlFor="card">Card colour:</label>
            <input defaultValue={cardColor} type="text" name="card" />
          </div>
          <div className="settings__input settings__birthday">
            <label htmlFor="happy">Happy Birthday colour:</label>
            <input defaultValue={titleColor} type="text" name="happy" />
          </div>
          <div className="settings__submit">
            <input className="btn btn-primary" type="submit" />
          </div>
        </div>
        <div
          className="settings__icon"
          onClick={() => {
            handleClick();
          }}
        >
          {Icons.Settings}
          <span className="settings__pill">{`${
            isOpen ? "Close" : "Open"
          }`}</span>
        </div>
      </div>
    </section>
  );
}

export default HappyBirthday;
