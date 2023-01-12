import React from "react";
import "./Title.css";
import man from "../Title/man-min.png";

function Title() {
  return (
    <div id="title">
      <div className="welcome-page">
        <h1 className="welcome-heading">HI,</h1>
        <h2 className="welcome-heading">I'M SREEHARI</h2>
        <p className="description-heading">FRONTEND DEVELOPER</p>
        <p className="description">Creating classy websites is my passion</p>
      </div>
      <img className="home-img" src={man} alt="" />
      <div className="background-element"></div>
    </div>
  );
}

export default Title;
