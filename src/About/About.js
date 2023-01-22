import React from "react";
import "./About.css";
import education from "../About/education_icon-removebg-preview.png";
import person from "../About/person_icon-removebg-preview.png";

function About() {
  return (
    <div id="about">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className="about-wrapper">
        <div className="about-row">
          <div className="about-column">
            <img className="icon" src={person} alt="" />
          </div>
          <div className="about-column">
            <p className="about-description to-right-background">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultrices consectetur nunc vitae tempus. Quisque blandit metus sed
              velit commodo dignissim. Nulla facilisi. Fusce finibus odio vitae
              vulputate maximus. Proin maximus sed nibh ut sollicitudin.
              Suspendisse interdum libero ac nibh ultrices ullamcorper. Morbi
              vitae nisi et nisl laoreet euismod. Nam vitae dignissim leo.
              Nullam a augue eros.
            </p>
          </div>
        </div>
        <div className="about-row">
          <div className="about-column">
            <p className="about-description to-left-background">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultrices consectetur nunc vitae tempus. Quisque blandit metus sed
              velit commodo dignissim. Nulla facilisi. Fusce finibus odio vitae
              vulputate maximus. Proin maximus sed nibh ut sollicitudin.
              Suspendisse interdum libero ac nibh ultrices ullamcorper. Morbi
              vitae nisi et nisl laoreet euismod. Nam vitae dignissim leo.
              Nullam a augue eros.
            </p>
          </div>
          <div className="about-column">
            <img className="icon" src={education} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
