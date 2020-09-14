import React from "react";
import IntroData from "../../Data/IntroData.json";
import { WeLoveWebsites } from "../Icons";

function Intro() {
  const CONTENT = IntroData.content;

  return (
    <section className="intro background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              {CONTENT[0].title}
            </h1>
            <p>{CONTENT[0].text}</p>
          </div>
          <div className="col-md-6">
            {WeLoveWebsites}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
