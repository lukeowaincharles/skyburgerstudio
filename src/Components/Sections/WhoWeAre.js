import React from "react";
import Card from "../Card/Card";
import WhoWeAreData from "../../Data/WhoWeAreData.json";

function WhoWeAre() {
  const CONTENT = WhoWeAreData.content;
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
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </section>
  );
}

export default WhoWeAre;
