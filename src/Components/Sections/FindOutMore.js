import React, { useState, useEffect } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import FindOutMoreData from "../../Data/FindOutMoreData.json";
// import * as Icons from "../Icons";

function FindOutMore() {
  const CONTENT = FindOutMoreData.content,
    [fadeIn, setFadeIn] = useState(false);

  function handleFadeIn() {
    setTimeout(() => {
      setFadeIn(true);
    }, 2000);
  }

  useEffect(() => {
    handleFadeIn();
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
      {/* {Icons.Code}
      {Icons.Hash}
      {Icons.Heart} */}
    </section>
  );
}

export default FindOutMore;
