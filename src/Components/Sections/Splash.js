import React from "react";
import * as Icons from "../Icons";

function Splash() {
  return (
    <section className="splash background--black" id="splashPage">
      <div className="container">
        <div className="browser__wrapper">
          <div className="browser">
            <div className="browser__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="browser__window text-center">
              <p>Branding</p>
              <h1 className="h1--large letter__space">Skyburger Studio</h1>
              <p>Web design</p>
            </div>
          </div>
          <div className="browser--background">
            <div className="browser__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="splash__icons">
        <div className="icons__wrapper">
          {Icons.Code}

          {Icons.HeartPink}

          {Icons.Smiles}
          {Icons.Peace}

          {Icons.Cursor}

          {Icons.Hash}
        </div>
      </div>
    </section>
  );
}

export default Splash;
