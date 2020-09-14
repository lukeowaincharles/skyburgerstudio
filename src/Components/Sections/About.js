import React from "react";
import AboutData from "../../Data/AboutData.json";

function About() {
  const CONTENT = AboutData.content;

  return (
    <section className="intro background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>{CONTENT[0].title}</h2>
            {CONTENT[0].text.map(function (paragraph, i) {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
          <div className="col-md-5">
            <img alt="Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
