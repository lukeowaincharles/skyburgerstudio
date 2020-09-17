import React, { useState } from "react";
import useWindowWidth from "../Utilities/WindowWidth";

function Navigation() {
  const width = useWindowWidth(),
    [isOpen, setOpen] = useState(false);

  // let delayLink = 0;
  // if (width <= 1200) {
  //   delayLink = 800;
  // }

  return (
    <React.Fragment>
      {width <= 992 ? (
        <div className={`hamburger__wrapper ${isOpen ? "isOpen" : ""}`}>
          <div className="hamburger">
            <div
              className={`hamburger__icon ${isOpen ? "isOpen" : ""}`}
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="overlay">
            {isOpen ? (
              <div className="container">

              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <nav>

        </nav>
      )}
    </React.Fragment>
  );
}

export default Navigation;
