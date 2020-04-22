import React, { useEffect, useState } from "react";
import * as Icons from "../Icons";
import { SketchPicker } from 'react-color';

// Setup some default values
let name = "'Recipient'",
  message = "Have an amazing birthday!",
  sender = "'Your name'",
  backgroundColor = "black",
  titleColor = "white",
  cardColor = "",
  textColor = "white";

// URLSearchParams is not IE compatible, there is a polyfill
const PARAMS = new URLSearchParams(window.location.search);

// initialise/set the params we want to control
if (PARAMS.has("name")) { name = PARAMS.get("name"); }
if (PARAMS.has("sender")) { sender = PARAMS.get("sender"); }
if (PARAMS.has("message")) { message = PARAMS.get("message"); }
if (PARAMS.has("backgroundColor")) { backgroundColor = PARAMS.get("backgroundColor"); }
if (PARAMS.has("cardColor")) { cardColor = PARAMS.get("cardColor"); }
if (PARAMS.has("titleColor")) { titleColor = PARAMS.get("titleColor"); }
if (PARAMS.has("textColor")) { textColor = PARAMS.get("textColor"); }

const default_settings = {
  name,
  message,
  sender,
  backgroundColor,
  cardColor,
  titleColor,
  textColor,
};

const HappyBirthday = () => {
  const [fadeIn, setFadeIn] = useState(false),
    [fadeDelay, setFadeDelay] = useState(false),
    [balloonShow, setBalloonShow] = useState(false),
    [isOpen, setOpen] = useState(true),
    [showBackgroundPicker, setShowBackgroundPicker] = useState(false),
    [form, setValues] = useState(default_settings);

  const handleFadeIn = () => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1500);
  }

  const handleFadeInDelay = () => {
    setTimeout(() => {
      setFadeDelay(true);
    }, 5000);
  }

  const handleBalloons = () => {
    setTimeout(() => {
      setBalloonShow(true);
    }, 2300);
  }

  const handleClick = () => {
    setOpen(!isOpen);
  }

  const updateParams = () => {
    Object.keys(form).forEach((i) => {
      PARAMS.set(i, form[i]);
      window.history.replaceState(
        { i: form[i] },
        "",
        `?${PARAMS.toString()}`
      );
    });
  }

  useEffect(() => {
    handleFadeIn();
    handleBalloons();
    handleFadeInDelay();
    updateParams();
  });

  const handleInputChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const toggleBackgroundPicker = () => {
    setShowBackgroundPicker(showBackgroundPicker => !showBackgroundPicker);
    console.log(showBackgroundPicker);
  }

  const handlebackgroundColorPicker = (color) => {
    setValues({...form, backgroundColor: color.hex });
  }

  const handleFormSubmit = (e) => {
    console.log('submitted form');
    e.preventDefault(); // Prevent page from reloading on submit
  }

  const checkState = () => {
    console.log(form);
  }

  const styles = {
    bgColor: {
      backgroundColor: `${form.backgroundColor}`,
    },
    cardColor: {
      backgroundColor: `${form.cardColor}`,
    },
    titleColor: {
      color: `${form.titleColor}`,
    },
    textColor: {
      color: `${form.textColor}`,
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
          <h3>{form.name}</h3>
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
              <h3>To {form.name}</h3>
              <p>{form.message}</p>
              <h5>from {form.sender}</h5>
            </div>
          </div>
        </div>
        <h1 className="text-center" style={styles.titleColor}>
          Happy Birthday {form.name}!!!
        </h1>
      </div>
      <div className={`${"settings"} ${fadeDelay ? "isDelayed" : "noShowAmigo"}`}>
        <div className={`${"settings__box"} ${isOpen ? "isOpen" : "isClosed"}`}>
          <div className="settings__input settings__name">
            <label htmlFor="name">To:</label>
            <input
              id="Name"
              placeholder="Name"
              type="text"
              name="name"
              defaultValue={form.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="settings__input settings__message">
            <label htmlFor="message">Message:</label>
            <input defaultValue={form.message} type="text" name="message" onChange={handleInputChange} />
          </div>
          <div className="settings__input settings__sender">
            <label htmlFor="from">From:</label>
            <input placeholder="Your name/s" type="text" name="sender" onChange={handleInputChange} />
          </div>
          <div className="settings__input settings__background">
            <label htmlFor="backgroundColor">Background Colour</label>
            <button className="btn btn-secondary" onClick={ toggleBackgroundPicker }>{showBackgroundPicker ? "Close" : "Choose background colour"}</button>
            {showBackgroundPicker ?
            <SketchPicker
              color={ form.backgroundColor }
              onChange={ handlebackgroundColorPicker }
            />
            : null }
          </div>
          <div className="settings__input settings__text">
            <label htmlFor="text">Card text colour:</label>
            <input defaultValue={form.textColor} type="text" name="textColor" onChange={handleInputChange} />
          </div>
          <div className="settings__input settings__card">
            <label htmlFor="card">Card colour:</label>
            <input defaultValue={form.cardColor} type="text" name="cardColor" onChange={handleInputChange} />
          </div>
          <div className="settings__input settings__birthday">
            <label htmlFor="happy">Happy Birthday colour:</label>
            <input defaultValue={form.titleColor} type="text" name="titleColor" onChange={handleInputChange} />
          </div>
          <div className="settings__submit">
            <input className="btn btn-primary" type="submit" onClick={handleFormSubmit} />
          </div>
          <button onClick={checkState}>Check State</button>
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
