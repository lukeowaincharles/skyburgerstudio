import React, { useState } from "react";
import { Link } from "react-scroll";
import NavData from "../../Data/NavData.json";
import useWindowWidth from "../Utilities/WindowWidth";

function Navigation() {
  const width = useWindowWidth(),
    [isOpen, setOpen] = useState(false),
    NAVCONTENT = NavData.content;

  let delayLink = 0,
    menuClass = 'menu-list--item';

  if (width <= 992) {
    delayLink = 800;
    menuClass = 'hamburger__menu-list--item';
  }

  const navItems = NAVCONTENT.map((item, index) => {
    return (
      <li className={menuClass} key={index}>
        <Link
          to={item.link}
          href={item.link}
          smooth={true}
          duration={800}
          delay={delayLink}
          offset={-25}
          className="menu-link"
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
        <div className={`d-none hamburger__wrapper ${isOpen ? "isOpen" : ""}`}>
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
                <ul className="hamburger__menu-list">{navItems}</ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <nav>
          <ul className="menu-list">{navItems}</ul>
        </nav>
      )}
    </React.Fragment>
  );
}

export default Navigation;
