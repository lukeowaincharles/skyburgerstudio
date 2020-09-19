import React, { useState } from "react";
import { Link } from "react-scroll";
import NavData from "../../Data/NavData.json";
import useWindowWidth from "../Utilities/WindowWidth";

function Navigation() {
  const width = useWindowWidth(),
    [isOpen, setOpen] = useState(false),
    NAVCONTENT = NavData.content;

  let delayLink = 0;
  if (width <= 1200) {
    delayLink = 800;
  }

  const navItems = NAVCONTENT.map((item, index) => {
    return (
      <li key={index}>
        <Link
          to={item.link}
          href={item.link}
          smooth={true}
          duration={800}
          delay={delayLink}
          offset={-25}
          className="menu-list--item menu-link"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          {item.title}
        </Link>
      </li>
    );
  });

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
                <ul>{navItems}</ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <nav>
          <ul>{navItems}</ul>
        </nav>
      )}
    </React.Fragment>
  );
}

export default Navigation;
