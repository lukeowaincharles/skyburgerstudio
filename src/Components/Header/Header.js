import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

function Header() {
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll >= 20) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  return (
    <div className={`header-wrapper background--black ${isFixed ? "header-scroll" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="header-logo">
              <p className="h4 letter__space">Skyburger Studio</p>
            </div>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end align-items-center">
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
