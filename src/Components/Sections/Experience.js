import React from "react";
import ExperienceData from "../../Data/ExperienceData.json";
import { Browser } from "../Icons";

function Experience() {
  const CONTENT = ExperienceData.content;

  return (
    <section className="experience background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="browser--icon">
              {Browser}
              {Browser}
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <h2>{CONTENT[0].title}</h2>
            <p>{CONTENT[0].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
