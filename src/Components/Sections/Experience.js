import React from "react";
import ExperienceData from "../../Data/ExperienceData.json";
import { BrowserColour } from "../Icons";

function Experience() {
  const CONTENT = ExperienceData.content;

  return (
    <section className="experience background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="browser--icon">
              {BrowserColour}
            </div>
          </div>
          <div className="col-md-6">
            <h2>{CONTENT[0].title}</h2>
            {CONTENT[0].text.map(function (paragraph, i) {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
