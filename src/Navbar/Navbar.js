import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="header">
      <a className="link-contact" href="contact">
        SREEHARI
      </a>
      <a
        className="link-text"
        href="https://www.linkedin.com/in/sreehari-prasad-k-819a49235/"
      >
        LINKEDIN
      </a>
      <a className="link-text" href="https://github.com/sree-shp">
        GITHUB
      </a>
      <a className="link-text" href="mailto:sree2512k@gmail.com">
        EMAIL
      </a>
    </div>
  );
}

export default Navbar;
