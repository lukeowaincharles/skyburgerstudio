import React, { useState } from "react";
import * as Icons from "../Icons";
import useWindowWidth from "../Utilities/WindowWidth";

function Splash() {
  const [isClosed, setClosed] = useState(false),
    width = useWindowWidth();

  const handleClose = () => {
    setClosed(!isClosed);
  };

  return (
    <section className="splash background--black" id="splashPage">
      <div className="container">
        <div className={`browser__wrapper ${isClosed ? "isClosed" : ""}`}>
          <div className="browser">
            {width >= 992 ? (
              <div className="browser__bar">
                <span
                  className="browser__ellipse browser__ellipse--close"
                  onClick={() => {
                    handleClose();
                  }}
                ></span>
                <span
                  className="browser__ellipse browser__ellipse--minimise"
                  onClick={() => {
                    handleClose();
                  }}
                ></span>
                <span className="browser__ellipse browser__ellipse--full-screen"></span>
              </div>
            ) : (
              <div className="browser__bar">
                <span className="browser__ellipse browser__ellipse--close"></span>
                <span className="browser__ellipse browser__ellipse--minimise"></span>
                <span className="browser__ellipse browser__ellipse--full-screen"></span>
              </div>
            )}
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
            <div className="browser__window text-center">
              {Icons.Code}

              {Icons.HeartPink}
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
