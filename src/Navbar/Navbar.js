import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  var [state, setState] = useState(false, () => {
    state = !state;
  });

  useEffect(() => {
    const hamburgerIcon = document.getElementsByClassName(
      "hamburger-icon-container"
    );
    const hamburgerWrap = document.getElementsByClassName("hamburger-wrap");

    console.log(hamburgerIcon);

    hamburgerIcon[0].addEventListener("click", function () {
      setState();
      hamburgerWrap[0].classList.toggle("active");
    });
  }, [state]);

  return (
    <div id="header">
      <div className="header-wrap">
        <p className="home-link" to="/">
          SREEHARI
        </p>
        <div className="hamburger-menu">
          <div className="hamburger-icon-container">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

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
          E-MAIL
        </a>
      </div>
      <div className="hamburger-wrap active">
        <div className="hamburger-item">
          <a
            className="hamburger-link"
            href="https://www.linkedin.com/in/sreehari-prasad-k-819a49235/"
          >
            LINKEDIN
          </a>
        </div>
        <div className="hamburger-item">
          <a className="hamburger-link" href="https://github.com/sree-shp">
            GITHUB
          </a>
        </div>
        <div className="hamburger-item">
          <a className="hamburger-link" href="mailto:sree2512k@gmail.com">
            E-MAIL
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
