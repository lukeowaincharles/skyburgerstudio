import React from "react";
import Card from "../Card/Card";
import WhoWeAreData from "../../Data/WhoWeAreData.json";

function WhoWeAre() {
  const CONTENT = WhoWeAreData.content;
  const cards = CONTENT.map((item, index) => {
    return (
      <div className="col-md-6" key={index}>
        <Card
          cardImage={item.image}
          cardImageAlt={item.alt}
          name={item.name}
          text={item.text}
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
