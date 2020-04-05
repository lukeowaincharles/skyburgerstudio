import React, { useState, useEffect } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import FindOutMoreData from "../../Data/FindOutMoreData.json";
import * as Icons from "../Icons";

function FindOutMore() {
  const CONTENT = FindOutMoreData.content,
    [fadeIn, setFadeIn] = useState(false),
    [hasTransform, setTransform] = useState(false);

  function handleFadeIn() {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }

  function handleTransform() {
    setTimeout(() => {
      setTransform(true);
    }, 1000)
  }

  useEffect(() => {
    handleFadeIn();
    handleTransform();
  });

  return (
    <section className="find-out background--black">
      <div className="container">
        <h1 className={`${"load"} ${fadeIn ? "hasLoaded" : ""}`}>
          {CONTENT[0].title}
        </h1>
        <ButtonPrimary
          link={"#whoWeAre"}
          title={"Find out more"}
          id={"mainBtn"}
          classes={`${"load"} ${fadeIn ? "hasLoaded" : ""}`}
        />
      </div>
      <div className={`${"icons"} ${hasTransform ? "hasTransform" : ""}`}>
        <div className="icons__wrapper">
          {Icons.Code}
          {Icons.Plus}
          {Icons.Heart}
          {Icons.Pencil}
          {Icons.No}
          {Icons.Ya}
          {Icons.Ok}
          {Icons.Dots}
          {Icons.Cursor}
          {Icons.Exclaim}
          {Icons.Heart2}
          {Icons.Hash}
        </div>
      </div>
    </section>
  );
}

export default FindOutMore;
