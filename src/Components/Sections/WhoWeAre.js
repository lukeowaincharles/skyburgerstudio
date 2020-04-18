import React, { useRef, useState } from "react";
import Card from "../Card/Card";
import WhoWeAreData from "../../Data/WhoWeAreData.json";
import * as Icons from "../Icons";

function WhoWeAre() {
  const CONTENT = WhoWeAreData.content,
    containerRef = useRef(null),
    [hasMove, setMove] = useState(false);

  window.addEventListener(
    "scroll",
    function(event) {
      if (containerRef) {
        setTimeout(() => {
          setMove(true);
        }, 2500)
      }
    },
    false
  );

  const cards = CONTENT.map((item, index) => {
    let offset = "";
    if (index === 1) {
      offset = "offset-md-2";
    }
    return (
      <div className={`${"col-md-5"} ${offset}`} key={index}>
        <Card
          cardImage={item.image}
          cardImageAlt={item.alt}
          name={item.name}
          text={item.text}
          title={"Contact"}
          link={item.link}
        />
      </div>
    );
  });

  return (
    <section
      className="who-we-are  background--black"
      id="whoWeAre"
      name="#whoWeAre"
    >
      <div className="container" ref={containerRef}>
        <div className="row">{cards}</div>
      </div>
      <div
        className={`${"icons icons--who"} ${hasMove ? "hasMoved" : " "}`}
      >
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

export default WhoWeAre;
