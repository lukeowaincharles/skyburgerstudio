import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer name="#footer" id="footer" className="background--black">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="h3 letter__space">Skyburger Studio</p>
          </div>
          <div className="col-md-8 d-flex justify-content-md-end">
            <p>
              &copy; Skyburger Studio {currentYear}. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
