import React from "react";
import Card from "../Card/Card";
import WhoWeAreData from "../../Data/WhoWeAreData.json";

function WhoWeAre() {
  const CONTENT = WhoWeAreData.content;
  const cards = CONTENT.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <Card
          cardImage={item.image}
          cardImageAlt={item.alt}
          name={item.name}
          text={item.text}
        />
      </React.Fragment>
    );
  });

  return (
    <section
      className="who-we-are  background--black"
      id="whoWeAre"
      name="#whoWeAre"
    >
      <div className="container">{cards}</div>
    </section>
  );
}

export default WhoWeAre;
